export const scrollToSection = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export const isPlaceholderLink = (url: string) => url === '#'
