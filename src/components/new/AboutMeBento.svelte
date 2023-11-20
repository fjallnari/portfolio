<script lang="ts">
    import Icon from "@iconify/svelte";
    import BentoBox from "./BentoBox.svelte";


</script>

<div class="w-full h-full flex flex-row flex-wrap gap-6 pb-8">
    <BentoBox title="what i do">
        <div class="pl-2">
            <p class="text-xl">i love creating stories & experiences</p>
            <p class="text-xl">i make web apps</p>
            <p class="text-xl">i make mobile apps</p>
        </div>
    </BentoBox>
    <BentoBox title="education">
        <p class="text-xl font-literata whitespace-nowrap pl-2 mb-2">
            Masaryk University <br/>
            Faculty of Informatics
        </p>
        <p class="text-xl font-literata pl-6 leading-normal">
            <span class="text-gray-400">2019-2021</span> Computer Science <br/>
            <span class="text-gray-400">2021-now</span> Cybersecurity <br/>
            Studio of Graphic Design and Multimedia (AGD+M)
        </p>
    </BentoBox>
    <BentoBox title="tools i use">
        <p class="text-xl">affinity stuff</p>
    </BentoBox>
    <BentoBox title="key skills">
        <p class="text-xl">svelte & stuff</p>
    </BentoBox>
    <BentoBox title="about me">
        <div class="flex flex-col gap-4 text-xl text-justify font-literata pl-2">
            <p>I currently live in Czechia. 🇨🇿</p>
            <p>
                I have a great love of learning, and am always interested in bleeding-edge technologies and new ways of solving problems. ❤️ 
            </p>
            <p>
                I enjoy singing and playing music, tabletop RPGs, books, and will never say no to a good brew of tea, especially if it's a nice Taiwanese oolong. 🍵
            </p>
        </div>
    </BentoBox>
</div>