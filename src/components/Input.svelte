<script>
    export let value;
</script>

<input class='box box-border focus:outline-0 w-full h-8 bg-white p-2 text-white focus:border-blue-300 focus:border-2 dark:bg-gray-700 dark:border-white/20 focus-within:border-blue-300' bind:value on:change on:keyup on:input {...$$restProps}/>
