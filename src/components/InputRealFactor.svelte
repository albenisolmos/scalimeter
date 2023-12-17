<script>
    import Input from '../components/Input.svelte';
    import {realFactor} from '../stores.js'

    let value = '100';
    $: realFactor.set(value);
</script>

<Input type='number' min="0" bind:value={value} />
