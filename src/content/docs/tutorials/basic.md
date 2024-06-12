---
title: Basic Pixel Stories
description: A beginners guide to Pixel Stories
---

In this tutorial, we will be creating a map with terrain and objects, adding animations and actors, as well as implementing a bit of the event system. To follow along, <a href="https://app.pixelstories.io/editor" target="_blank">open the game engine</a> in your browser and <a href="https://api.pixelstories.io/storage/v1/object/public/misc/Basic_Tutorial_Assets.zip" download> download the assets </a> for this tutorial.

You can find the finished project <a href="https://app.pixelstories.io/embed/9JqZWsEk20" target="_blank">here</a>!
## New Story Project

To get started, first we have to launch the game engine and create a new story. After we've created a new story, we'll be put right into the engine. Within the `Settings` tab, we can name our game "Pixel Stories Tutorial."

## Our First Map

Right now our story doesn't have any maps. Create a new map by clicking "Create new map" in the `Maps` tab. Now we're prompted to enter map information. Let's name our map "Hello World." We can leave our map tile size at 16px.

Head over to the `Edit map > Edit terrains` section. You'll see that there are no terrains. Let's add the following image for our terrain. Click add terrain, then paste or drop in the terrain source image below. 

![](../../../assets/images/terrain-3.png)
_Hint: right click image to copy it from browser._

You should see a preview for the terrain. That's how it will look when used in the map. Once we add the terrain, we see it in the list of terrains. Click on the terrain to select it and draw into the map. Let's add a little bit of land. 

We can find the terrain editing tool in the toolbar on top of the game window. There are tools to pan, draw, and erase. 

![](../../../assets/images/resulting-map.png)

## Adding Map Objects

Our map feels rather empty now... With just some land and no trees. Let's add in some trees! Head over to `Edit map > Edit objects` and click "Add object." Paste or drop in this tree sprite.

![](../../../assets/images/tree-2.png)

There are options to configure this object, but we can leave it as is for now. Add the object. Then we can select it to place them in the map. We can move, place, and delete objects with the tools in the toolbar. Note, we are only able to edit objects while in the `Edit objects` section.

_Tip: you can change the grid snapping options within the toolbar._

![](../../../assets/images/resulting-terrain.png)

## Setting the Player Sprite

Our story's player actor is currently occupied by a ghost... His name is Ghosty, the fallback sprite for any actors without defined animations. Let's change our player character by adding a new animation. Head over to `Game assets > Animations`.

We see that there aren't any animations right now. Click "Add animation" and paste or drop the sprite sheet below. 

Walk left:
![](../../../assets/images/walk-left.png)

Set the frame width and height to be 32px. Set the frame rate to 6 frames per second. Let's name the animation "Skeleton walk left."

Now head over to `Game assets > Actors > Player`. Set the player's walking left animation to the one we just added. Test it out at the `Play test` tab and we'll see the player sprite in action. We can move around with the arrow keys. 

Without any other animations set, the actor will infer the other directions. We can add the other animations for walking right, up and down. Try adding them and play testing the result!

Walk right:
![](../../../assets/images/walkright.png)
Walk up:
![](../../../assets/images/walkup.png)
Walk down:
![](../../../assets/images/wakdown.png)

## Adding a Character

Our game needs a character to bring some fun. In this section we'll add a character into the game.

Navigate to `Game assets > Actors` and add a new actor. We'll see that the configuration is missing animations. We could add another set of animations for this new character, but to save some time, let's use the same ones as the player. Name this character "Joseph."

To add the character into the game, we'll add a `Spawn actor` event.  Head back to our map into the `Events` section. Under the map events, click the `+ Event` button and select the `Spawn actor ` event. The event may take a few seconds to load, which is normal. 

For the event configuration, select the actor to spawn as `Joseph`. Then we set the spawn position by clicking on `Set position` and click on a point in the map next to the player. 

Head over to the play test section and we'll see the character spawn in.

![](../../../assets/images/friend.png)

## Adding Dialog

With our map and character ready, let's add a dialog event! Navigate to the `Events` section in our map and add a `Dialog` event.

In the event configuration, we see a big text area for dialog. In Pixel Stories, dialog is written in a specific format. Each line within the text area represents a new dialog box in the game. For this tutorial, copy the following into the text area.

```
Hello World
[Joe]
This is written by Joe.
Hello from Joe!
[]
Joe went away.
```

The word within the bracket adds a name for the dialog. The name will display in the dialog box until it is changed or reset with empty brackets `[]`.

Now let's head back to the map and to the `Play test` section. Click `Start map events` and we'll see the dialog we've written. Woohoo!

## Interact with the Character

The dialog we have now simply shows when the event is run. To play dialog when the player interacts in the game, we will use event groups. 

In the `Event groups` section, add a new event group. We can name it "Skeleton talks." Add a `Dialog event` to this event group. We'll add the following dialog:

```
[Skeleton]
Hello friend!
Thank you for bringing me into this world.
I'd like to check out this tree.
```

Now we will add another event, `Move actor`. Again, select `Joseph` for the actor and we can set the path. Click on `Set move path` and click to add points in the map where the actor will walk to. The actor will walk to the first point, then the next, and so on. For this event, let's set the character to walk to the tree.

![](../../../assets/images/walk-to-tree-1.png)

Once the dialog and move actor events are set up in the event group, we can add the event group in our initial events with the `Add event group` event. The initial events run once when the map loads.

In the `Events` section, add the `Add event group` event. Select the event group `Skeleton talks` which we've just added. We can leave the instance name empty for now.

Set the trigger type to `Interact` and put the trigger position where our character spawns in the map.

![](../../../assets/images/Basic-Pixel-Stories.png)

Now we're done configuring this section and ready to play test! Head over to `Play test` and try pressing the action button `x` where the character is. We'll see the sequence play out.

![](../../../assets/images/basic-tutorial-result.png)

## That's the Basics!

Thanks for going through this basic tutorial! We've gone through creating our map with terrain and objects, adding animations and actors, as well as a bit of the event system. [Join our community on Discord](https://discord.gg/XN9EaUh26g) if you'd like to get more help or give feedback/suggestions.

Good luck in your game development journey with Pixel Stories!
