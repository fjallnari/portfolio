<script lang="ts">
    import Icon from "@iconify/svelte";
    import KEY_SKILLS from "../data/key_skills";
    import ProjectTags from "./ProjectTags.svelte";
</script>

<div class="flex flex-col gap-4 lg:ml-8">
    <h2 class="text-xl">about</h2>
    <div class="flex flex-row flex-wrap items-center gap-2 font-literata font-thin">
        <div class="flex flex-row gap-2 items-center">
            <p>A web developer living in Czechia.</p>
            <Icon icon='twemoji:flag-czechia' />
        </div>
        <p>
            Currently, I study undergraduate Cybersecurity at Faculty of Informatics, Masaryk University.
            I have a great love of learning, always interested in bleeding-edge technologies and new ways of solving problems.
            Also am a big fan of open-source software and Linux. ❤️ <br />
        </p>
        <p>
            Outside of programming and design, I enjoy singing and playing music, tabletop RPGs, reading books, and bouldering.
            I will never say no to a good brew of tea, especially if it's a nice Taiwanese oolong. 🍵
        </p>
    </div>
    <h2 class="text-xl">key skills</h2>
    <div class="flex flex-row flex-wrap gap-4">
        <ProjectTags tags={KEY_SKILLS} wantBg/>
    </div>
</div>