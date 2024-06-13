---
title: Move actor
description: Reference to the move actor event
---

The move actor event moves an actor in a specified path.

## Configuration

The configuration is as follows:

| Name                    | Description                                                              |
| ----------------------- | ------------------------------------------------------------------------ |
| Actor                   | The actor to move                                                        |
| Movement path           | The path the actor follows as defined by points in the map               |
| Walk speed              | The speed the actor moves at                                             |
| Immediate to next event | Play the next event right away instead of after the actor is done moving |

## Event Notes

Some important notes about the event are included below.

### Actor Move Behavior

Since the actor is not guaranteed to be at the starting position specified in the event, for continuity, the actor will first move towards the first point before following the path. 

### Actors Move and Collisions

Actors are not restricted by collisions put into the map. Collisions are only to restrict the player movement. This means while an actor is following their path, they will move right over collisions. 

### Depth Sort Handling

If actors move over map objects, they depth sorting will be automatically calculated based on their position. The object or actor is above when they are lower in the map. You can adjust the depth sorting origin for you map object.


![](../../../assets/images/dse.png)
*Example: When player is lower than map object*

![](../../../assets/images/dse2.png)
*Example: When player is higher than map object*
