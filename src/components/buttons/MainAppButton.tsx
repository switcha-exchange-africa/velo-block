import { background, Button, ResponsiveValue } from "@chakra-ui/react";
import React from "react";

interface MainAppButtonProps {
    size?: ResponsiveValue<(string & {}) | "sm" | "md" | "lg" | "xs"> | undefined
    isLoading: boolean
    backgroundColor?: "primaryColor.900" | "primaryColor.600" | "secondaryColor.900" | "secondaryColor.600" | any
    width?: "sm" | "md" | "lg" | "xl" | "2xl" | (string & {}) | "xs" | "px" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "-moz-fit-content" | "container.xl" | any | undefined
    children: any
    onClick?: () => void
}

const MainAppButton = ({ size, isLoading, backgroundColor, width, children, onClick, }: MainAppButtonProps) => {
    return (
        <Button onClick={onClick} variant='solid' bg={backgroundColor ?? "primaryColor.900"} color="appWhiteColor" isLoading={isLoading} width={width ?? "full"} size={size ?? 'md'} loadingText='Please wait...' >{children}</Button>
    )
}


export default MainAppButton;
