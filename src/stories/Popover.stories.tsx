import type { Meta, StoryObj } from '@storybook/react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../components/ui/popover'
import { Button } from '../components/ui/button'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the width and height for the layer.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}