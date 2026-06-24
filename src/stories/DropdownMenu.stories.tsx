import type { Meta, StoryObj } from '@storybook/react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu'
import { Button } from '../components/ui/button'
import { ChevronDown } from 'lucide-react'

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2 rounded-[8px]">
          <span>Follow</span>
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[178.9px]">
        <DropdownMenuItem>Mute Conversation</DropdownMenuItem>
        <DropdownMenuItem>Mark as Read</DropdownMenuItem>
        <DropdownMenuItem>Report Conversation</DropdownMenuItem>
        <DropdownMenuItem>Block User</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Share Conversation</DropdownMenuItem>
        <DropdownMenuItem>Copy Conversation</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive font-medium focus:text-destructive">Delete Conversation</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}