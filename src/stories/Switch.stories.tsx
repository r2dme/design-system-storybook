import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '../components/ui/switch'
import { Label } from '../components/ui/label'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-3">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode" className="text-sm font-medium leading-none cursor-pointer">
        Airplane mode
      </Label>
    </div>
  ),
}

export const Active: Story = {
  render: () => (
    <div className="flex items-center space-x-3">
      <Switch id="airplane-mode-active" defaultChecked />
      <Label htmlFor="airplane-mode-active" className="text-sm font-medium leading-none cursor-pointer">
        Airplane mode
      </Label>
    </div>
  ),
}