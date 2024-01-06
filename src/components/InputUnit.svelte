<script>
    import DropdownUnits from './DropdownUnits.svelte';
    import Input from './Input.svelte';

    export let placeholder = ''
    export let value
	export let unit

	let timer
	const waitTime = 200
	function onKeyUp(event) {
		clearTimeout(timer)
		timer = setTimeout(() => {
			value = event.target.value
		}, waitTime)
	}
</script>

<div class='box wrap w-full h-8 flex flex-shrink items-stretch'>
	<Input type='number' inputmode='decimal' on:keyup={onKeyUp}  {placeholder} min='0' value={value} />
	<DropdownUnits bind:unit />
</div>
