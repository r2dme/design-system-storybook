import type { Meta, StoryObj } from '@storybook/react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../components/ui/collapsible'
import { Button } from '../components/ui/button'
import { ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
        <div className="flex items-center justify-between border border-border rounded-lg px-4 py-3 bg-background shadow-sm">
          <h4 className="text-sm font-semibold">
            @peduarte starred 3 repositories
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon" className="size-6 rounded-md">
              <ChevronsUpDown className="size-4 text-muted-foreground" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-lg border border-border px-4 py-3 text-sm font-mono bg-background shadow-sm">
          @radix-ui/primitives
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-lg border border-border px-4 py-3 text-sm font-mono bg-background shadow-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-lg border border-border px-4 py-3 text-sm font-mono bg-background shadow-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  },
}