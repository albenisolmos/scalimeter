<script>
    import Input from '../components/Input.svelte';
    import {scaledFactor} from '../stores.js'

    let value = '1';
    $: scaledFactor.set(value);
</script>

<div class='w-10'>
    <Input type='number' min="0" bind:value={value} />
</div>
