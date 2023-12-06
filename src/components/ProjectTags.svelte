<script lang="ts">
    import Icon from "@iconify/svelte";
    import TAGS from "../data/tags";

    export let tags: string[];
    export let darkerBg: boolean = true;

</script>

{#each tags as tag}
    <div class="flex flex-row justify-center items-center gap-2 rounded shadow-md py-2 px-4 {darkerBg ? ' bg-oxford-800' : 'bg-oxford-750'}">
        <Icon class="w-8 h-8" icon={TAGS[tag].icon} />
        <div class="text-lg font-literata">{TAGS[tag].title}</div>
    </div>
{/each}