---
title: Game Assets
description: How game asset management works in Pixel Stories
---

Game Assets in Pixel Stories is designed to help users effectively manage all types of game assets. Game assets include images, animations, actors, sounds/music, and variables.

Uploading assets into Pixel Stories is designed to be simple. Each asset is individually uploaded into the game maker and always replaceable.

## Map Terrains

Auto tiling works by creating map terrains in Pixel Stories. Each map has a defined tile size. The tile size can be any size (i.e. 16px, 32px, 48px, 64px, even 12px). The tilesets used in the map must use the same tile size. For instance, a 32px tile size map should only use 32px tilesets to create terrains.

### Auto-tile Terrains Format

In Pixel Stories, terrains are created by providing a source tileset and selecting the format. Below are the three formats, each with a template and an example:

<br/>

<pixel-art>

<div style="max-width:300px; display:flex; align-items:end; gap:4px;">

**RPG Maker format**
![](../../../assets/images/rpgmaker-preview.png)

![](../../../assets/images/rpgmaker-example.png)

</div>

<div style="max-width:300px; display:flex; align-items:end; gap:4px;">

**Wang format**
![](../../../assets/images/wang.png)

![](../../../assets/images/wang-example.png)

</div>

<div style="max-width:300px; display:flex; align-items:end; gap:4px;">

**Blob format**
![](../../../assets/images/blob.png)

![](../../../assets/images/blob-example.png)

</div>

<div style="max-width:500px;">

_Example of terrain in a map_
![Drawn terrain example](../../../assets/images/terrain-drawn-example.png)

</div>

</pixel-art>

### How do I use the auto-tile templates?

In the auto-tile template, the light gray areas represent the interior of the terrain, and the dark gray areas outline the borders. The darkest gray areas mark the corners of the border. When transformed into an auto-tile, these corners will connect to form a continuous border around the terrain.

**Note:** In the RPG Maker format, the top left tile doesn’t affect the terrain, as it’s only a thumbnail.

### Wang, Blob, or RPG Maker format?

Choosing between Wang, Blob, or RPG Maker formats ultimately depends on your needs. All three formats produce the same result, an auto-tile terrain. They exist to make importing existing assets easier. If you’re starting from scratch, go with the format you feel most comfortable drawing in. Otherwise, use the one which is the easily rearrange your tileset into.

### Single Tile Placement

The "single tile tileset" allows you to place individual tiles on the map. This is useful for adding non-autotile details, such as staircases, rocks, signs, and variations in terrain. It also simplifies terrain filling; for example, you can use single green tiles to fill a grass interior within a water-bordered autotile.

Single tile placement is designed to keep your game organized and scalable. Start by adding only the tiles you need in one tileset and then expand to the right and down as your game grows. This way, you can add tiles incrementally as your game grows.

<div style="max-width:300px;">

![Single tile placement](../../../assets/images/single-tile-placement.png)

</div>

## Animations

Pixel Stories supports player and character animations through sprite strips.

### Sprite Format

To import animations, they must be in the format of single row sprite strips. Such as the one below.

<pixel-art>

![](../../../assets/images/assets-3.png)

</pixel-art>

If you asset came in a spritesheet grid, you can use a spritesheet editing tool like [EZGif Spritesheet cutter](https://ezgif.com/sprite-cutter) to slice the spritesheet into rows.

The game maker does not currently support animations that come in a GIF format. To use a gif, [EZGif gif to spritesheet](https://ezgif.com/gif-to-sprite) can convert to a sprite strip.

# Animation Configuration

This configuration object allows you to customize your animation by setting various properties. Each field is optional, and only the defined properties will be applied.

| Field        | Description                                                                   |
| ------------ | ----------------------------------------------------------------------------- |
| frame width  | The width for each frame in the animation.                                    |
| frame height | The height for each frame in the animation.                                   |
| frame rate   | The frame rate for the animation (frames per second).                         |
| margin       | The margin around the edge of the frames, i.e., the space between each frame. |
| spacing      | The spacing between each frame in the image.                                  |

## Audio and Images

Audio and images can also be imported into your game in Pixel Stories.

### File Types

Since our game maker is web-based, we can automatically support a wide range of file types. The following are what's supported.

**Audio:**

- .ogg
- .mp3
- .m4a

**Images:**

- .png
- .jpeg
- .svg
- .webp
