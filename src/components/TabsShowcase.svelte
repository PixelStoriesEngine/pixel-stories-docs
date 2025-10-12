<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import type { ImageMetadata } from "astro";
  import image1 from "../assets/docs-images/features/image-1.png";
  import image2 from "../assets/docs-images/features/image-2.png";
  import image3 from "../assets/docs-images/features/image-3.png";
  import image4 from "../assets/docs-images/features/image-4.png";
  import image5 from "../assets/docs-images/features/image-5.png";

  interface ShowcaseItem {
    title: string;
    imgSrc: ImageMetadata; // string path OR Astro ImageMetadata
    alt?: string;
    description: string;
  }

  const items: ShowcaseItem[] = [
    {
      title: "Map editor",
      imgSrc: image1,
      description:
        "Build immersive maps visually with editor tools. The Map Editor gives you everything you need to design your world.",
    },
    {
      title: "Event system",
      imgSrc: image5,
      description: "Create branching interactions and gameplay logic.",
    },
    {
      title: "Asset library",
      imgSrc: image2,
      description: "Organize tiles, sprites, sounds, and more.",
    },
    {
      title: "Dialogue",
      imgSrc: image5,
      description: "Author conversations with portraits and choices.",
    },
    {
      title: "Inventory",
      imgSrc: image4,
      description: "Track items, keys, and quest objects.",
    },
  ];

  let active = $state(0);

  function setActive(i: number) {
    if (i < 0 || i >= items.length) return;
    active = i;
  }
</script>

<div class="flex flex-col items-center gap-2 w-full">
  <div
    role="tablist"
    aria-label="Features"
    class="flex flex-wrap justify-center gap-2 rounded-2xl"
  >
    {#each items as tab, i}
      <button
        role="tab"
        type="button"
        class="btn-ghost rounded-full p-1.5 px-3 w-30 text-sm border"
        class:bg-slate-800={i === active}
        class:text-black={i === active}
        class:dark:text-black={i === active}
        class:hover:bg-slate-100={i !== active}
        class:dark:hover\:bg-gray-700={i !== active}
        onclick={() => setActive(i)}
      >
        {tab.title}
      </button>
    {/each}
  </div>

  <div class="w-full aspect-video relative mb-20">
    <!-- Description -->
    {#each items as current, i}
      <div
        class="absolute flex flex-col items-center gap-2 w-full opacity-0 transition-opacity duration-300"
        class:opacity-100={i === active}
        class:z-10={i === active}
      >
        <p class="text-center text-pretty">
          {current.description}
        </p>

        <img
          id={"panel-" + active}
          aria-labelledby={"tab-" + active}
          src={current.imgSrc.src}
          alt={current.alt ?? current.title}
          class="w-full max-w-full h-full rounded-2xl border shadow-xl"
        />
      </div>
    {/each}
  </div>
</div>
