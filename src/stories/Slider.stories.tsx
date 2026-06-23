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
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className="w-[60%] max-w-[400px]"
    />
  ),
}