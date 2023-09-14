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

    let imgToZoom: HTMLImageElement | null = null;

    function onZoom(event: MouseEvent) {
        if (imgToZoom === null) return;

        const x = event.clientX - imgToZoom.offsetLeft;
        const y = event.clientY - imgToZoom.offsetTop;
        
        imgToZoom.style.transformOrigin = `${x}px ${y}px`;
        imgToZoom.style.transform = "scale(2.5)";
    }

    function offZoom() {
        if (imgToZoom === null) return;
        imgToZoom.style.transformOrigin = `center center`;
        imgToZoom.style.transform = "scale(1)";
    }

</script>

<div class="grid gap-4">
    <div class="h-full w-full overflow-hidden shadow">
        <img
            bind:this={imgToZoom}
            on:mousemove={onZoom}
            on:mouseleave={offZoom}
            on:focus={() => {}}
            class="h-full w-full rounded-sm origin-center-center object-cover"
            src="/images/{projectID}/{images[0]}.png"
            alt=""
        >
    </div>
    <div class="grid grid-cols-2 gap-4">
        <button class="w-fit shadow" on:click={() => swapImages(0, 1)}>
            <img 
                class="h-auto max-h-56 max-w-full rounded-sm"
                src="/images/{projectID}/{images[1]}.png" 
                alt=""
            >
        </button>
        <button class="shadow" on:click={() => swapImages(0, 2)}>
            <img 
                class="h-auto max-h-56 max-w-full rounded-sm"
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