import type { Meta, StoryObj } from '@storybook/react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'
import { Input } from '../components/ui/input'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: () => (
    <div className="flex items-center max-w-[296.7px] border border-border rounded-lg overflow-hidden bg-background shadow-sm">
      <Select defaultValue="usd">
        <SelectTrigger className="w-[80px] border-none shadow-none rounded-none bg-muted focus:ring-0">
          <SelectValue placeholder="Currency" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="usd">
            <span className="font-medium mr-1.5">$</span>
            <span>US Dollar</span>
          </SelectItem>
          <SelectItem value="eur">
            <span className="font-medium mr-1.5">€</span>
            <span>Euro</span>
          </SelectItem>
          <SelectItem value="gbp">
            <span className="font-medium mr-1.5">£</span>
            <span>British Pound</span>
          </SelectItem>
        </SelectContent>
      </Select>
      <Input 
        type="text" 
        defaultValue="10.00" 
        className="border-none shadow-none focus-visible:ring-0 text-base h-9 px-3 w-full"
      />
    </div>
  ),
}