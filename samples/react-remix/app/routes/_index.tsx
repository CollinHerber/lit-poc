import type {MetaFunction} from "@remix-run/node";

'use client'
import {NJC_COMBOBOX_OPTION} from "@collin/lit-components";
import { NgcBreadcrumbs } from "@collin/lit-components/gator-react";
import {useEffect, useRef} from "react";

export const meta: MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];

};

export default function Index() {
    const options: NJC_COMBOBOX_OPTION[] = [
        {
            label: 'Option 1',
            value: '1'
        },
        {
            label: 'Option 2',
            value: '2'
        },
        {
            label: 'Option 3',
            value: '3'
        }
    ];

    const comboboxRef = useRef(null);

    useEffect(() => {
        if (comboboxRef.current) {
            comboboxRef.current.options = options;
        }
    }, [options]);

    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.8"}}>
            <NgcBreadcrumbs></NgcBreadcrumbs>
            <h1>Welcome to Remix</h1>
            <div>
                SLDS Button
            </div>

            <nsc-button variant="brand">A SLDS Button</nsc-button>

            <div>
                Gator Button
            </div>
            <ngc-button>A Gator Button</ngc-button>

            <div>
                SLDS Combobox
            </div>
            <nsc-combobox ref={comboboxRef} label="SLDS Combobox"></nsc-combobox>
        </div>
    )
        ;
}
