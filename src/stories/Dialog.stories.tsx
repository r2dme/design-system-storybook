import type { Meta, StoryObj } from '@storybook/react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '../components/ui/dialog'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Link2 } from 'lucide-react'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Dialog>

export const EditProfile: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-[8px]">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[600px] p-6 bg-background rounded-lg border shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Edit profile</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-sm font-medium text-left">Name</label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3 h-10" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-sm font-medium text-left">Username</label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3 h-10" />
          </div>
        </div>
        <DialogFooter className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const CustomCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-[8px]">Share</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[600px] p-6 bg-background rounded-lg border shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Share link</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2 py-4">
          <div className="grid flex-1 gap-2">
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
              className="h-10"
            />
          </div>
          <Button size="icon" className="px-3">
            <Link2 className="size-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}