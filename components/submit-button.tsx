'use client'

import { useFormStatus } from 'react-dom'
import {Button, Spinner} from "@radix-ui/themes";
import React from "react";

export function SubmitButton({ name,children,disabled=false }:{name:string,children:React.ReactNode,disabled:boolean}) {
    const { pending } = useFormStatus()

    return (
        <Button type={"submit"} disabled={disabled} aria-disabled={pending}>
            {name}
            <Spinner loading={pending}>
                {children}
            </Spinner>
        </Button>
    )
}