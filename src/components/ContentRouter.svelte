    <script lang="ts">
    import Icon from "@iconify/svelte";
    import { currentNav } from "../../stores";
    import KEY_SKILLS from "../data/key_skills";
    import PROJECTS from "../data/projects";
    import ProjectCard from "./ProjectCard.svelte";
    import ProjectTags from "./ProjectTags.svelte";
    import About from "./About.svelte";

    </script>

    <ul class="flex flex-col justify-center align-center w-full gap-4 pb-8">
        {#if $currentNav === "projects"}
            {#each PROJECTS as project}
                <ProjectCard {project} />
            {/each}
        {:else if $currentNav === "blog"}
            <p class="lg:ml-8">moonlight drowns out all but the brightest stars</p>
        {:else if $currentNav === "about"}
            <About />
        {/if}
    </ul>