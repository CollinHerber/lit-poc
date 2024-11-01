<script setup lang="ts">
defineProps<{
    msg: string
}>()
import '@collin/lit-components';
import { NscComboboxItem } from "@collin/lit-components";
let options: NscComboboxItem.NJC_COMBOBOX_OPTION[] = [
    {
        label: 'Option 1',
        value: 'Option 1'
    },
    {
        label: 'Option 2',
        value: 'Option 2'
    },
    {
        label: 'Option 3',
        value: 'Option 3'
    }
]
</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <h3>
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
            <nsc-combobox
                label="SLDS Combobox"
                @options="{ options }"
            ></nsc-combobox>
        </h3>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
