<script>
import InputUnit from '../components/InputUnit.svelte';
import {realDist, realDistUnit} from '../stores.js'
</script>

<div>
	<label class='font-medium' for="input-unit-real">Real Distance</label>
	<InputUnit
		name='input-unit-real'
		bind:value={$realDist}
		bind:unit={$realDistUnit}/>
</div>
