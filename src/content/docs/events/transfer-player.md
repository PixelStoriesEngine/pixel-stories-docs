---
title: Transfer player
description: Reference to the transfer player event
---

The transfer player event moves the player to a position in a different map. This event is how different maps are connected with each other in the game.
  

## Configuration

The configuration is as follows:

| Configuration option | Description                                       |
| -------------------- | ------------------------------------------------- |
| Map                  | The map the player transfers to                   |
| Position             | The position of the player in the transferred map |

## Event Notes

### Creating Doors

Put the transfer event in an event group which is activated on `interact` or `touch` triggers. The player is only transferred when the event group is triggered, creating the effect of doors.

### Events After the Transfer

It's important to know that any events after the `transfer player` event **will not play**. This is due to the fact that events affect the map which they belong in. Since the map is switched by transferring the player, those events will no longer have an effect. 