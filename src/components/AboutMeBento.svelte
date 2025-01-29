<script lang="ts">
    import BentoBox from "./BentoBox.svelte";
    import KEY_SKILLS from "../data/key_skills";
    import ProjectTags from "./ProjectTags.svelte";


</script>

<div class="w-full h-full flex flex-row flex-wrap gap-4">
    <BentoBox title="what i know" flexBasis="50%">
        <div class="flex flex-row justify-start items-center flex-wrap gap-4 gap-y-4 pl-2">
            <ProjectTags tags={KEY_SKILLS} darkerBg={false} />
        </div>
    </BentoBox>
    <BentoBox title="tools i use" flexBasis="33%">
        <div class="flex flex-row justify-start items-center flex-wrap gap-4 gap-y-4 pl-2">
            <ProjectTags tags={["vscode","aff_designer", "aff_photo", "aff_publisher","figma", "obsidian"]} darkerBg={false} />
        </div>
    </BentoBox>
    <BentoBox title="what i do" flexBasis="15%">
        <div class="pl-2 text-xl font-literata">
            <p>Full-stack web apps</p>
            <p>Website design (UI/UX)</p>
            <p>Branding</p>
            <!-- <p>Logo design</p> -->
            <p>Layouts</p>
        </div>
    </BentoBox>
    <BentoBox title="where i learn" flexBasis="20%">
        <p class="text-xl font-literata pl-2 mb-2">
            Masaryk University | Faculty of Informatics
        </p>
        <p class="text-xl font-literata pl-6 leading-normal">
            <span class="text-gray-400">2019-2021</span> Computer Science <br/>
            <span class="text-gray-400">2022-now</span> Cybersecurity <br/>
            <a href="https://agdmfimu.cargo.site/" class="underline text-timberwolf">Studio of Graphic Design and Multimedia (AGD+M)</a>
        </p>
    </BentoBox>
    <BentoBox title="who am i" flexBasis="40%">
        <div class="flex flex-col gap-3 text-xl text-left font-literata pl-2">
            <p>I currently live & study in Czechia. 🇨🇿</p>
            <p>
                I have a great love of learning, and am always interested in new ways of solving problems. ❤️ 
            </p>
            <p>
                I enjoy singing and playing music, tabletop RPGs, books, and will never say no to a good brew of tea. 🍵
            </p>
        </div>
    </BentoBox>
</div>