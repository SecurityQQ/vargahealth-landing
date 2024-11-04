"use client"

import { useState, useEffect } from 'react'
import { formatDistanceToNow, format, isAfter, subDays } from 'date-fns'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface CardDatesProps {
  sourcePublishDate?: string; // ISO 8601 date string for video publish date
  createdAt?: string; // ISO 8601 date string for card creation date
}

export default function Component({ sourcePublishDate, createdAt }: CardDatesProps) {
  const [timeAgo, setTimeAgo] = useState('')
  const [isNew, setIsNew] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      if (createdAt) {
        const date = new Date(createdAt)
        setTimeAgo(formatDistanceToNow(date, { addSuffix: true }))
        setIsNew(isAfter(date, subDays(new Date(), 7)))
      }
    }

    updateTime()
    const timer = setInterval(updateTime, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [createdAt])

  const formatDate = (date: string) => {
    return format(new Date(date), 'd MMM')
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="inline-flex items-center space-x-1 text-xs text-muted-foreground">
            {isNew && (
              <span className="px-2 py-1 bg-green-500 m-1 text-white rounded-full text-[10px] font-semibold">
                NEW
              </span>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            {sourcePublishDate && `Originally Published: ${format(new Date(sourcePublishDate), 'MMMM d, yyyy')}`}
            {sourcePublishDate && createdAt && <br />}
            {createdAt && `Added On Brogevity: ${format(new Date(createdAt), 'MMMM d, yyyy')}`}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}