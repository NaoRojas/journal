'use client'

import * as React from 'react'
import { format, set } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export function DatePicker({ onSelect, value = null }) {
  const [date, setDate] = React.useState<Date>()

  const onDateSelect = (date) => {
    setDate(date)
    onSelect(value || date)
  }

  React.useEffect(() => {
    if (value) {
      setDate(value)
    }
  }, [])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !!(value || date) && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ?? date ? (
            format(value || date, 'PPP')
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar selected={value || date} onSelect={onDateSelect} />
      </PopoverContent>
    </Popover>
  )
}
