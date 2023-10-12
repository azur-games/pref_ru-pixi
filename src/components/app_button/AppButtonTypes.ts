type Variant = 'google' | 'apple' | 'ya' | 'odnoclassniki'

export type AppButtonProps = {
    type: Variant
}

export type AppButtonData = {
    text: string
    name: string
    iconSrc: string
    href: string
}

export type AppButtonVariant = Record<Variant, AppButtonData>