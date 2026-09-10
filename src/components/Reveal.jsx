import { forwardRef, useEffect, useRef, useState } from 'react'

const Reveal = forwardRef(function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }, forwardedRef) {
  const innerRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = innerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  function setRefs(node) {
    innerRef.current = node
    if (typeof forwardedRef === 'function') forwardedRef(node)
    else if (forwardedRef) forwardedRef.current = node
  }

  return (
    <Tag
      ref={setRefs}
      className={`reveal${visible ? ' is-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  )
})

export default Reveal
