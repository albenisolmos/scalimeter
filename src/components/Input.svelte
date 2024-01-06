<script>
    export let value;
</script>

<input class='box box-border focus:outline-0 w-full h-8 bg-white p-2 focus:border-blue-300 focus:border-2 dark:bg-slate-400 focus-within:border-blue-300' bind:value on:change on:keyup on:input {...$$restProps}/>
