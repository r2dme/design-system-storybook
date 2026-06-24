import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '../components/ui/slider'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: () => (
    <div className="py-6">
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className="w-full max-w-[435px]"
      />
    </div>
  ),
}

export const PriceRange: Story = {
  render: () => (
    <div className="w-full max-w-[496px] p-6 border border-border bg-background rounded-lg space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Price Range</h4>
        <p className="text-sm text-muted-foreground">Set your budget range ($200 - $800).</p>
      </div>
      <Slider
        defaultValue={[200, 800]}
        min={0}
        max={1000}
        step={10}
        className="w-full"
      />
    </div>
  ),
}