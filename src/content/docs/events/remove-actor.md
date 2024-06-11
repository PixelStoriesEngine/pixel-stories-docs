---
title: Remove Actor
description: Reference to the remove actor event
---
The remove actor event removes an actor from the game map. It is useful for creating the effect of a character going into a door or leaving from a scene.

## Configuration

The configuration is as follows:
* Actor to remove

The actor to remove comes from the list of actors which were spawned into the game by the `Spawn actor` event. 

Since the remove actor event can be added under an event group and triggered at any point by `Interact` or `touch` triggers, there's no guarantee that the spawned actor is in the game map. In the case where they are not found in the game map, then nothing will happen. 