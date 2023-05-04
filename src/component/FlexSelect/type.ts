import { ReactNode } from "react";
export type LabelContentType = ReactNode | string;
export interface FlexSelectProps {
    selectProps? : Omit<React.SelectHTMLAttributes<HTMLSelectElement>,"children">,
    labelContent? : LabelContentType
    containerClassName? : string,
    focusContainerClassName? : string,
    blurContainerClassName? : string,
    hasValueContainerClassName? : string
    wrapperClassName? : string,
    labelClassName? : string,
    disabledOverlayElememt? : JSX.Element,
    beforeElement? : JSX.Element,
    afterElement? : JSX.Element,
    children? : ReactNode
}