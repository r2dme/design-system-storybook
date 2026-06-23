import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
}

export const Fallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://invalid-url-that-fails.jpg" alt="Avatar User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
}

export const CustomSize: Story = {
  render: (args) => (
    <Avatar className="h-16 w-16" {...args}>
      <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar User" />
      <AvatarFallback className="text-lg">JD</AvatarFallback>
    </Avatar>
  ),
}
