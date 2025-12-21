import { put, del } from "@vercel/blob"

export async function uploadToBlob(file: File, pathname: string) {
  const blob = await put(pathname, file, {
    access: "public",
  })
  return blob
}

export async function deleteFromBlob(url: string) {
  await del(url)
}
