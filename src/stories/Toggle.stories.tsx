import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from '../components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '../components/ui/toggle-group'
import { Bold, Italic, Underline } from 'lucide-react'

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
}

export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  ),
}

export const WithText: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold" className="gap-2 px-3">
      <Bold className="h-4 w-4" />
      <span>Bold</span>
    </Toggle>
  ),
}

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ToggleGroup type="multiple" defaultValue={["bold"]}>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
}