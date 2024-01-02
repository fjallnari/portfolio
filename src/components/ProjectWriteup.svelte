<script lang="ts">
    import type ProjectInterface from "../interfaces/ProjectInterface";
    import MarkdownRenderer from "./MarkdownRenderer.svelte";

    export let project: ProjectInterface;

</script>

{#if project?.writeup && project.writeup !== ""}
    <div>
        <h2 class="text-alabaster font-eiko text-4xl m-0">about</h2>
        <div class="font-literata font-light pb-8 text-xl text-justify">
            <MarkdownRenderer source={project.writeup} />
        </div>
    </div>
{/if}