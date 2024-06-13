---
title: Spawn Actor
description: Reference to the spawn actor event
---
The spawn actor event will add an actor into the game map at a specified location. It is essential for managing characters in your game. This event bring the actors you've created from the game assets into the map. 

## Configuration

The configuration is as follows:

| Name           | Description                        |
| -------------- | ---------------------------------- |
| Actor to spawn | The actor to spawn into the map    |
| Spawn location | The position to spawn the actor at |

## Event Notes

Some important notes about the event are included below.
### Actors List

The actor to spawn comes from the list of actors created in the game under `Game assets > Actors`
### Actor Event Only Spawns Actor Once

The spawn actor event can be placed under an event group and triggered repeatedly with `Interact` or `Touch` triggers. In this case, the game will not spawn in the actor if it's already been spawned into the game map by this event.


