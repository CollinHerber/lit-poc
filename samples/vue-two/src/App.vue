<template>
    <div id="app">
        <ngc-switch label="Nintendo Switch"></ngc-switch>
        <ngc-alert>
            <ngc-alert-title>Alert Title</ngc-alert-title>
            <ngc-alert-subtitle>Alert Subtitle</ngc-alert-subtitle>
        </ngc-alert>
        <ngc-button>Test button</ngc-button>
        <nsc-badge>Test badge</nsc-badge>
    </div>
</template>

<script>
import Vue from 'vue';
import '@collin/lit-components/slds'

export default Vue.extend({
  name: 'App',
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

    display: flex;
    flex-direction: column;
}
</style>
