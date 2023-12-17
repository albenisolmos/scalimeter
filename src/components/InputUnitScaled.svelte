<script>
	import InputUnit from '../components/InputUnit.svelte'
	import {scaledDist, scaledDistUnit} from '../stores.js'
</script>

<InputUnit
	placeholder='Scaled Distance'
	bind:value={$scaledDist}
	bind:unit={$scaledDistUnit}/>
