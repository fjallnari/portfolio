<script lang="ts">
    export let projectID: string;

    let images = [1, 2, 3];

    const swapImages = (idxA: number, idxB: number) => {
        images = images.map((img, idx) => {
            if (idx === idxA) return images[idxB];
            if (idx === idxB) return images[idxA];
            return img;
        });
    }

</script>

<div class="grid gap-4">
    <div class="relative overflow-hidden bg-cover bg-no-repeat">
        <img 
            class="h-auto max-w-full rounded-sm transition duration-300 ease-in-out hover:scale-110"
            src="/images/{projectID}/{images[0]}.png"
            alt=""
        >
    </div>
    <div class="grid grid-cols-2 gap-4">
        <button class="" on:click={() => swapImages(0, 1)}>
            <img 
                class="h-auto max-w-full rounded-sm"
                src="/images/{projectID}/{images[1]}.png" 
                alt=""
            >
        </button>
        <button on:click={() => swapImages(0, 2)}>
            <img 
                class="h-auto max-w-full rounded-sm"
                src="/images/{projectID}/{images[2]}.png"
                alt=""
            >
        </button>
        <!-- <button on:click={() => swapImages(0, 3)}>
            <img 
                class="h-auto max-w-full rounded-sm"
                src="/images/{projectID}/{images[3]}.png"
                alt=""
            >
        </button> -->
    </div>
</div>