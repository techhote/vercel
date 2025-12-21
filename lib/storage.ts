interface StorageAdapter {
  put(pathname: string, data: Blob | Buffer, options: { contentType?: string }): Promise<{ url: string }>
  del(url: string): Promise<void>
}

class VercelBlobAdapter implements StorageAdapter {
  async put(pathname: string, data: Blob | Buffer, options: { contentType?: string }) {
    const { put } = await import("@vercel/blob")
    const blob = data instanceof Buffer ? new Blob([data], { type: options.contentType }) : data
    const result = await put(pathname, blob, {
      access: "public",
      contentType: options.contentType,
    })
    return { url: result.url }
  }

  async del(url: string) {
    const { del } = await import("@vercel/blob")
    await del(url)
  }
}

class ExternalStorageAdapter implements StorageAdapter {
  private baseUrl: string
  private apiKey: string

  constructor() {
    this.baseUrl = process.env.EXTERNAL_STORAGE_URL || ""
    this.apiKey = process.env.EXTERNAL_STORAGE_API_KEY || ""
  }

  async put(pathname: string, data: Blob | Buffer, options: { contentType?: string }) {
    // Convert data to buffer for upload
    const buffer = data instanceof Buffer ? data : Buffer.from(await data.arrayBuffer())

    // Upload to external storage (customize based on your hosting provider)
    const formData = new FormData()
    formData.append("file", new Blob([buffer], { type: options.contentType }), pathname)

    const response = await fetch(`${this.baseUrl}/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: formData,
    })

    if (!response.ok) {
      throw new Error("Failed to upload to external storage")
    }

    const result = await response.json()
    return { url: result.url }
  }

  async del(url: string) {
    await fetch(`${this.baseUrl}/delete`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    })
  }
}

class CpanelStorageAdapter implements StorageAdapter {
  private uploadUrl: string
  private apiKey: string
  private publicUrl: string

  constructor() {
    this.uploadUrl = process.env.CPANEL_UPLOAD_URL || ""
    this.apiKey = process.env.CPANEL_API_KEY || ""
    this.publicUrl = process.env.CPANEL_PUBLIC_URL || ""
  }

  async put(pathname: string, data: Blob | Buffer, options: { contentType?: string }) {
    const buffer = data instanceof Buffer ? data : Buffer.from(await data.arrayBuffer())

    const formData = new FormData()
    formData.append("file", new Blob([buffer], { type: options.contentType }), pathname)
    formData.append("api_key", this.apiKey)
    formData.append("path", pathname)

    const response = await fetch(this.uploadUrl, {
      method: "POST",
      body: formData,
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Failed to upload to cPanel storage: ${error}`)
    }

    const result = await response.json()
    return { url: `${this.publicUrl}/${pathname}` }
  }

  async del(url: string) {
    const pathname = url.replace(this.publicUrl + "/", "")

    const response = await fetch(this.uploadUrl.replace("upload.php", "delete.php"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: this.apiKey,
        path: pathname,
      }),
    })

    if (!response.ok) {
      console.error("Failed to delete from cPanel storage")
    }
  }
}

// Factory to get the appropriate storage adapter
export function getStorageAdapter(): StorageAdapter {
  const provider = process.env.STORAGE_PROVIDER || "vercel"

  switch (provider) {
    case "cpanel":
      return new CpanelStorageAdapter()
    case "external":
      return new ExternalStorageAdapter()
    case "vercel":
    default:
      return new VercelBlobAdapter()
  }
}

// Convenience functions that use the configured adapter
export async function uploadToStorage(pathname: string, data: Blob | Buffer, contentType?: string) {
  const adapter = getStorageAdapter()
  return adapter.put(pathname, data, { contentType })
}

export async function deleteFromStorage(url: string) {
  const adapter = getStorageAdapter()
  return adapter.del(url)
}
