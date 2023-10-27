<script lang="ts">

    import Icon from "@iconify/svelte";

    const LINKS = [
        {
            icon: "mdi:github",
            href: "https://github.com/fjallnari"
        },
        {
            icon: "mdi:email",
            href: "mailto:fjallnari@gmail.com"
        }
    ]

</script>

<div class="flex flex-row flex-wrap gap-4 text-3xl mb-2">
    {#each LINKS as link}
        <div class="flex flex-row items-center rounded-sm hover:shadow hover:bg-oxford-800 p-1">
            <a href={link.href} class="flex flex-row items-center gap-2">
                <Icon icon={link.icon} />
            </a>
        </div>
    {/each}
    <!-- <a href="example.com" class="flex flex-row items-center gap-2">
        <Icon icon="mdi:linkedin" />
    </a> -->
</div>