import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '../components/ui/input-otp'
import { Button } from '../components/ui/button'

const meta: Meta<typeof InputOTP> = {
  title: 'Components/InputOTP',
  component: InputOTP,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InputOTP>

export const Default: Story = {
  render: () => (
    <InputOTP maxLength={6} defaultValue="1">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const Pattern: Story = {
  render: () => (
    <InputOTP maxLength={6} defaultValue="1">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const Separator: Story = {
  render: () => (
    <InputOTP maxLength={6} defaultValue="1">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState("1")

    return (
      <div className="space-y-2">
        <InputOTP
          maxLength={6}
          value={value}
          onChange={(val) => setValue(val)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="text-sm text-muted-foreground">
          Enter your one-time password.
        </div>
      </div>
    )
  },
}

export const Form: Story = {
  render: () => (
    <div className="max-w-[480px] p-6 border rounded-xl bg-background space-y-4">
      <div className="space-y-1">
        <h3 className="text-sm font-medium">One-Time Password</h3>
        <p className="text-sm text-muted-foreground">
          Please enter the one-time password sent to your phone.
        </p>
      </div>
      <InputOTP maxLength={6} defaultValue="1">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <Button className="w-full">Submit</Button>
    </div>
  ),
}