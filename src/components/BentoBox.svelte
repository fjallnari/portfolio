<script lang="ts">
    export let title: string;
    export let flexBasis: string = "25%";

</script>

<div class="flex flex-col p-6 bg-oxford-800 rounded-md shadow font-eiko w-fit flex-1 shrink-0"
    style="flex-basis: {flexBasis};"
>
    <h1 class="text-oxford-300 text-3xl mb-4 whitespace-nowrap">{title}</h1>
    <slot />
</div>