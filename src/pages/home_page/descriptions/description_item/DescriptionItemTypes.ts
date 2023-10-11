import {ReactNode} from "react";


export type TDescriptionItem = {
    icon: ReactNode
    title: string
    text: string
}

export type DescriptionItemProps = {
    item: TDescriptionItem
}
