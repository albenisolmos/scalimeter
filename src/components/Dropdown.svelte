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


<div class='box relative inline-block dark:border-white/30 focus-within:border-2 focus-within:border-blue-300'>
    <button class='bg-white outline-none min-w-[2em] h-full content-center dark:bg-gray-700' on:click={() => {isOpen = !isOpen}}>
		<slot name='button'>
			···
		</slot>
    </button>

    {#if isOpen}
        <ul class='absolute z-[1] min-w-[5em] p-2 mt-2 bg-white/80 rounded-lg shadow-xl border-2 border-slate-50 dark:bg-gray-700 dark:border-white/20 dark:shadow-black/20'>
			<slot />
        </ul>
    {/if}
</div>
