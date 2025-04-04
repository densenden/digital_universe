import { Layout, Section, Navigation, Button } from "@digital-universe/ui"

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export default function Home() {
  return (
    <Layout>
      <Navigation items={navigationItems} />
      <Section className="text-center">
        <h1 className="text-4xl font-serif mb-8">Welcome to Digital Universe</h1>
        <p className="text-xl mb-8">
          A modern digital experience built with Next.js and Tailwind CSS
        </p>
        <Button size="lg">Get Started</Button>
      </Section>
    </Layout>
  )
} 