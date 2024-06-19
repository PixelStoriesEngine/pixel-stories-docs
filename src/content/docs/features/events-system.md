---
title: The Event System
description: Using the events system in Pixel Stories
---
The event system in Pixel Stories is a powerful and flexible tool that enables developers to create dynamic and interactive gameplay experiences. Events are the core mechanisms through which the game world responds to player actions, drives the narrative, and adds interactivity. 
## Events in Pixel Stories

The following are the current Pixel Stories events divided into the following categories:

* **Essential Events**
	* Dialog Event
	* Timer
	* Set Player Position
* **Actor Events**
	* Spawn Actor
	* Remove Actor
	* Move Actor
* **Control Flow Events**
	* Add Event Group
	* Remove Event Group
	* Set Variable

### How Events Work

Events are the building blocks that control what happens in your game. When a player first enters a map, the map runs the initial set of events. These events can include actions like showing a dialog, moving an actor, or starting a wait timer.

## Event Groups

An event group is a chain of events bundled together to run sequentially. Event groups are added to the map and can be triggered by player interaction, touch, or automatically right when the event is added. The event group is added by placing an Add Event Group event in the map's initial events.

### How Group Events Work

1. When a group of events runs, each event occurs one after the other in the specified order. 
2. The "Add Event Group" event allows you to configure triggers for the event group. These triggers define how and when the event group will start.
3. Event groups can be added or removed based on game conditions. This enables puzzles and multiple endings to be possible in your game.

## Important Notes

- **Events Only Play While the Player Is in the Map**: Events are scoped to the map they are created in, meaning they cannot change things outside of their map.
- **Global Scope of Variables**: Unlike events, variables are globally scoped, allowing them to influence gameplay across different maps. 

## Table of Events

Below is the table of all the current events and a brief description:

| Event Name          | Description                                              |
| ------------------- | -------------------------------------------------------- |
| Dialog              | Create and manage conversations between characters.      |
| Timer               | Trigger actions after a set time interval.               |
| Set Player Position | Change the player's location within the map.             |
| Spawn Actor         | Introduce new characters or objects into the game world. |
| Remove Actor        | Remove characters or objects from the game world.        |
| Move Actor          | Control the movement of characters or objects.           |
| Add Event Group     | Bundle multiple events into a sequential group.          |
| Remove Event Group  | Delete a previously defined group of events.             |
| Set Variable        | Modify game variables to influence gameplay.             |
