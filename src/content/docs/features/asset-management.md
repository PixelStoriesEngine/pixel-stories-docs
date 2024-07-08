---
title: Game Asset Management
description: How asset management works in Pixel Stories
---

Asset management in Pixel Stories is designed to help users effectively manage all types of game assets. Game assets include images, animations, actors, sounds/music, and variables.

Uploading assets into Pixel Stories is designed to be simple for users. Each asset is individually uploaded into the game engine and always replaceable.

## Key Features

The following are the features which make assets easy to handle in Pixel Stories.

### Easy Upload

When adding an asset, you can drag and drop files directly into game engine. The asset will be uploaded immediately into the engine.

<div style="max-width:400px">

![](../../../assets/images/asset-management.png)

</div>

### Replaceable Assets

Story-driven games are destined to evolve as you work on it. So Pixel Stories assets, including images, animations, music, and sound, are designed to be easily replaceable. When you replace an asset, the changes reflect immediately in your game.

![](../../../assets/images/asset-management-1.png)

### Wide Support for File Types

Since our game engine is web-based, we can automatically support a wide range of file types. The following are what's supported.

**Audio:**

- .ogg
- .mp3
- .m4a

**Images:**

- .png
- .jpeg
- .svg
- .webp

## Auto-tile Terrains Format

In Pixel Stories, terrains are created by providing a source tileset and selecting the type. We currently support 4 types of tilesets.

<pixel-art>

Basic
![](../../../assets/images/basic-border.png)

Basic full (includes extra tile for border detail)
![](../../../assets/images/basic-full-border.png)

RPG Maker
![](../../../assets/images/rpgmaker.png)

<div style="max-width:400px;">

Wang
![](../../../assets/images/map-editor.png)

</div>

## Animations Format

To import animations, they must be in the format of single row sprite strips. Such as the one below.

<pixel-art>

![](../../../assets/images/assets-3.png)

</pixel-art>

If you asset came in a spritesheet grid, you can use a spritesheet editing tool like [EZGif Spritesheet cutter](https://ezgif.com/sprite-cutter) to slice the spritesheet into rows.

The engine does not currently support animations that come in a GIF format. To use a gif, [EZGif gif to spritesheet](https://ezgif.com/gif-to-sprite) can convert to a sprite strip.
