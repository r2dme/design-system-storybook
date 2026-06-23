import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from '../components/ui/aspect-ratio'

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AspectRatio>

export const Default: Story = {
  render: () => (
    <div className="w-[300px] overflow-hidden rounded-md border">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&auto=format&fit=crop"
          alt="Abstract landscape"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
}