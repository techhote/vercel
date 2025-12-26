export function AdPlaceholder({ size = "large" }: { size?: "small" | "medium" | "large" }) {
  const heights = {
    small: "h-24",
    medium: "h-40",
    large: "h-64",
  }

  return (
    <div
      className={`w-full ${heights[size]} rounded-lg border-2 border-dashed border-muted-foreground/20 bg-muted/30 flex items-center justify-center animate-fade-in`}
    >
      <div className="text-center px-4">
        <p className="text-sm font-medium text-muted-foreground">Advertisement Space</p>
        <p className="text-xs text-muted-foreground/70 mt-1">AdSense ads will appear here after approval</p>
      </div>
    </div>
  )
}
