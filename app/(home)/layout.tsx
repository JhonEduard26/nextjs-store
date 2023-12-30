import Hero from '@/app/components/home/hero'
import Description from '@/app/components/home/description'

export default function HomeLayout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Hero />
      <Description />
      {children}
    </>
  )
}
