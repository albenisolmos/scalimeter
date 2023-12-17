<script>
    import DropdownUnits from './DropdownUnits.svelte';
    import Input from './Input.svelte';

    export let placeholder = ''
    export let value
	export let unit
</script>

<div class='box wrap w-full h-8 flex flex-shrink items-stretch'>
	<Input type='number' bind:value {placeholder} min='0' />
	<DropdownUnits bind:unit />
</div>
