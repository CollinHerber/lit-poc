'use client'
import { NJC_COMBOBOX_OPTION } from "@collin/lit-components";
import { useEffect, useRef } from "react";
import '@collin/lit-components';

export default function Home() {
    let options: NJC_COMBOBOX_OPTION[] = [
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
        <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-slate-800">
            <div>
                SLDS Button
            </div>

            <nsc-button variant="brand">A SLDS Button</nsc-button>

            <div>
                Gator Button
            </div>
            <ngc-button>A Gator Button</ngc-button>
        </main>
    );
}
