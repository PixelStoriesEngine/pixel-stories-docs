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
    class="flex flex-wrap justify-center gap-2 rounded-2xl border"
  >
    {#each items as tab, i}
      <button
        role="tab"
        type="button"
        class="btn-ghost rounded-full p-1.5 px-3 border-none text-sm w-max"
        class:bg-slate-800={i === active}
        class:text-black={i === active}
        class:dark:text-black={i === active}
        class:hover:bg-gray-100={i !== active}
        class:dark:hover\:bg-gray-700={i !== active}
        onclick={() => setActive(i)}
      >
        {tab.title}
      </button>
    {/each}
  </div>

  <!-- Description -->
  {#each items as current, i}
    {#if i === active}
      <div
        class="flex flex-col items-center gap-2 w-full"
        out:fade={{ delay: 0, duration: 100 }}
        in:fade={{ delay: 110, duration: 300 }}
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
    {/if}
  {/each}
</div>
