import React from 'react'
import styled from 'styled-components'
import sx, {SxProp} from '../sx'
import getGlobalFocusStyles from '../internal/utils/getGlobalFocusStyles'

export const StyledButton = styled.button<SxProp>`
  ${getGlobalFocusStyles('-2px')};
  ${sx};
`

export type VariantType = 'default' | 'primary' | 'invisible' | 'danger'

export type Size = 'small' | 'medium' | 'large'

export type AlignContent = 'start' | 'center'

type ButtonA11yProps =
  | {'aria-label': string; 'aria-labelledby'?: undefined}
  | {'aria-label'?: undefined; 'aria-labelledby': string}

export type ButtonBaseProps = {
  /**
   * Determine's the styles on a button one of 'default' | 'primary' | 'invisible' | 'danger'
   */
  variant?: VariantType
  /**
   * Size of button and fontSize of text in button
   */
  size?: Size
  /**
   * Items that are disabled can not be clicked, selected, or navigated through.
   */
  disabled?: boolean
  /**
   * Allow button width to fill its container.
   */
  block?: boolean
} & SxProp &
  React.ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  /**
   * Content alignment for when visuals are present
   */
  alignContent?: AlignContent

  /**
   * The icon for the IconButton
   */
  icon?: React.ElementType | null

  /**
   * The leading visual which comes before the button content
   */
  leadingVisual?: React.ElementType | null

  /**
   * The trailing visual which comes after the button content
   */
  trailingVisual?: React.ElementType | null

  /**
   * Trailing action appears to the right of the trailing visual and is always locked to the end
   */
  trailingAction?: React.ElementType | null

  children?: React.ReactNode

  count?: number
} & ButtonBaseProps

export type IconButtonProps = ButtonA11yProps & {
  icon: React.ElementType
} & Omit<ButtonBaseProps, 'aria-label' | 'aria-labelledby'>

// adopted from React.AnchorHTMLAttributes
export type LinkButtonProps = {
  underline?: boolean
  download?: string
  href?: string
  hrefLang?: string
  media?: string
  ping?: string
  rel?: string
  target?: string
  type?: string
  referrerPolicy?: React.AnchorHTMLAttributes<HTMLAnchorElement>['referrerPolicy']
}
