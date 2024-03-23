<script>
	import InputUnit from '../components/InputUnit.svelte'
	import {scaledDist, scaledDistUnit} from '../stores.js'
</script>

<div>
	<label class='font-medium' for="input-unit-scaled">Scaled Distance</label>
	<InputUnit
		name='input-unit-scaled'
		bind:value={$scaledDist}
		bind:unit={$scaledDistUnit}/>
</div>
