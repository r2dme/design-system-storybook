import type { Meta, StoryObj } from '@storybook/react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../components/ui/drawer'
import { Button } from '../components/ui/button'
import { Plus, Minus } from 'lucide-react'
import * as React from 'react'

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: () => {
    const [goal, setGoal] = React.useState(350)
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="rounded-[8px]">Open drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader className="text-center">
              <DrawerTitle className="text-lg font-semibold">Move Goal</DrawerTitle>
              <DrawerDescription className="text-sm text-muted-foreground">
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0 flex flex-col items-center justify-center space-y-4">
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full size-8"
                  onClick={() => setGoal(prev => Math.max(0, prev - 10))}
                >
                  <Minus className="size-4" />
                </Button>
                <div className="text-center">
                  <div className="text-7xl font-bold tracking-tighter">{goal}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">CALORIES/DAY</div>
                </div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full size-8"
                  onClick={() => setGoal(prev => prev + 10)}
                >
                  <Plus className="size-4" />
                </Button>
              </div>
            </div>
            <DrawerFooter className="flex flex-col gap-2 pt-4">
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    )
  },
}