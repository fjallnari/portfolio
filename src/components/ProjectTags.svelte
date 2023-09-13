<script lang="ts">
    import Icon from "@iconify/svelte";
    import TAGS from "../data/tags";

    export let tags: string[];

</script>

{#each tags as tag}
    <div class="flex flex-row justify-center items-center gap-1 rounded">
        <Icon class="w-4 h-4" icon={TAGS[tag].icon} />
        <div class="text-sm">{TAGS[tag].title}</div>
    </div>
{/each}