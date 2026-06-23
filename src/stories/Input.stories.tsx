import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../components/ui/Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'file'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Email address...',
  },
}

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled input...',
    disabled: true,
  },
}

export const FileInput: Story = {
  args: {
    type: 'file',
  },
}
