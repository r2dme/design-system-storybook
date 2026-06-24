import type { Meta, StoryObj } from '@storybook/react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../components/ui/tooltip'
import { Input } from '../components/ui/input'
import { Info, HelpCircle } from 'lucide-react'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="underline cursor-pointer text-sm">Hover me</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const PasswordCriteria: Story = {
  render: () => (
    <TooltipProvider>
      <div className="max-w-[344px] space-y-2">
        <label className="text-sm font-medium">Enter password</label>
        <div className="relative flex items-center">
          <Input type="password" placeholder="••••••••" className="pr-10" />
          <Tooltip>
            <TooltipTrigger className="absolute right-3 cursor-pointer">
              <Info className="size-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Password must be at least 8 characters</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  ),
}

export const EmailNotifications: Story = {
  render: () => (
    <TooltipProvider>
      <div className="max-w-[344px] space-y-2">
        <label className="text-sm font-medium">Your email address</label>
        <div className="relative flex items-center">
          <Input type="email" placeholder="you@example.com" className="pr-10" />
          <Tooltip>
            <TooltipTrigger className="absolute right-3 cursor-pointer">
              <Info className="size-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>We’ll use this to send you notifications</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  ),
}

export const ApiHelp: Story = {
  render: () => (
    <TooltipProvider>
      <div className="max-w-[344px] flex items-center space-x-2">
        <span className="text-sm font-medium">Your email address</span>
        <Tooltip>
          <TooltipTrigger className="cursor-pointer">
            <HelpCircle className="size-4 text-muted-foreground" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Click for help with API keys</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
}