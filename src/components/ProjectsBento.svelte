<script>
    import ProjectCard from "./ProjectCard.svelte";

</script>


<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="grid gap-6">
        <ProjectCard 
            name="morii-vtt"
            type="web app"
            colorBg="#252529"
            colorText="#E2E2E2"
            imageSrc="/images/morii-vtt/_thumbnail.png"
        />

        <ProjectCard 
            name="ttrpg-compass"
            type="website"
            colorBg="#182326"
            colorText="#B69048"
            imageSrc="/images/ttrpg-compass/_thumbnail.png" 
        />

        <ProjectCard 
            name="ape-alliance"
            type="business cards + envelopes + socials"
            colorBg="#231F20" 
            colorText="#E9E9E9"
            imageSrc="images/ape-alliance/card-black.jpg" 
        />

    </div>
    <div class="grid gap-6">
        <ProjectCard 
            name="terramem"
            type="brand design"
            colorBg="#202419" 
            colorText="#B1B1A7"
            imageSrc="/images/terramem/guidelines.png"
        />
        <ProjectCard 
            name="shadowtorch"
            type="web & mobile app"
            colorBg="#114470"
            colorText="#7DD3FC"
            imageSrc="/images/shadowtorch/_thumbnail.png" 
        />
        <ProjectCard 
            name="gw2-cartographer"
            type="web app"
            colorBg="#24363D"
            colorText="#B69048"
            imageSrc="/images/gw2-cartographer/_thumbnail.jpg" 
        />
    </div>
</div>