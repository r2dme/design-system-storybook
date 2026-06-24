import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  render: () => (
    <div className="py-6">
      <Textarea placeholder="Type your message here." className="w-full max-w-[400px]" />
    </div>
  ),
}

export const FeedbackForm: Story = {
  render: () => (
    <div className="w-full max-w-[496px] p-6 border border-border bg-background rounded-lg space-y-2 text-left">
      <Label htmlFor="feedback" className="text-sm font-medium">Feedback</Label>
      <Textarea
        id="feedback"
        placeholder="Your feedback helps us improve..."
        className="w-full min-h-[100px] text-base font-normal placeholder:text-muted-foreground"
      />
      <p className="text-sm text-muted-foreground">Share your thoughts about our service.</p>
    </div>
  ),
}