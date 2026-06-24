import type { Meta, StoryObj } from '@storybook/react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../components/ui/popover'
import { Button } from '../components/ui/button'
import { Bot, ChevronDown } from 'lucide-react'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <div className="inline-flex rounded-lg border border-border overflow-hidden bg-background shadow-sm h-9">
          <Button variant="ghost" className="rounded-none border-r border-border h-full gap-2 px-3">
            <Bot className="size-4" />
            <span className="text-sm font-medium">Copilot</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-none h-full w-9">
            <ChevronDown className="size-4" />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[286.7px] p-4 bg-background border border-border rounded-lg shadow-md space-y-3">
        <div className="space-y-1">
          <h4 className="font-semibold text-sm leading-none flex items-center gap-1.5">
            <Bot className="size-4 text-primary" />
            Agent Task
          </h4>
          <p className="text-xs text-muted-foreground">
            Describe your task in natural language. Copilot will work in the background and open a pull request for your review.
          </p>
        </div>
        <textarea 
          placeholder="Describe your task..." 
          className="w-full min-h-[80px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
        />
        <Button className="w-full text-xs h-8">Start a new task with Copilot</Button>
      </PopoverContent>
    </Popover>
  ),
}