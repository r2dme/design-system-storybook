import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Label } from '../components/ui/label'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <div className="flex justify-center py-6">
      <Tabs defaultValue="account" className="w-full max-w-[398px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card className="border border-border bg-background rounded-lg mt-2">
            <CardHeader className="text-left">
              <CardTitle className="text-base font-semibold">Account</CardTitle>
              <CardDescription className="text-sm">
                Make changes to your profile here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" className="text-base font-normal" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username" className="text-sm font-medium">Username</Label>
                <Input id="username" defaultValue="@peduarte" className="text-base font-normal" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-sm font-medium">Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card className="border border-border bg-background rounded-lg mt-2">
            <CardHeader className="text-left">
              <CardTitle className="text-base font-semibold">Password</CardTitle>
              <CardDescription className="text-sm">
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="current" className="text-sm font-medium">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new" className="text-sm font-medium">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-sm font-medium">Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  ),
}