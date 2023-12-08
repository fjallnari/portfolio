<script lang="ts">
    import Icon from "@iconify/svelte";
    import BentoBox from "./BentoBox.svelte";
    import KEY_SKILLS from "../../data/key_skills";
    import TAGS from "../../data/tags";
    import ProjectTags from "../ProjectTags.svelte";


</script>

<div class="w-full h-full flex flex-row flex-wrap gap-6 pb-8">
    <BentoBox title="what i do" flexBasis="20%">
        <div class="pl-2 text-xl font-literata">
            <p>websites & web apps</p>
            <p>branding & logo design</p>
        </div>
    </BentoBox>
    <BentoBox title="education">
        <p class="text-xl font-literata pl-2 mb-2">
            Masaryk University | Faculty of Informatics
        </p>
        <p class="text-xl font-literata pl-6 leading-normal">
            <span class="text-gray-400">2019-2021</span> Computer Science <br/>
            <span class="text-gray-400">2021-now</span> Cybersecurity <br/>
            Studio of Graphic Design and Multimedia (AGD+M)
        </p>
    </BentoBox>
    <BentoBox title="tools i use" flexBasis="33%">
        <div class="flex flex-row justify-start items-center flex-wrap gap-4 gap-y-4 pl-2">
            <ProjectTags tags={["vscode","aff_designer", "aff_photo", "aff_publisher","figma"]} darkerBg={false} />
        </div>
    </BentoBox>
    <BentoBox title="key skills" flexBasis="40%">
        <div class="flex flex-row justify-start items-center flex-wrap gap-4 gap-y-4 pl-2">
            <ProjectTags tags={KEY_SKILLS} darkerBg={false} />
        </div>
    </BentoBox>
    <BentoBox title="about me">
        <div class="flex flex-col gap-3 text-xl text-left font-literata pl-2">
            <p>I currently live in Czechia. 🇨🇿</p>
            <p>
                I have a great love of learning, and am always interested in new ways of solving problems. ❤️ 
            </p>
            <p>
                I enjoy singing and playing music, tabletop RPGs, books, and will never say no to a good brew of tea. 🍵
            </p>
        </div>
    </BentoBox>
</div>