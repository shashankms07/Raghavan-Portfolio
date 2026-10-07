import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY
      const dh = document.documentElement.scrollHeight - window.innerHeight
      setPct(dh > 0 ? (st / dh) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div className="scroll-progress" id="scrollProgress" style={{ width: pct + '%' }} />
}