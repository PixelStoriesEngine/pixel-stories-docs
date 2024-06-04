---
title: Example Guide

description: A guide in my new Starlight docs site.
---

talk about events and event groups in detail

previous notes:
How events work: our initial events will run once, when player first enters the map.

How group events work: a group of events is a chain of events bundled together. When a group of events are run, they occur sequentially. Group events are added to the map, and they can be run by interact, touch, or immediately run. (More on group events)

- Explain how group events run when there are several

facts

- events are how we control what happens in your game.
- maps run an initial set of events
- within these events, an "add event group" event can be added
  - using that event, triggers for the event group can be configured
- event groups are composed of events as well

- bold point: events only play while the player is in the map
- each event is scoped to the map, meaning events cannot change things outside of the map they're in. (unlike variables, which are globally scoped. meaning all maps share the same variables)

- table of current events:
  - dialog
  - timer
  - spawn actor
  - etc...
- have a 2 column table of event name and what they do
