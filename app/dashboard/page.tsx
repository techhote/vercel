import { redirect } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { formatFileSize } from "@/lib/pdf-utils"
import { Download } from "lucide-react"
import Link from "next/link"
import { DeleteFileButton } from "@/components/delete-file-button"
import { SignOutButton } from "@/components/sign-out-button"

export default async function DashboardPage() {
  const supabase = await getSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/signin")
  }

  const { data: files } = await supabase
    .from("files")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(50)

  const stats = {
    totalFiles: files?.length || 0,
    totalSize: files?.reduce((acc, file) => acc + file.file_size, 0) || 0,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
            <SignOutButton />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{stats.totalFiles}</CardTitle>
                <CardDescription>Total Files</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{formatFileSize(stats.totalSize)}</CardTitle>
                <CardDescription>Storage Used</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">24h</CardTitle>
                <CardDescription>Auto-delete Timer</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Files</CardTitle>
              <CardDescription>Your processed PDF files (auto-delete after 24 hours)</CardDescription>
            </CardHeader>
            <CardContent>
              {!files || files.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No files yet</p>
                  <Button asChild>
                    <Link href="/#tools">Start Using Tools</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                  {files.map((file) => (
                    <div key={file.id} className="flex items-center justify-between p-3 rounded-lg border">
                      <div className="flex-1">
                        <p className="font-medium">{file.original_name}</p>
                        <p className="text-sm text-muted-foreground">
                          {file.operation_type.toUpperCase()} • {formatFileSize(file.file_size)} •{" "}
                          {new Date(file.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" asChild>
                          <a href={file.blob_url} target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4" />
                          </a>
                        </Button>
                        <DeleteFileButton fileId={file.id} blobUrl={file.blob_url} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
