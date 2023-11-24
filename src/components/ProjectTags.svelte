<script lang="ts">
    import Icon from "@iconify/svelte";
    import TAGS from "../data/tags";

    export let tags: string[];
    export let wantBg: boolean = false;

</script>

{#each tags as tag}
    <div class="flex flex-row justify-center items-center gap-2 rounded {wantBg ? 'shadow-md bg-oxford-750 py-2 px-4' : ''}">
        <Icon class="w-8 h-8" icon={TAGS[tag].icon} />
        <div class="text-lg font-literata">{TAGS[tag].title}</div>
    </div>
{/each}