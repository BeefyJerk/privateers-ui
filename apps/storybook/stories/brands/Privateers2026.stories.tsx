"use client"

import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Separator,
  Textarea,
} from "@privateers/ui"

/**
 * **Privateers 2026 — "Petroleum"**
 *
 * The new brand book applied to `@privateers/ui` as the opt-in
 * `privateers-2026` brand. Dark petroleum is the brand standard; switch the
 * **Theme** toolbar to *Light* to see the day universe. The default Privateers
 * theme is untouched when this brand is off.
 *
 * Everything below is driven by tokens — IBM Plex Serif on H1/H2, Mona Sans for
 * body & UI, pill buttons, a sparing red CTA, and confidence-tier badges.
 */

/* Official Privateers flag mark — geometry from the brand kit, inherits color. */
function Flag({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 5.39 61.41 61.51" aria-hidden role="img">
      <path
        fill="currentColor"
        d="M27.3713 17.6932C26.1103 17.6932 25.0186 16.8014 24.8033 15.5712C23.773 9.7894 18.6678 5.39154 12.5016 5.39154H0V66.9H12.4862V54.5983H34.0449C35.3059 54.5983 36.3976 55.4902 36.6129 56.7204C37.6432 62.5022 42.7484 66.9 48.9146 66.9H61.4008V17.6932H27.3559H27.3713ZM48.93 42.2966V54.5983H39.8729C38.6119 54.5983 37.5202 53.7065 37.3049 52.4763C36.29 46.6945 31.1694 42.2966 25.0032 42.2966H12.517V17.6932H21.5741C22.835 17.6932 23.9268 18.5851 24.1421 19.8153C25.1723 25.5971 30.2776 29.9949 36.4438 29.9949H48.93V42.2966Z"
      />
    </svg>
  )
}

const serif: React.CSSProperties = { fontFamily: "var(--font-display)" }

function Swatch({ token, label, ring }: { token: string; label: string; ring?: boolean }) {
  return (
    <div className="space-y-1.5">
      <div
        className={`h-12 rounded-md ${ring ? "ring-1 ring-border" : ""}`}
        style={{ background: `var(${token})` }}
      />
      <p className="text-muted-foreground text-center text-xs">{label}</p>
    </div>
  )
}

function TierBadge({ tier, children }: { tier: 1 | 2 | 3; children: React.ReactNode }) {
  const tone =
    tier === 1
      ? "bg-tier-1/15 text-tier-1 border-tier-1/35"
      : tier === 2
        ? "bg-tier-2/15 text-tier-2 border-tier-2/35"
        : "bg-tier-3/15 text-tier-3 border-tier-3/40"
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${tone}`}>
      <span className="size-1.5 rounded-full" style={{ background: `var(--tier-${tier})` }} />
      {children}
    </span>
  )
}

const Showcase = () => (
  <div className="brand-privateers-2026">
    <div className="bg-background text-foreground min-h-screen w-full px-8 py-10 transition-colors">
      <div className="mx-auto w-full max-w-3xl space-y-10">
        {/* Header / wordmark */}
        <header className="flex items-center justify-between">
          <span className="text-foreground inline-flex items-center gap-3">
            <Flag size={30} />
            <span style={{ ...serif, fontWeight: 500, fontSize: 26, letterSpacing: "-0.01em" }}>
              Privateers
            </span>
          </span>
          <Badge variant="outline">privateers-2026</Badge>
        </header>

        <Separator />

        {/* Hero — serif display + kicker */}
        <section className="space-y-3">
          <p className="text-muted-foreground text-xs font-medium tracking-[0.08em] uppercase">
            Kundeservice
          </p>
          <h1 style={serif} className="text-foreground text-5xl leading-[1.05] font-medium">
            Svar der lyder som jer.
          </h1>
          <p className="max-w-xl text-[color:var(--text-secondary)]">
            Petroleum-paletten, IBM Plex Serif til overskrifter og Mona Sans i
            brødtekst — alt drevet af tokens, ingen hardcodede farver.
          </p>
        </section>

        {/* Buttons — pill */}
        <section className="space-y-3">
          <h2 style={serif} className="text-2xl font-medium">
            Knapper
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primær</Button>
            <Button variant="outline">Sekundær</Button>
            <Button variant="ghost">Ghost</Button>
            <Button className="bg-cta text-cta-foreground hover:bg-cta/90 border-transparent">
              Send svar
            </Button>
            <Button variant="destructive">Eskalér</Button>
          </div>
        </section>

        {/* Confidence tiers */}
        <section className="space-y-3">
          <h2 style={serif} className="text-2xl font-medium">
            Confidence-tiers
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <TierBadge tier={1}>Høj · auto-svar</TierBadge>
            <TierBadge tier={2}>Medium · AI foreslår</TierBadge>
            <TierBadge tier={3}>Eskalering</TierBadge>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </section>

        {/* Form card */}
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Nyt svar</CardTitle>
            <CardDescription>Udfyld og send til kunden.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="p26-name">Modtager</Label>
              <Input id="p26-name" placeholder="kunde@firma.dk" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="p26-msg">Besked</Label>
              <Textarea id="p26-msg" placeholder="Skriv et svar…" />
            </div>
          </CardContent>
          <CardFooter className="gap-3">
            <Button>Send svar</Button>
            <Button variant="outline">Annullér</Button>
          </CardFooter>
        </Card>

        {/* Palette */}
        <section className="space-y-3">
          <h2 style={serif} className="text-2xl font-medium">
            Palette
          </h2>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            <Swatch token="--background" label="Background" ring />
            <Swatch token="--surface" label="Surface" />
            <Swatch token="--primary" label="Primary" />
            <Swatch token="--cta" label="CTA" />
            <Swatch token="--tier-1" label="Tier 1" />
            <Swatch token="--tier-2" label="Tier 2" />
          </div>
        </section>
      </div>
    </div>
  </div>
)

const meta: Meta<typeof Showcase> = {
  title: "Brands/Privateers 2026",
  component: Showcase,
  parameters: {
    layout: "fullscreen",
    backgrounds: { disable: true },
  },
}

export default meta
type Story = StoryObj<typeof Showcase>

export const Showcase_: Story = { name: "Showcase" }
