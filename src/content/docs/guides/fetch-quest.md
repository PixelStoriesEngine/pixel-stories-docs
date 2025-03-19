---
title: Making a quest
description: How to Create a Fetch Quest in Pixel Stories
---

In this tutorial, we will create a "fetch quest" — a common game scenario where the player must obtain one or more objects and deliver them to a specific character or location before proceeding with the story.

We will create a quest in which the player will have to get a key from a rock to unlock a door. Along the way, we'll combine map events, event groups, dialogs, and conditional branching.

First, we’ll set up the maps and game assets. Then we’ll go through adding the group events. Finally we’ll put it all together within the map’s starting events.

## Setting up the Maps

For the purpose of this tutorial, we will create a very simple first map to play through our fetch quest. We will name this map, Map 1. Since the player will be proceeding through the game to a new map through a door, we will create a second map, named Map 2. We can leave Map 2 completely empty for now.

In Map 1, where the fetch quest is taking place, we will first need to create a rock and a door that the player can interact with. Let’s add a rock and door to the map using default assets. Refer to the section “Default Assets” under the “Start Here” section to learn how to do this.

1. Choose any place on the map to place the rock.
2. Choose any place on the map to place the door.

## Setting up Game Assets

We will need to create a few game assets that will be used in the fetch quest. Refer to the Introductory Tutorial - Characters and Core Features - in the section “Variables and Branching” to learn how to create an actor and variable. There is no need to add any animations to the actor.

1. Create an actor and name him ” Tom”.
2. Choose any place on the map for him to spawn.
3. Add a new switch variable and name it “Player has key”. This is a condition which can change depending on if the player picks up the key from the rock.

## Event Groups

Now, we need to create three event groups that will occur in this quest - when the player interacts with the door, Tom, or the rock. Refer to the section “Dialog and Interactions” under the Introductory Tutorial for steps on how to add dialog in the event group.

Remember, event groups **do not** have to be created in order of when they happen. Event groups are merely groups of events that happen when a player interacts with an object or character. Map events, on the other hand, are initial events that happen automatically when the map first loads. They happen in the sequence they are created.

### What happens when the player interacts with the door?

This event group will include the events that happen when the player interacts with the door. This will be a conditional event group, because the player will not be able to advance to the second map if they do not have the key. So, we need to set two scenarios; one in which the player does not have the key and the door is locked, and the other in which the player has the key and is transferred to the second map.

1. Navigate to the maps tab.
2. Click the button “+ New event group” under the Event groups heading to add an event group.
3. Name it “Unlock door”
4. Click on “+ Conditional” to add a conditional event.
5. Set the conditional event to read “If player has key” = False. This is the scenario is which the player does not have the key.
6. Add dialog to the conditional event and name it “Door locked”
7. In the textbox, write “The door is locked”. This will make it so the textbox stating the door is locked will appear when the player does not have the key and interacts with the door.
8. Set the other conditional event to read “If player has key” = True
9. Add an event within the conditional event. You should notice that it will be indented under this conditional event. Add the event “TransferPlayer”. In the drop down, set the map to transfer to as “Map 2”. Don’t forget to set the position in the map as the same position as where the door is. This will ensure interacting with the door will transfer the player to the 2nd map and allow them to proceed through the game.

### What happens when the player interacts with Tom?

This event group will include the events that happen when the player interacts with Tom. This will be a conditional event group, because Tom’s dialog will change depending on whether the player has the key or not. The setup is very similar to the “Unlock door” event group, because they both contain conditional events.

1. Add another event group and name it “Tom interaction”.
2. Add a conditional event. Set the conditional event to read “If player has key” = False
3. Add dialog to the conditional event and name it “Don’t have key”
4. In the textbox, write “You have to get the key from the rock”. This is the dialog that Tom plays when the player doesn’t have the key.
5. Set the other conditional event to read “If player has key” = True
6. Add dialog and name it “Has key”
7. In the textbox, write “You can proceed”. This is the dialog that Tom plays when the player has the key.

### What happens when the player interacts with the rock?

This event group will include the events that happen when the player interacts with the rock. Unlike in the other event groups, there will be no conditional events because only one interaction can happen.

1. Add an event group and name it “Get key from rock”.
2. Add dialog and name it “Found key dialog.”
3. In the text box, write “Found key!” This is the dialog that plays when the player interacts with the rock.
4. Now, we will need to set a variable event. This makes it so that the game knows the player has the key now. Click “+ Event…” > “Set variable”
5. Under “Event name”, name the event “Set has key”
6. In the drop down box, change the “variable to set” as “Player has key”, set the value to “True”.
7. Now, we will need to remove the event group after the player gets the key from the rock because the key has been removed. Click “+Event…” > “Remove event group”
8. Name the event “Remove event group”
9. In the drop down, select the “Get key from rock” event group. This ensures that the event group does not continue happening after the player gets the key from the rock; as the player can only get the key once.

### Map Events

Now, we are ready to bring in all the event groups in a sequence under Map events. An important thing to note is, similarly to when we created event groups, when adding them under the Map events, the same thing applies - they can be **in any order**. This is because the event groups are all tied to interactions with different objects in the map, rather than happening automatically when the map loads. However, the “Spawn actor” event **does** happen automatically when the map loads, so be sure to place the “Spawn actor” event first, because Tom needs to spawn first so the player can interact with him.

1. Create the first map event as a “Spawn actor” event, name it “Spawn actor”, and choose “Tom” under actor to spawn. Choose any position on the map for Tom to spawn.
2. Click “+ Event…” and add an event group. Name it “Get key event group” and set the drop down box to “Get key from rock” event group. Set the trigger type as interact and set the position to the same position as the rock on the map. It is very important you set the same position as the rock so that the rock will be connected to the events that play when the player interacts to the rock.
3. Create another event group and name it “Add can proceed group”. Set the drop down box to “Tom interaction”. Set the trigger type as interact and set the trigger position to the same position as where Tom will spawn.
4. Create the last event group and name it “Unlock door event group”. In the drop down box, set it to “unlock door”. Set the trigger type as interact and set the trigger position to the same position as where the door is.

That’s it! we have successfully created a fetch quest in Pixelstories where the player needs to get a key from a rock to go through a door, and can interact with an NPC that tells them this information.

**Important Note:** When playing through and testing the game, **restart the game** each time to ensure that the player does not have the key yet.
