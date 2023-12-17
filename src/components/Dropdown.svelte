<script>
    import { setContext } from 'svelte'
    import { writable } from 'svelte/store'

    export let value
	let valueStore = writable(value)
    let isOpen = false

	valueStore.subscribe((val) => {
		value = val
		isOpen = false
	})

	setContext('value', valueStore)
</script>


<div class='box relative inline-block focus-within:border-blue-300'>
    <button class='bg-white outline-none min-w-[2em] h-full rounded content-center' on:click={() => {isOpen = !isOpen}}>
		<slot name='button'>
			···
		</slot>
    </button>

    {#if isOpen}
        <ul class='absolute z-[1] min-w-[5em] p-2 mt-2 bg-white/80 rounded-lg shadow-xl border-2 border-slate-50'>
			<slot />
        </ul>
    {/if}
</div>
