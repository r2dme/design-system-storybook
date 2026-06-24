import type { Meta, StoryObj } from '@storybook/react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Checkbox } from '../components/ui/checkbox'
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => (
    <Table className="max-w-[600px] border rounded-md">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const DataTable: Story = {
  render: () => (
    <div className="w-full max-w-[590px] space-y-4">
      <div className="flex items-center justify-between gap-4">
        <Input placeholder="Filter emails..." className="max-w-[280px]" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2 h-9 text-sm rounded-lg">
              Columns <ChevronDown className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Status</DropdownMenuItem>
            <DropdownMenuItem>Email</DropdownMenuItem>
            <DropdownMenuItem>Amount</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox />
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead>
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Email <ArrowUpDown className="size-4" />
                </div>
              </TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="w-[40px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell><Checkbox /></TableCell>
              <TableCell>Success</TableCell>
              <TableCell className="font-medium">ken99@yahoo.com</TableCell>
              <TableCell className="text-right">$316.00</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="size-8">
                  <MoreHorizontal className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Checkbox /></TableCell>
              <TableCell>Success</TableCell>
              <TableCell className="font-medium">abe45@gmail.com</TableCell>
              <TableCell className="text-right">$242.00</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="size-8">
                  <MoreHorizontal className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Checkbox /></TableCell>
              <TableCell>Processing</TableCell>
              <TableCell className="font-medium">monserrat44@gmail.com</TableCell>
              <TableCell className="text-right">$837.00</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="size-8">
                  <MoreHorizontal className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Checkbox /></TableCell>
              <TableCell>Success</TableCell>
              <TableCell className="font-medium">silas22@gmail.com</TableCell>
              <TableCell className="text-right">$874.00</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="size-8">
                  <MoreHorizontal className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Checkbox /></TableCell>
              <TableCell>Failed</TableCell>
              <TableCell className="font-medium">carmella@hotmail.com</TableCell>
              <TableCell className="text-right">$721.00</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="size-8">
                  <MoreHorizontal className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground pt-1">
        <div>0 of 5 row(s) selected.</div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 rounded-md px-3">
            Previous
          </Button>
          <Button variant="outline" size="sm" className="h-8 rounded-md px-3">
            Next
          </Button>
        </div>
      </div>
    </div>
  ),
}