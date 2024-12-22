'use client'
import { usePathname } from 'next/navigation'
import SimpleNavbarWithHoverEffects from '@/components/navbar/SimpleNavbarWithHoverEffects'

const Navbar = () => {
  const pathname = usePathname()
  return pathname === '/' ? <SimpleNavbarWithHoverEffects /> : <SimpleNavbarWithHoverEffects />
}

export default Navbar
