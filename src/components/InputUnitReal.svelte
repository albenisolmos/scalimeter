<script>
	import InputUnit from '../components/InputUnit.svelte';
	import {realDist, realDistUnit} from '../stores.js'
</script>

<InputUnit
	placeholder='Real Distance'
	bind:value={$realDist}
	bind:unit={$realDistUnit}/>
