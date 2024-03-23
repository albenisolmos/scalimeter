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


<div class='bg-white dark:bg-gray-700 box relative inline-block min-w-10 dark:border-white/30 focus-within:border-2 focus-within:border-blue-300'>
    <button class='outline-none size-full flex items-center justify-center ' on:click={() => {isOpen = !isOpen}}>
		<slot name='button'>
			···
		</slot>
    </button>

    {#if isOpen}
        <ul class='absolute z-10 translate-x-[-50%] min-w-[8em] md:min-w-[5em] p-2 mt-2 bg-white/70 rounded-lg shadow-xl border-2 border-slate-50 dark:bg-gray-700/70 backdrop-blur-sm dark:border-white/20 dark:shadow-black/20'>
			<slot />
        </ul>
    {/if}
</div>
