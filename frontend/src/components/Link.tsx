import { GetPropDefTypes, Link as RadixLink, linkPropDefs } from '@radix-ui/themes'
import NextLink from 'next/link'

type LinkOwnProps = GetPropDefTypes<typeof linkPropDefs>

interface LinkProps {
  href: string
  className?: string
  color?: LinkOwnProps['color']
  children?: React.ReactNode
  disabled?: boolean
  highContrast?: boolean
}

export const Link = ({ href, className, children, color, highContrast, disabled }: LinkProps) => {
  return (
    <NextLink href={href} passHref legacyBehavior aria-disabled={disabled}>
      <RadixLink
        className={className}
        color={color}
        aria-disabled={disabled}
        highContrast={highContrast}
      >
        {children}
      </RadixLink>
    </NextLink>
  )
}

export default Link