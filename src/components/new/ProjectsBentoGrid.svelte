<script>
    import NewProjectCard from "./NewProjectCard.svelte";

</script>


<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="grid gap-6">
        <NewProjectCard 
            name="morii-vtt"
            type="web app"
            colorBg="#3D2824" 
            colorText="#E2E2E2"
            imageSrc="/images/morii-vtt-collage.png"
        />

        <NewProjectCard 
            name="ttrpg-compass"
            type="website"
            colorBg="#182326"
            colorText="#B69048"
            imageSrc="/images/compass-collage.png" 
        />

        <NewProjectCard 
            name="ape-alliance"
            type="business cards + website design"
            colorBg="#231F20" 
            colorText="#E9E9E9"
            imageSrc="images/aa-card.jpg" 
        />

    </div>
    <div class="grid gap-6">

        <NewProjectCard 
            name="terramem"
            type="brand design"
            colorBg="#202419" 
            colorText="#B1B1A7"
            imageSrc="/images/terramem-logo-full.png"
        />
        <NewProjectCard 
            name="shadowtorch"
            type="web & mobile app"
            colorBg="#114470"
            colorText="#7DD3FC"
            imageSrc="/images/shadowtorch-collage.png" 
        />
        <NewProjectCard 
            name="gw2-cartographer"
            type="web app"
            colorBg="#24363D"
            colorText="#B69048"
            imageSrc="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" 
        />
    </div>
</div>