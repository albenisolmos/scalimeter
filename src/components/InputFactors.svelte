<script>
    import Input from '../components/Input.svelte';
    import {realFactor, scaledFactor} from '../stores.js'
</script>

<div class='flex flex-row gap-2 items-center'>
    <Input type='number' min="1" bind:value={$scaledFactor} />
    <span>:</span>
    <Input type='number' min="0" bind:value={$realFactor} />
</div>
