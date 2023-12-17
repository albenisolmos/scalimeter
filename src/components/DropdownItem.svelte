<script>
	import { getContext } from 'svelte'

	export let value
	const valueContext = getContext('value')

    const handleClick = () => {
		valueContext.set(value)
    }
</script>

<li>
	<button class='px-1 w-full text-left border border-transparent outline-none focus:bg-slate-200 hover:bg-slate-200 active:bg-blue-300 active:text-white rounded-md hover:cursor-pointer'
		on:click={handleClick}
		>
		<slot />
	</button>
</li>
