---
title: Spawn Actor
description: Reference to the spawn actor event
---
The spawn actor event is essential for managing characters in your game. This event bring the actors you've created from the game assets into the map. 

## Configuration

The spawn actor event will add an actor into the game map at a specified location.

The configuration is as follows:
* Actor to spawn
* Spawn position

The actor to spawn comes from the list of actors created in the game under `Game assets > Actors`.
The position to spawn describes the spawn point of the actor.

The spawn actor event can be placed under an event group and triggered repeatedly with `Interact` or `Touch` triggers. In this case, the game will not spawn in the actor if it's already been spawned into the game map by this event.


