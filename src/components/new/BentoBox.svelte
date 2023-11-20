<script lang="ts">
    export let title: string;

</script>

<div class="flex flex-col p-6 bg-oxford-800 rounded-md font-eiko w-fit flex-1 shrink-0 basis-1/4">
    <h1 class="text-oxford-300 text-3xl mb-4">{title}</h1>
    <slot />
</div>