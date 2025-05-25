---
title: Pixel Stories Engine Changelog
description: Find specific releases and changelogs for the engine.
---

## 0.12.0

**May 25, 2025** ([Release notes](https://pixelstories.io/blog/release-0.12.0))

- [Editor] Added offline mode and syncing local/remote project data
- [Editor] Added guest mode for editing guest project without remote save
- [Auth] Remove legacy auth service and replace with updated auth service from provider
- [Editor] Added a safe guard against saving an empty project file to the cloud

---

## 0.11.0

**May 13, 2025**

Added

- [Map objects] Animated Map Objects, added the option for static and animated map objects, and configuration for animation strip.

Changed

- [Terrains] Added confirm delete pop up for deleting terrains in the edit terrains modal

Fixed

- [Editor] Optimize handling of state when editing terrains

---

## 0.10.1

**May 1, 2025** ([Release notes](https://pixelstories.io/blog/choice-event-upgrade))

Added

- [Event groups] Event group now has an `Add to map` button which adds an `Add event group` event to the top of initial map events with the event group already selected.

Changed

- [Event] Show Choices event plays user events on choice selection instead of setting variable
- [Editor] New project game config: size mode default to "fit" instead of "fill", Game size to 800 by 800
- [Editor] New project includes an empty default map "Map 1"
- [Animations] Set better fallback values (16x16 size, 4 fps) for missing animation config to help see error

Fixed

- [Editor] Stale mouse events triggered from outside game canvas
- [Editor] Back button navigates to session history, last-visited URL by default, instead of page structure.
- [Assets library] A more focused asset library that does not overwhelm the user by showing everything. Skips asset library to go to asset pack right away instead, since there is only one right now.
- [Assets library] Fix duplicate asset ids
- [Game UI] Remove choices UI config, instead inherit UI style config from dialog box
- [Editor] Remove ability to drag and move nested events in or out of their nested positions due to buggy behaviour
- [Animations] Crash due to undefined frame configuration

---

## 0.10.0

**April 11, 2025** ([Release notes](https://pixelstories.io/blog/introducing-code-event))

Added

- [Navigation] Bring out map terrain and objects so its not nested in navigation
- [Navigation] Enable back button from playtest page
- [Map objects] Integrate collision boxes into map objects
- [Player] Enable adjusting collision box for player
- [Events] New event: Add Run Code event. Lets users execute custom client-side code at specific points during gameplay to directly manipulate game objects, camera, scene behavior, or anything else.

Fixed

- [Transfer player event] Fix transfer player event setting player position while map not loaded

---

## 0.9.0

**March 27, 2025** ([Release notes](https://pixelstories.io/blog/standalone-game-export))

Added

- [Editor] Add game export for web HTML/CSS/JS
- [Misc] Add standalone game build
- [Changelog] Add a rough history of development in the Pixel Stories Engine

---

## 0.8.0

**March 18, 2025**

Misc user experience fixes

- [Routing] Fix infinite reload when going to an undefined path
- [Side panel] Add slideable side panel to adjust width
- [Projects] Fix double game canvas when switching projects from playtest and settings
- [Editor] Fix not going back to editor mode after visiting playtest
- [Editor, Map objects] Fix different objects cant be placed at same tile
- [Editor, zoom] Have map editor zoom to persist through playtest and reloads
- [Editor] Rename “Actor” to “Character” in UI copy and assets path.
- [Editor] fix when no show grid, zooming map enables grid again

New Show image and Set Character Animation Events

- [Event] Add show image event
- [Event] Add Set NPC Animation Set event
- [Event] Fix NPC walk event to use duration parameter to determine when NPC has finished walking.

Improvement to custom character animation import flow

- [Characters] Change animation settings to inheritance from settings defined in character
  - Remove copy-paste in animation config.
  - Introduce a default animation configuration for characters.
  - Animation settings now inherit default settings defined in character unless explicitly overridden.
- [Character] Enable idle animation
- [Player] Implement default config inheritance for player as well

Easier event group clean up and less jank map switching

- [Event] Tranfer player event to fade for a fix 350ms amount between maps
- [Event] Remove own event group after finish playing from Add event group event:
  - Keep in Map: Group remains until explicitly removed by a Remove Group Event.
  - Remove on Finish: Group is automatically removed after playing once.
  - Remove after N Plays: Group is automatically removed after a specified number of plays.

---

## 0.7.1

**February 19, 2025**

- Fix wrong dialog box size and position

---

## 0.7.0

**February 19, 2025**

Asset Management, Enhanced Map Tools and Dialog UI

Key changes:

- Adds Zelda-like open source assets
- Implements a better game window size, along with better map tools including zoom
- Fixes DialogUI to include good default settings

Changelog

- Set default map editing tool to be “pan”
- Set game scale to envope
- Remove game size config
- Redo game size to be “true game size”
- Add game size fit or fill window option
- Add default map zoom and map zoom
- Fix map editor grid rendering bugs
- Json schema change: new ui config json format
  - rename story.ui to story.gameUI
- Completely revamp dialog screen view layout and simplify configuration flow
  - Add web safe fonts
  - Add dialog box background and border color customization
  - Change dialog box size defined from px to percentage of screen
  - Remove NineSlice background option
  - Remove concept of widgets, including image widget
- Move adding and editing terrains and map objects to game assets page
- Add map zoom input for precise zoom adjustment
- Add new assets from OpenGameArt
  - zelda like assets
- Add tags to assets for organization
- Add search and filter for assets
- sort editor drawer stories by last edited

---

## 0.6.0

**November 13, 2024**

Improved Terrain Creation and Mapping

Added

- [Map terrains, Editor] Expandable single tile tileset and individual tile placement
- [Map terrains] New modal for creating auto tile terrains with clear format mode selection
- [Map terrains] Support for blob auto tile format
- [Editor] Zoom in and out in editor (ctrl + scroll wheel)

Changed

- [Editor] Game window in editor takes up entire screen view instead of only limiting to game’s view
- [Terrain layers] New layer is added on top of list instead of below
- [Map terrains, Map objects] Temporarily remove terrain and objects library (better default assets coming soon)

Fixed

- [Map terrains] Fix “Wang” format incorrectly generating the auto tileset at corners
- [Editor] Restarting game did not properly signal for UI updates
- [Terrain layers, Editor] Drawing on hidden terrain layers

---

## 0.5.0

**September 10, 2024**

Customize UI Feature Release

- Dialog box customization via Game Assets
- Dialog screen customization button
- Face sprite support and customization
- New dialog text editor experience
- Remove “Textbox” RexUI component
- Add “Text player” RexUI component
- Integrate Monaco Editor
- Add widget and tag system
- Add face sprite widget
- Implement tag parser for Text player
- Update image and sound asset system
- Support replaceable assets

---

## 0.4.3

**Aug 8, 2024**

- Fix total events infinite loading

---

## 0.4.2

**July 15, 2024**

- Hot fix for clipped dialog box

---

## 0.4.1

**July 15, 2024**

- Fix default dialog box size to fit in game window

---

## 0.4.0

**July 15, 2024**

Better Drawing Tools and Input Fixes

- Add rectangle and ellipse tools for terrains and collisions
- Change interact key from `X` to `Z`
- Improve input handling and story store update logic

---

## 0.3.0

**July 10, 2024**

Choices event and UI Upgrade

- Redo dialog box using Phaser Rex UI
- Add choices UI and choices event
- Add resources section to project page
- Remove unused queries:
  - `purchased_stories`
  - `is_paid`
  - `is_listed`
  - `published_date`

---

## 0.2.0

**June 22, 2024**

- Add foundational mapping features and map editing tools

---

## 0.1.0

**April 10, 2024**

- Core engine features

---

## 0.0.0

**July 21, 2023**

Begin development of Pixel Stories Engine
