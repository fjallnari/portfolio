<script lang="ts">

    export let title: string;
    export let url = '/' + title.toLowerCase();
    export let path: string;

</script>

<a href={url} class=" active:text-oxford-300 
    transition-colors {path === url ? 'text-oxford-300 font-medium' : ''}"
>
    {title}
</a>
