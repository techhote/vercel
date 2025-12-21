// PDF utility functions and types
export type PDFOperation = "merge" | "split" | "convert" | "compress" | "generate"

export interface FileRecord {
  id: string
  user_id: string | null
  original_name: string
  blob_url: string
  file_size: number
  file_type: string
  operation_type: PDFOperation
  created_at: string
  expires_at: string
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i]
}

export function validatePDFFile(file: File): boolean {
  return file.type === "application/pdf"
}

export function validateImageFile(file: File): boolean {
  return ["image/jpeg", "image/png", "image/gif", "image/webp"].includes(file.type)
}
