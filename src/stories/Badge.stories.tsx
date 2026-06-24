import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../components/ui/badge'
import { Check } from 'lucide-react'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
    children: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Badge',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

export const SecondaryWithIcon: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Badge {...args} className="bg-[#171717] hover:bg-[#171717]/80 gap-1 rounded-[10px]">
      <Check className="size-3 text-white" />
      <span>Verified</span>
    </Badge>
  ),
}

export const DefaultNumber: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Badge {...args} className="rounded-full size-5 p-0 flex items-center justify-center">
      8
    </Badge>
  ),
}

export const DestructiveNumber: Story = {
  args: {
    variant: 'destructive',
  },
  render: (args) => (
    <Badge {...args} className="rounded-full h-5 px-1.5 flex items-center justify-center bg-[#dc2626] hover:bg-[#dc2626]/80 text-white font-medium">
      99
    </Badge>
  ),
}

export const SecondaryNumber: Story = {
  args: {
    variant: 'outline',
  },
  render: (args) => (
    <Badge {...args} className="rounded-full h-5 px-1.5 flex items-center justify-center font-mono border-[#e5e5e5]">
      20+
    </Badge>
  ),
}
