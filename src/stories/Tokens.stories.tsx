import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import tokensData from './figma-tokens.json'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Button } from '../components/ui/button'
import { Check, Copy, Search, Sliders } from 'lucide-react'

const meta: Meta = {
  title: 'Design Tokens/Theme Tokens',
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj

// Helper to filter tokens by collection
interface TokenItem {
  collection: string
  mode: string
  name: string
  type: string
  value: string | number
}

const tokens = tokensData as TokenItem[]

// Copy helper component
const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-6 w-6 ml-2 text-muted-foreground hover:text-foreground"
      onClick={handleCopy}
    >
      {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
    </Button>
  )
}

export const Colors: Story = {
  render: () => {
    const [searchTerm, setSearchTerm] = React.useState('')
    
    // Group colors
    const tailwindColors = tokens.filter(t => t.collection === 'tw/colors' && t.type === 'COLOR')
    const radixColors = tokens.filter(t => t.collection === 'rdx/colors' && t.type === 'COLOR')
    const modeColors = tokens.filter(t => t.collection === 'mode' && t.type === 'COLOR')

    const filterFn = (t: TokenItem) =>
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(t.value).toLowerCase().includes(searchTerm.toLowerCase())

    const renderColorGrid = (items: TokenItem[]) => {
      const filtered = items.filter(filterFn)
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map((item, index) => {
            const hex = String(item.value)
            return (
              <div
                key={`${item.name}-${index}`}
                className="border border-border rounded-lg overflow-hidden bg-background shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="h-16 w-full border-b"
                  style={{ backgroundColor: hex }}
                />
                <div className="p-3 space-y-1">
                  <div className="font-semibold text-xs truncate" title={item.name}>
                    {item.name}
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                    <span>{hex}</span>
                    <CopyButton text={hex} />
                  </div>
                </div>
              </div>
            )
          })}
          {filtered.length === 0 && (
            <div className="col-span-full py-8 text-center text-sm text-muted-foreground">
              No matching colors found.
            </div>
          )}
        </div>
      )
    }

    return (
      <div className="space-y-8 max-w-[1200px] mx-auto text-left">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Colors</h1>
          <p className="text-muted-foreground">
            Figma design system colors categorized by collection.
          </p>
        </div>

        <div className="relative max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search colors by name or hex..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Tabs defaultValue="mode" className="space-y-6">
          <TabsList>
            <TabsTrigger value="mode">Semantic Modes (Light/Dark)</TabsTrigger>
            <TabsTrigger value="tailwind">Tailwind Palette</TabsTrigger>
            <TabsTrigger value="radix">Radix Palette</TabsTrigger>
          </TabsList>

          <TabsContent value="mode" className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold mb-4">Semantic Tokens (Light Mode)</h2>
              {renderColorGrid(modeColors.filter(t => t.mode === 'light mode'))}
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Semantic Tokens (Dark Mode)</h2>
              {renderColorGrid(modeColors.filter(t => t.mode === 'dark mode'))}
            </div>
          </TabsContent>

          <TabsContent value="tailwind" className="space-y-6">
            {renderColorGrid(tailwindColors)}
          </TabsContent>

          <TabsContent value="radix" className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold mb-4">Radix Colors (Light Mode)</h2>
              {renderColorGrid(radixColors.filter(t => t.mode === 'light mode'))}
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Radix Colors (Dark Mode)</h2>
              {renderColorGrid(radixColors.filter(t => t.mode === 'dark mode'))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    )
  },
}

export const Typography: Story = {
  render: () => {
    const [sampleText, setSampleText] = React.useState('The quick brown fox jumps over the lazy dog.')
    
    // Group typography tokens
    const fontSizes = tokens.filter(t => t.collection === 'tw/font' && t.name.startsWith('size/'))
    const fontWeights = tokens.filter(t => t.collection === 'tw/font' && t.name.startsWith('weight/'))
    const fontTracking = tokens.filter(t => t.collection === 'tw/font' && t.name.startsWith('tracking/'))

    return (
      <div className="space-y-8 max-w-[1000px] mx-auto text-left">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Typography</h1>
          <p className="text-muted-foreground">
            Typography tokens defining font sizes, weights, and letter-spacing options.
          </p>
        </div>

        <div className="space-y-1">
          <Label htmlFor="sample-text">Custom Preview Text</Label>
          <Input
            id="sample-text"
            value={sampleText}
            onChange={(e) => setSampleText(e.target.value)}
            className="max-w-md"
          />
        </div>

        <Tabs defaultValue="sizes" className="space-y-6">
          <TabsList>
            <TabsTrigger value="sizes">Font Sizes</TabsTrigger>
            <TabsTrigger value="weights">Font Weights</TabsTrigger>
            <TabsTrigger value="tracking">Letter Spacing (Tracking)</TabsTrigger>
          </TabsList>

          <TabsContent value="sizes" className="space-y-4">
            <Card className="border border-border">
              <CardContent className="divide-y p-0">
                {fontSizes.map((item, idx) => {
                  const sizeVal = typeof item.value === 'number' ? `${item.value}px` : item.value
                  return (
                    <div key={`${item.name}-${idx}`} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-1 min-w-[200px]">
                        <div className="font-semibold font-mono text-sm text-foreground">{item.name}</div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          Value: {sizeVal} <CopyButton text={String(item.value)} />
                        </div>
                      </div>
                      <div className="text-foreground truncate" style={{ fontSize: sizeVal }}>
                        {sampleText}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weights" className="space-y-4">
            <Card className="border border-border">
              <CardContent className="divide-y p-0">
                {fontWeights.map((item, idx) => {
                  const weightVal = typeof item.value === 'number' ? item.value : 400
                  return (
                    <div key={`${item.name}-${idx}`} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-1 min-w-[200px]">
                        <div className="font-semibold font-mono text-sm text-foreground">{item.name}</div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          Value: {weightVal} <CopyButton text={String(item.value)} />
                        </div>
                      </div>
                      <div className="text-2xl truncate text-foreground" style={{ fontWeight: weightVal }}>
                        {sampleText}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tracking" className="space-y-4">
            <Card className="border border-border">
              <CardContent className="divide-y p-0">
                {fontTracking.map((item, idx) => {
                  const trackingVal = typeof item.value === 'number' ? `${item.value}px` : item.value
                  return (
                    <div key={`${item.name}-${idx}`} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-1 min-w-[200px]">
                        <div className="font-semibold font-mono text-sm text-foreground">{item.name}</div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          Value: {trackingVal} <CopyButton text={String(item.value)} />
                        </div>
                      </div>
                      <div className="text-xl truncate text-foreground" style={{ letterSpacing: trackingVal }}>
                        {sampleText}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    )
  },
}

export const Spacing: Story = {
  render: () => {
    // Spacing & Gap scale
    const gapTokens = tokens.filter(t => t.collection === 'tw/gap' && typeof t.value === 'number')
    const spaceTokens = tokens.filter(t => t.collection === 'tw/space' && typeof t.value === 'number')
    const heightTokens = tokens.filter(t => t.collection === 'tw/height' && typeof t.value === 'number')

    const renderSpacingList = (items: TokenItem[]) => {
      return (
        <Card className="border border-border">
          <CardContent className="divide-y p-0">
            {items.map((item, idx) => {
              const numVal = Number(item.value)
              return (
                <div key={`${item.name}-${idx}`} className="p-4 flex items-center justify-between gap-4">
                  <div className="space-y-1 min-w-[150px]">
                    <div className="font-semibold font-mono text-sm text-foreground">{item.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center">
                      {numVal}px / {numVal / 16}rem <CopyButton text={`${numVal}px`} />
                    </div>
                  </div>
                  <div className="flex-1 max-w-[400px]">
                    <div
                      className="bg-primary h-6 rounded"
                      style={{ width: `${Math.min(numVal * 2, 400)}px` }}
                    />
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>
      )
    }

    return (
      <div className="space-y-8 max-w-[1000px] mx-auto text-left">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Spacing & Gaps</h1>
          <p className="text-muted-foreground">
            Spacing and gap tokens used to maintain visual rhythm throughout layouts.
          </p>
        </div>

        <Tabs defaultValue="gaps" className="space-y-6">
          <TabsList>
            <TabsTrigger value="gaps">Gaps scale</TabsTrigger>
            <TabsTrigger value="spaces">Space scale</TabsTrigger>
            <TabsTrigger value="heights">Height scale</TabsTrigger>
          </TabsList>

          <TabsContent value="gaps" className="space-y-4">
            {renderSpacingList(gapTokens)}
          </TabsContent>

          <TabsContent value="spaces" className="space-y-4">
            {renderSpacingList(spaceTokens)}
          </TabsContent>

          <TabsContent value="heights" className="space-y-4">
            {renderSpacingList(heightTokens)}
          </TabsContent>
        </Tabs>
      </div>
    )
  },
}

export const Borders: Story = {
  render: () => {
    const borderRadius = tokens.filter(t => t.collection === 'tw/border-radius' && typeof t.value === 'number')
    const borderWidth = tokens.filter(t => t.collection === 'tw/border-width' && typeof t.value === 'number')
    const strokeWidth = tokens.filter(t => t.collection === 'tw/stroke-width' && typeof t.value === 'number')

    return (
      <div className="space-y-8 max-w-[1000px] mx-auto text-left">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Borders & Radius</h1>
          <p className="text-muted-foreground">
            Design tokens defining border rounding sizes and line stroke properties.
          </p>
        </div>

        <Tabs defaultValue="radius" className="space-y-6">
          <TabsList>
            <TabsTrigger value="radius">Border Radius</TabsTrigger>
            <TabsTrigger value="width">Border Width</TabsTrigger>
            <TabsTrigger value="stroke">Stroke Width</TabsTrigger>
          </TabsList>

          <TabsContent value="radius" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {borderRadius.map((item, idx) => {
                const radiusVal = `${item.value}px`
                return (
                  <div key={`${item.name}-${idx}`} className="border rounded-xl p-4 bg-background text-center flex flex-col items-center gap-4">
                    <div
                      className="w-24 h-24 bg-primary flex items-center justify-center text-primary-foreground font-semibold"
                      style={{ borderRadius: radiusVal }}
                    >
                      {radiusVal}
                    </div>
                    <div className="space-y-1">
                      <div className="font-mono text-sm font-semibold">{item.name}</div>
                      <div className="text-xs text-muted-foreground flex items-center justify-center">
                        Val: {radiusVal} <CopyButton text={radiusVal} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="width" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {borderWidth.map((item, idx) => {
                const borderVal = `${item.value}px`
                return (
                  <div key={`${item.name}-${idx}`} className="border rounded-xl p-6 bg-background text-center flex flex-col items-center gap-4">
                    <div
                      className="w-24 h-24 bg-muted border border-foreground/50 flex items-center justify-center text-foreground font-semibold"
                      style={{ borderWidth: borderVal }}
                    >
                      {borderVal}
                    </div>
                    <div className="space-y-1">
                      <div className="font-mono text-sm font-semibold">{item.name}</div>
                      <div className="text-xs text-muted-foreground flex items-center justify-center">
                        Val: {borderVal} <CopyButton text={borderVal} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="stroke" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {strokeWidth.map((item, idx) => {
                const strokeVal = `${item.value}px`
                return (
                  <div key={`${item.name}-${idx}`} className="border rounded-xl p-6 bg-background text-center flex flex-col items-center gap-4">
                    <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={item.value}
                      />
                    </svg>
                    <div className="space-y-1">
                      <div className="font-mono text-sm font-semibold">{item.name}</div>
                      <div className="text-xs text-muted-foreground flex items-center justify-center">
                        Val: {strokeVal} <CopyButton text={strokeVal} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    )
  },
}

export const Playground: Story = {
  render: () => {
    // Select default options
    const modeColors = tokens.filter(t => t.collection === 'mode' && t.type === 'COLOR' && t.mode === 'light mode')
    const borderRadius = tokens.filter(t => t.collection === 'tw/border-radius' && typeof t.value === 'number')
    const fontSizes = tokens.filter(t => t.collection === 'tw/font' && t.name.startsWith('size/'))
    const gapTokens = tokens.filter(t => t.collection === 'tw/gap' && typeof t.value === 'number')

    // State for interactive modifications
    const [bgColor, setBgColor] = React.useState('background')
    const [textColor, setTextColor] = React.useState('foreground')
    const [borderColor, setBorderColor] = React.useState('border')
    const [radius, setRadius] = React.useState('rounded-lg')
    const [fontSize, setFontSize] = React.useState('size/lg')
    const [padding, setPadding] = React.useState('16')

    // Resolvers for preview styles
    const getHex = (name: string) => {
      const found = tokens.find(t => t.collection === 'mode' && t.name === name && t.mode === 'light mode')
      return found ? String(found.value) : '#ffffff'
    }

    const getRadiusVal = (name: string) => {
      const found = tokens.find(t => t.collection === 'tw/border-radius' && t.name === name)
      return found ? `${found.value}px` : '8px'
    }

    const getFontVal = (name: string) => {
      const found = tokens.find(t => t.collection === 'tw/font' && t.name === name)
      return found ? `${found.value}px` : '16px'
    }

    return (
      <div className="max-w-[1200px] mx-auto space-y-8 text-left">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Tokens Playground</h1>
          <p className="text-muted-foreground">
            Combine different colors, radii, spacing, and typography tokens to customize a preview component dynamically.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls Panel */}
          <Card className="border border-border lg:col-span-1 shadow-md">
            <CardHeader className="flex flex-row items-center gap-2">
              <Sliders className="h-4 w-4" />
              <CardTitle className="text-lg">Token Selector</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="playground-bg-color">Background Color</Label>
                <select
                  id="playground-bg-color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                >
                  {modeColors.map(c => (
                    <option key={c.name} value={c.name}>{c.name} ({String(c.value)})</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <Label htmlFor="playground-text-color">Text Color</Label>
                <select
                  id="playground-text-color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                >
                  {modeColors.map(c => (
                    <option key={c.name} value={c.name}>{c.name} ({String(c.value)})</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <Label htmlFor="playground-border-color">Border Color</Label>
                <select
                  id="playground-border-color"
                  value={borderColor}
                  onChange={(e) => setBorderColor(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                >
                  {modeColors.map(c => (
                    <option key={c.name} value={c.name}>{c.name} ({String(c.value)})</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <Label htmlFor="playground-radius">Border Radius</Label>
                <select
                  id="playground-radius"
                  value={radius}
                  onChange={(e) => setRadius(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                >
                  {borderRadius.map(r => (
                    <option key={r.name} value={r.name}>{r.name} ({r.value}px)</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <Label htmlFor="playground-font-size">Font Size</Label>
                <select
                  id="playground-font-size"
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                >
                  {fontSizes.map(f => (
                    <option key={f.name} value={f.name}>{f.name} ({f.value}px)</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <Label htmlFor="playground-padding">Padding (Gap Scale)</Label>
                <select
                  id="playground-padding"
                  value={padding}
                  onChange={(e) => setPadding(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                >
                  {gapTokens.slice(0, 15).map(g => (
                    <option key={g.name} value={String(g.value)}>{g.name} ({g.value}px)</option>
                  ))}
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Preview Canvas */}
          <div className="lg:col-span-2 border border-border rounded-xl bg-accent/40 flex items-center justify-center p-8 min-h-[400px] shadow-inner">
            <div
              className="w-full max-w-[500px] border shadow-lg transition-all"
              style={{
                backgroundColor: getHex(bgColor),
                color: getHex(textColor),
                borderColor: getHex(borderColor),
                borderWidth: '1px',
                borderRadius: getRadiusVal(radius),
                padding: `${padding}px`,
              }}
            >
              <div className="space-y-4">
                <h3
                  className="font-bold tracking-tight"
                  style={{ fontSize: getFontVal(fontSize) }}
                >
                  Custom Playground Card
                </h3>
                <p className="text-sm opacity-90">
                  This component is styled entirely by your selection of design tokens from the figma-tokens export. Edit options to see live changes.
                </p>
                <div className="flex gap-2">
                  <Button
                    style={{
                      borderRadius: getRadiusVal(radius),
                      fontSize: '14px',
                    }}
                  >
                    Action Button
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
}
