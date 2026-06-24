import type { Meta, StoryObj } from '@storybook/react'
import { ScrollArea, ScrollBar } from '../components/ui/scroll-area'
import { Separator } from '../components/ui/separator'

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ScrollArea>

const tags = Array.from({ length: 11 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i + 39}`
)

export const Default: Story = {
  render: () => (
    <div className="flex justify-center py-6">
      <ScrollArea className="h-[286px] w-[190px] rounded-lg border bg-background">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {tags.map((tag) => (
            <div key={tag}>
              <div className="text-sm py-2">{tag}</div>
              <Separator className="my-1" />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  ),
}

interface Artwork {
  artist: string
  art: string
}

const works: Artwork[] = [
  {
    artist: 'Ornella Binni',
    art: 'https://images.unsplash.com/photo-1465146633011-14f8e0781093?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Tom Byrom',
    art: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Vladimir Malyavko',
    art: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=300&q=80',
  },
]

export const HorizontalScrolling: Story = {
  render: () => (
    <div className="flex justify-center py-6">
      <ScrollArea className="w-full max-w-[382px] whitespace-nowrap rounded-lg border bg-background">
        <div className="flex space-x-4 p-4">
          {works.map((artwork) => (
            <figure key={artwork.artist} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <img
                  src={artwork.art}
                  alt={`Photo by ${artwork.artist}`}
                  className="aspect-[3/4] h-fit w-fit object-cover max-h-[160px]"
                  width={120}
                  height={160}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                Photo by{' '}
                <span className="font-semibold text-foreground">
                  {artwork.artist}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  ),
}