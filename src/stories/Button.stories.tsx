import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/ui/button'
import { ChevronRight, GitCompare, Loader2, ArrowUp, ArrowUpRight, ArrowLeft } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'Button',
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

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
}

export const IconOnly: Story = {
  args: {
    variant: 'outline',
    size: 'icon',
  },
  render: (args) => (
    <Button {...args} className="rounded-[10px]">
      <ChevronRight className="size-4" />
    </Button>
  ),
}

export const WithIcon: Story = {
  args: {
    variant: 'outline',
  },
  render: (args) => (
    <Button {...args} className="rounded-[10px] gap-2 h-8 px-2.5">
      <GitCompare className="size-4" />
      <span>New Branch</span>
    </Button>
  ),
}

export const Loading: Story = {
  args: {
    variant: 'outline',
    disabled: true,
  },
  render: (args) => (
    <Button {...args} className="rounded-[10px] gap-2 h-8 px-2.5">
      <Loader2 className="size-4 animate-spin" />
      <span>Submit</span>
    </Button>
  ),
}

export const SizeSmall: Story = {
  args: {
    variant: 'outline',
    size: 'sm',
  },
  render: (args) => (
    <Button {...args} className="gap-2">
      <span>Small</span>
      <ArrowUpRight className="size-3.5" />
    </Button>
  ),
}

export const SizeDefault: Story = {
  args: {
    variant: 'outline',
    size: 'default',
  },
  render: (args) => (
    <Button {...args} className="gap-2">
      <span>Default</span>
      <ArrowUpRight className="size-4" />
    </Button>
  ),
}

export const SizeLarge: Story = {
  args: {
    variant: 'outline',
    size: 'lg',
  },
  render: (args) => (
    <Button {...args} className="gap-2">
      <span>Large</span>
      <ArrowUpRight className="size-4" />
    </Button>
  ),
}

export const Rounded: Story = {
  args: {
    variant: 'outline',
    size: 'icon',
  },
  render: (args) => (
    <Button {...args} className="rounded-full">
      <ArrowUp className="size-4" />
    </Button>
  ),
}

export const ButtonGroup: Story = {
  render: () => (
    <div className="inline-flex rounded-lg border border-border shadow-sm overflow-hidden bg-background">
      <Button variant="ghost" size="icon" className="rounded-none border-r border-border h-9 w-9">
        <ArrowLeft className="size-4" />
      </Button>
      <Button variant="ghost" className="rounded-none border-r border-border h-9 text-sm px-4">
        Archive
      </Button>
      <Button variant="ghost" className="rounded-none border-r border-border h-9 text-sm px-4">
        Report
      </Button>
      <Button variant="ghost" className="rounded-none h-9 text-sm px-4">
        Snooze
      </Button>
    </div>
  ),
}
