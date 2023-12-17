<script>
    import Dropdown from "./Dropdown.svelte";
    import DropdownItem from "./DropdownItem.svelte";
	import { units } from '../consts.js'

	export let unit = units.KM
</script>

<Dropdown bind:value={unit}>
	<span slot='button'>
		{Object.entries(units)[unit][0].toLowerCase()}
	</span>

	{#each Object.entries(units) as [_unit, value]}
		<DropdownItem value={value}>{_unit.toLowerCase()}</DropdownItem>
	{/each}
</Dropdown>
