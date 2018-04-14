# Scurry

Modern IRC client built in Electron and React. Designed by a rat for rats to perform rat-like activities.

## Installation

⚠️ Scurry is still in early development ⚠️

A release for public use is not yet available. If you wish to test Scurry, feel free to follow the development setup below.

## Development Setup

⚡️ [`yarn`](https://yarnpkg.com/en/) is highly recommended. `npm` will work, too. ⚡️

1. Clone: `git clone https://github.com/UncleClapton/scurry-irc.git`.
2. Install dependencies: `yarn install`.
3. Optionally perform first webpack build: `yarn run build:webpack`.
4. Start the dev environment: `yarn run dev`.
    * You may need to refresh the electron window after `webpack-dev-server` has started.

## Planned features

* Full emoji support
* Extensions
* Custom commands/macros
* Full featured chat formatting and highlighting controls
* Smart logging and scrollback
  * Channel chat history scrollback parses logs to display beyond whats currently visible.
  * Message starring for easy lookup of important messages.
  * ... and more (details coming soon)
* Colors and Themes
  * By way of both custom CSS and color options.

## Planned Official Extensions

* Fuel Rats rescue ops integration plugin
  * Will require drilled rat account.
  * No clue what this means? You probably don't need it :D
* Twitch Emote extension
  * Replaces twitch global emote keywords with their proper emotes.
* IRCOps helper panel.
