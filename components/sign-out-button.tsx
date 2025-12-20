"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { useToast } from "@/hooks/use-toast"

export function SignOutButton() {
  const router = useRouter()
  const { toast } = useToast()

  const handleSignOut = async () => {
    try {
      const supabase = getSupabaseBrowserClient()
      await supabase.auth.signOut()

      toast({
        title: "Success",
        description: "Signed out successfully",
      })

      router.push("/")
      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      })
    }
  }

  return (
    <Button variant="outline" onClick={handleSignOut}>
      Sign Out
    </Button>
  )
}
