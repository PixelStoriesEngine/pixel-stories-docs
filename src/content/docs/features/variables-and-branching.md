---
title: Variables and Branching
description: Manage game progression with variables and conditionals
---

Manage your game progression and add unique interactions with variables and conditional branching.

## Why Do You Need Variables?

Variables in Pixel Stories make the game interactive and dynamic. They allow the game to progress based on the player's actions, making their choices matter. This means the story can have multiple endings, different events, and unique puzzles which depend on what the player does.

### Examples For Variables and Branching

Some use cases for variables and branching include:

- Different dialog plays based on whether the player has interacted with an object.
- Requiring the player to collect three specific items to proceed.
- Completely changing the narrative based on the player's actions.

## How variables work

Here's how variables work in Pixel Stories.

### Creating Variables

Variables are created at `Game assets > Variables`. The variables in Pixel Stories globally scoped, meaning they are available throughout the entire game.

Note: Ensure that variables have a distinct name that describes their purpose. It can be easy to lose track of your variables!

### Variable Types

Variables can take on 3 types: switch (true/false), text, number. Once the variable is created, the type cannot be changed.

### Setting Variables In Game

The `Set variable event` is used to set the value of the variables in the game. When the event plays, the variable will be set to a value you specified.

## Conditional Branching

Variables on their own can't do anything without adding conditional branching. Conditional branching allows you to play a sequence of events based on a condition.

Conditions take a variable and check whether it equals a specified value or other variable. If the condition is true, i.e. the variable does indeed equal the value, then the events in this condition will play.
