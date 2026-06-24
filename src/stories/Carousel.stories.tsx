import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '../components/ui/carousel'
import { Card, CardContent } from '../components/ui/card'

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  render: () => (
    <div className="flex justify-center items-center py-10">
      <Carousel className="w-full max-w-[414px]">
        <CarouselContent className="-ml-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <CarouselItem key={num} className="pl-4">
              <Card className="border border-border bg-background rounded-xl">
                <CardContent className="flex h-[300px] items-center justify-center p-6">
                  <span className="text-[36px] font-semibold tracking-tight text-foreground">{num}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex justify-center items-center py-10">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full max-w-[503px]"
      >
        <CarouselContent className="-ml-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <CarouselItem key={num} className="pl-4 md:basis-1/3">
              <Card className="border border-border bg-background rounded-lg">
                <CardContent className="flex h-[130px] items-center justify-center p-4">
                  <span className="text-[30px] font-semibold text-foreground">{num}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

export const Orientation: Story = {
  render: () => (
    <div className="flex justify-center items-center py-10">
      <Carousel
        opts={{
          align: 'start',
        }}
        orientation="vertical"
        className="w-full max-w-[320px]"
      >
        <CarouselContent className="-mt-4 h-[300px]">
          {[1, 2, 3, 4, 5].map((num) => (
            <CarouselItem key={num} className="pt-4 basis-1/2">
              <Card className="border border-border bg-background rounded-lg">
                <CardContent className="flex h-[130px] items-center justify-center p-4">
                  <span className="text-[30px] font-semibold text-foreground">{num}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

export const API: Story = {
  render: () => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
      if (!api) {
        return
      }

      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)

      api.on('select', () => {
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])

    return (
      <div className="flex flex-col items-center py-10">
        <Carousel setApi={setApi} className="w-full max-w-[414px]">
          <CarouselContent className="-ml-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <CarouselItem key={num} className="pl-4">
                <Card className="border border-border bg-background rounded-xl">
                  <CardContent className="flex h-[280px] items-center justify-center p-6">
                    <span className="text-[36px] font-semibold text-foreground">{num}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm font-medium text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
    )
  },
}