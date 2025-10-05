---
title: Dialog Layout Makeover and New Camera & Movement Events
date: 2025-10-04
excerpt: Release 0.19.0 unlocks fully customizable dialog layouts, introduces camera shake and movement events, and adds new controls to the in-game settings menu.
author: Truman
tags:
  - GAME MAKER UPDATE
---

Pixel Stories 0.19.0 is all about staging your cutscenes exactly the way you imagined. Dialog events now support bespoke layouts so you can place the text box, name badge, and character portrait anywhere on the screen and tune every detail. We also shipped fresh event actions for stopping player movement and steering the camera—perfect for dramatic reveals. Finally, the in-game settings menu gains quick share and fullscreen buttons so players can spotlight their favorite moments.

## Design dialog screens your way

The dialog event editor now lets you build multiple layouts and swap between them to match the mood of each scene. Resize the text box, drop in a dedicated name panel, and introduce character portraits without touching external art tools. Portraits and speaker names can be swapped inline with dialog tags, giving you granular control over who appears in frame and how they are presented. Every component offers familiar styling knobs—position, padding, colors, and more—so your story UI can be as minimal or as bold as you need.

## Keep the scene under control with new events

Cutscenes feel tighter with the new player movement controls. Trigger events to halt the player during a dramatic beat, then resume them once the moment passes. Pair those with the new move and shake camera events to frame the action, add impact to explosions, or guide attention to off-screen clues.

## Game settings tweaks for players

Players will now find share and fullscreen buttons inside the game settings menu. Sharing lets them quickly spread your story with friends, while fullscreen mode keeps the focus entirely on your world.

## Full changelog

- [Editor] Added a log for crashes on unhandled rejection event
- [Events] Added stop/resume player movement events
- [Events] Added move and shake camera events
- [Dialog layouts] Added dialog layout feature: allowing for customization of text box, name box, and portraits.
  - Name and portrait can be set in dialog content with tags.
  - Each dialog screen component has rich customization options.
- [Game] Add share button in game settings menu
- [Game] Add fullscreen button in game settings menu
