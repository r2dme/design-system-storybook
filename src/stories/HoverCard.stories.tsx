import type { Meta, StoryObj } from '@storybook/react'
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '../components/ui/hover-card'
import { Calendar } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger className="underline cursor-pointer text-sm font-medium hover:text-primary/80">
        @nextjs
      </HoverCardTrigger>
      <HoverCardContent className="w-[304px] p-4 bg-background border rounded-lg shadow-md">
        <div className="flex space-x-4">
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1.5 flex-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm text-foreground">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2 text-xs text-muted-foreground gap-1.5">
              <Calendar className="size-3.5" />
              <span>Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}