import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from '../components/ui/progress'
import { Button } from '../components/ui/button'
import { Loader2 } from 'lucide-react'

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  render: () => (
    <div className="py-6">
      <Progress value={66} className="w-full max-w-[430px] h-2 rounded-full" />
    </div>
  ),
}

export const DownloadingCard: Story = {
  render: () => (
    <div className="w-full max-w-[448px] p-4 border border-border bg-background rounded-lg space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Loader2 className="size-4 animate-spin text-primary" />
          <div className="space-y-0.5">
            <div className="text-sm font-medium">Downloading...</div>
            <div className="text-sm text-muted-foreground">129 MB / 1000 MB</div>
          </div>
        </div>
        <Button variant="outline" size="sm" className="h-8 rounded-md text-sm font-medium">
          Cancel
        </Button>
      </div>
      <Progress value={12.9} className="w-full h-2 rounded-full" />
    </div>
  ),
}