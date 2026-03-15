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
    <!-- <BentoBox title="what i do" flexBasis="10%">
        <div class="pl-2 text-xl font-literata">
            <p>Full-stack web apps</p>
            <p>Website design (UI/UX)</p>
            <p>Branding</p>
            <p>Layouts</p>
        </div>
    </BentoBox> -->
    <BentoBox title="where i learn" flexBasis="15%">
        <p class="text-xl font-literata pl-2 mb-2">
            Masaryk University | Faculty of Informatics
        </p>
        <p class="text-xl font-literata pl-6 leading-normal">
            <span class="text-gray-400">2022-2026</span> (Bc.) Cybersecurity <br/>
            <span class="text-gray-400">2026-now</span> Software Engineering <br/>
            <a href="https://agdmfimu.cargo.site/" class="underline text-timberwolf">Studio of Graphic Design and Multimedia (AGD+M)</a>
        </p>
    </BentoBox>
    <BentoBox title="where i work" flexBasis="15%">
        <p class="text-xl font-literata pl-2 mb-2">
            <a href="https://csirt.muni.cz/en" class="underline text-timberwolf">CSIRT-MU</a>
        </p>
        <p class="text-xl font-literata pl-6 leading-normal">
            <span class="text-gray-400">2025-now</span> Frontend Developer (part-time) <br/>
        </p>
    </BentoBox>
    <BentoBox title="who am i" flexBasis="30%">
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