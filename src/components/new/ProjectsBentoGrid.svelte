<script>
    import NewProjectCard from "./NewProjectCard.svelte";

</script>


<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="grid gap-6">
        <NewProjectCard 
            name="morii"
            type="web app"
            colorBg="#3D2824" 
            colorText="#E2E2E2"
            imageSrc="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" 
        />
        <NewProjectCard 
            name="ttrpg compass"
            type="website"
            colorBg="#111A20"
            colorText="#B69048"
            imageSrc="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" 
        />

        <NewProjectCard 
            name="cartographer"
            type="web app"
            colorBg="#24363D"
            colorText="#B69048"
            imageSrc="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" 
        />
    </div>
    <div class="grid gap-6">
        <NewProjectCard 
            name="terramem"
            type="branding"
            colorBg="#202419" 
            colorText="#B1B1A7"
            imageSrc="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" 
        />
        <NewProjectCard 
            name="shadowtorch"
            type="web & mobile app"
            colorBg="#114470"
            colorText="#7DD3FC"
            imageSrc="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" 
        />
        <NewProjectCard 
            name="???"
            type="poster design"
            colorBg="#4F3C62" 
            colorText="#E4E4E4"
            imageSrc="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" 
        />
    </div>
</div>