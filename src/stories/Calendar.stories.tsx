import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from '../components/ui/calendar'
import * as React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu'
import { Button } from '../components/ui/button'
import { ChevronDown, CalendarIcon } from 'lucide-react'

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border shadow w-fit p-3"
      />
    )
  },
}

export const MonthAndYearSelector: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 21))
    const [month, setMonth] = React.useState('Jun')
    const [year, setYear] = React.useState('2025')
    
    return (
      <div className="rounded-lg border border-border shadow-sm p-4 w-[280px] bg-background space-y-4">
        <div className="flex items-center justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1 px-2 h-8 text-sm font-medium">
                {month} <ChevronDown className="size-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setMonth('Jun')}>Jun</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setMonth('Jul')}>Jul</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setMonth('Aug')}>Aug</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1 px-2 h-8 text-sm font-medium">
                {year} <ChevronDown className="size-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setYear('2024')}>2024</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setYear('2025')}>2025</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setYear('2026')}>2026</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={new Date(parseInt(year), month === 'Jun' ? 5 : month === 'Jul' ? 6 : 7)}
          className="p-0 border-none shadow-none w-full"
        />
        
        <div className="text-xs text-muted-foreground border-t pt-3 flex items-center gap-1.5 justify-center">
          <CalendarIcon className="size-3.5" />
          <span>Scheduled: {month} {date?.getDate() || 21}, {year}</span>
        </div>
      </div>
    )
  },
}