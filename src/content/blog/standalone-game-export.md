---
title: Standalone Game Web Export
date: 2025-03-27
excerpt: Export games to web platforms with standalone games. New comprehensive development history in the changelog.
author: Truman
cover:
  image: ../../assets/images/web-export-standalone-builds.png
  alt: Screenshot showcasing the new web export and standalone build features
tags:
  - ENGINE UPDATE
---

# Standalone Game Web Export

Previously, you could only share your game via a Pixel Stories link. While this is convenient, those that play your game need an internet connection to play your game. Not to mention, in the very unlikely event that Pixel Stories went down due to some catastrophic failure, your games would also go down! To fix those things, we added standalone game exports to web.

You can now export your games directly to HTML, CSS, and JavaScript, making them playable in any modern web browser as long as it's served with a web browser. So now, your game is no longer dependant on an internet connection or to the Pixel Stories website.

## Changelog with Development History

With this standalone game export, we realized that we need to provide a good sense of versioning for your games. When you export a game, it will export with the latest version of the game container, which is the engine which runs your game. Right now there is only one release of the game container, so all exports will come with that. In the future, we will add an export release selector so you have that granular control over your game exports!

You can find [the changelog here](https://pixelstories.io/changelog/).

### Changelog

**Added**

- [Editor] Export games to web platforms using HTML, CSS, and JavaScript.
- [Misc] Support for creating standalone game builds.
- [Changelog] Comprehensive development history of the Pixel Stories Engine.
