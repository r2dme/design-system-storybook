import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '../components/ui/checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
}

export const CheckboxCard: Story = {
  render: () => (
    <div className="space-y-4 max-w-[441.4px]">
      {/* Unchecked state */}
      <div className="flex items-start gap-3 p-3 border border-border rounded-[10px] bg-background shadow-sm">
        <Checkbox id="card-unchecked" className="mt-1" />
        <div className="space-y-1">
          <label htmlFor="card-unchecked" className="text-sm font-medium leading-none cursor-pointer">
            Enable notifications
          </label>
          <p className="text-xs text-muted-foreground">
            You can enable or disable notifications at any time.
          </p>
        </div>
      </div>

      {/* Checked state styling matching figma fills: #f5f5f5, stroke: #171717 */}
      <div className="flex items-start gap-3 p-3 border border-[#171717] rounded-[10px] bg-[#f5f5f5] shadow-sm">
        <Checkbox id="card-checked" defaultChecked className="mt-1 border-[#171717] data-[state=checked]:bg-[#171717]" />
        <div className="space-y-1">
          <label htmlFor="card-checked" className="text-sm font-medium leading-none cursor-pointer">
            Enable notifications
          </label>
          <p className="text-xs text-muted-foreground">
            You can enable or disable notifications at any time.
          </p>
        </div>
      </div>
    </div>
  ),
}