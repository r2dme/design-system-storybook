import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group'
import { Label } from '../components/ui/label'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '../components/ui/dropdown-menu'
import { Button } from '../components/ui/button'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
    </RadioGroup>
  ),
}

export const DropdownRadioGroup: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[224px] justify-between">
          <span>Open</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[224px] p-3 space-y-3">
        <div className="font-semibold text-sm px-2 pb-1 border-b border-border">
          Panel Position
        </div>
        <RadioGroup defaultValue="bottom" className="space-y-2 px-2 pt-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="top" id="top" />
            <Label htmlFor="top" className="cursor-pointer">Top</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="bottom" id="bottom" />
            <Label htmlFor="bottom" className="cursor-pointer">Bottom</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="right" id="right" />
            <Label htmlFor="right" className="cursor-pointer">Right</Label>
          </div>
        </RadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}