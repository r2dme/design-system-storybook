import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '../components/ui/label'

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  render: () => (
    <div>
      <Label htmlFor="email">Your email address</Label>
    </div>
  ),
}