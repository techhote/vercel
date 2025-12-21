import { type NextRequest, NextResponse } from "next/server"
import { deleteFromStorage } from "@/lib/storage"
import { getSupabaseServerClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const { fileId, blobUrl } = await request.json()

    const supabase = await getSupabaseServerClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Delete from database
    const { error: dbError } = await supabase.from("files").delete().eq("id", fileId).eq("user_id", user.id)

    if (dbError) throw dbError

    await deleteFromStorage(blobUrl)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error deleting file:", error)
    return NextResponse.json({ error: "Failed to delete file" }, { status: 500 })
  }
}
