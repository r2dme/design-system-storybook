import type { Meta, StoryObj } from '@storybook/react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../components/ui/sheet'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'

const meta: Meta<typeof Sheet> = {
  title: 'Components/Sheet',
  component: Sheet,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Sheet>

export const Default: Story = {
  render: () => (
    <div className="flex justify-center py-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="text-sm font-medium">Open</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="text-left">
            <SheetTitle className="text-base font-semibold">Edit profile</SheetTitle>
            <SheetDescription className="text-sm">
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right text-sm font-medium">
                Name
              </Label>
              <Input id="name" defaultValue="Pedro Duarte" className="col-span-3 text-base font-normal" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right text-sm font-medium">
                Username
              </Label>
              <Input id="username" defaultValue="@peduarte" className="col-span-3 text-base font-normal" />
            </div>
          </div>
          <SheetFooter>
            <Button type="submit" className="w-full text-sm font-medium">Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  ),
}