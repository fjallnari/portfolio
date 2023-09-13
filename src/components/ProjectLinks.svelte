<script lang="ts">
    import Icon from "@iconify/svelte";

    export let repo: string;
    export let website: string;

</script>

<div class="flex flex-row flex-wrap gap-4">
    {#if repo && repo != ''}
        <div class="flex flex-row gap-2 items-center">
            <Icon icon="mdi:github" class="w-6 h-6 text-alabaster" />
            <a href="{repo}" class="hover:text-timberwolf active:text-oxford-300">Source code</a>
        </div>
    {/if}
    {#if website && website != ''}
        <div class="flex flex-row gap-2 items-center">
            <Icon icon="mdi:web" class="w-6 h-6 text-alabaster" />
            <a href="{website}" class="hover:text-timberwolf active:text-oxford-300">Website</a>
        </div>
    {/if}
</div>