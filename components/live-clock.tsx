"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

export function LiveClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2 shadow-sm animate-fade-in">
      <Clock className="h-4 w-4 text-primary" />
      <div className="flex flex-col">
        <span className="text-sm font-semibold tabular-nums">{formatTime(time)}</span>
        <span className="text-xs text-muted-foreground">{formatDate(time)}</span>
      </div>
    </div>
  )
}
