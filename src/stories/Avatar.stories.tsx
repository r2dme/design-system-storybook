import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar'
import { Button } from '../components/ui/button'
import { Plus } from 'lucide-react'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Avatar>

export const DefaultAvatar: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/evilrabbit.png" alt="Evil Rabbit" />
      <AvatarFallback>ER</AvatarFallback>
    </Avatar>
  ),
}

export const TeamMemberCard: Story = {
  render: () => (
    <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-background shadow-sm w-full max-w-[512px] gap-4">
      <div className="flex items-center gap-3">
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/evilrabbit.png" alt="Evil Rabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <div className="space-y-0.5">
          <h4 className="text-sm font-medium text-foreground leading-none">Evil Rabbit</h4>
          <p className="text-xs text-muted-foreground">Last seen 5 months ago</p>
        </div>
      </div>
      <Button variant="outline" size="icon" className="size-8 rounded-md">
        <Plus className="size-4" />
      </Button>
    </div>
  ),
}

export const TeamGroupCard: Story = {
  render: () => (
    <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-background shadow-sm w-full max-w-[512px] gap-4">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-3 overflow-hidden">
          <Avatar className="inline-block size-8 border-2 border-background">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <Avatar className="inline-block size-8 border-2 border-background">
            <AvatarImage src="https://github.com/maxleiter.png" />
            <AvatarFallback>ML</AvatarFallback>
          </Avatar>
          <Avatar className="inline-block size-8 border-2 border-background">
            <AvatarImage src="https://github.com/evilrabbit.png" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </div>
        <div className="space-y-0.5">
          <h4 className="text-sm font-medium text-foreground leading-none">No Team Members</h4>
          <p className="text-xs text-muted-foreground">Invite your team to collaborate on this project.</p>
        </div>
      </div>
      <Button variant="outline" size="sm" className="h-8 text-xs font-medium rounded-md px-3">
        Invite
      </Button>
    </div>
  ),
}
