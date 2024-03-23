<script>
    export let value;
</script>

<input class='box text-xl selection:bg-blue-300/50 focus:outline-0 w-full h-10 bg-white p-2 dark:text-[#d8d8d8] focus:border-blue-300 focus:border-2 dark:bg-gray-700 dark:border-white/20 focus-within:border-blue-300' bind:value on:change on:keyup on:input {...$$restProps}/>
