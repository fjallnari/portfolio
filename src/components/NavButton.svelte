<script lang="ts">
    import { currentNav } from "../../stores";

    export let title: string;
</script>

<button class="{$currentNav === title ? "text-oxford-300 border-b-white" : ""} transition-colors" on:click={() => currentNav.set(title)}>
    {title}
</button>