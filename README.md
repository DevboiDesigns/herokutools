# Heroku Tools

**A CLI Wrapper for Everyday Commands**

[![NPM Downloads](https://img.shields.io/npm/v/:herokutools)](https://www.npmjs.com/package/herokutools)
[![NPM Downloads](https://img.shields.io/npm/dw/:herokutools)](https://www.npmjs.com/package/herokutools)
[![NPM License](https://img.shields.io/npm/l/:herokutools)](LICENSE)
[![Stars](https://img.shields.io/github/stars/devboidesigns/herokutools)](https://github.com/DevboiDesigns/herokutools)

`herokutools` is a command-line interface (CLI) wrapper designed to simplify and streamline the process of interacting with your Heroku app. This tool provides a set of easy-to-use commands that help you interact with your Heroku apps more efficiently.

- [HerokuCLI](https://devcenter.heroku.com/articles/heroku-cli-commands)

## Features

- Fetch logs for your Heroku apps with a single command.
- Support for multiple Heroku apps through environment variables.
- Easy setup and installation.
- Built with TypeScript and Commander.js for robust and type-safe command handling.

## Prerequisites

Before using `herokutools`, ensure that you have the following:

- A Heroku account. If you don't have one, you can sign up at [Heroku](https://signup.heroku.com/).
- At least one Heroku app. You can create a new app using the Heroku Dashboard or the Heroku CLI.

Without a Heroku account and app, you will not be able to use the features provided by this tool.

## Install

- Install the package globally:

```sh
npm i -g herokutools
```

## Coming Soon

### Heroku Scale and Reset Dynos Command

We are working on adding a command to scale and reset your Heroku dynos. This will allow you to easily manage the number of dynos running for your application and reset them when needed.

### Heroku Set Environment Variables Command

Another upcoming feature is the ability to set environment variables for your Heroku apps directly from the CLI. This will simplify the process of managing your app's configuration and ensure that your environment variables are always up to date.

Stay tuned for these exciting new features!

# Commands

## `hl` Command Documentation

![BETA](https://img.shields.io/badge/BETA-8A2BE2)

The `hl` command is a CLI wrapper for fetching logs from your Heroku apps. It provides an easy way to view logs for your Heroku applications.

### Usage

```sh
hl [options]
```

### Options

- `-i, --index [index]`: Index of the app to log. Valid values are `1`, `2`, or `3`. If no index is provided, it defaults to the app name stored in `process.env.HEROKU_TOOL_APP_1`.
- `-a, --app [app name]`: Logs for your Heroku app. If not provided, it defaults to the saved app name based on the index.

### Examples

#### Default Usage

If no options are passed, the command will fetch logs for the app name stored in `process.env.HEROKU_TOOL_APP_1`.

```sh
hl
```

#### Using Index

To fetch logs for the app name stored in `process.env.HEROKU_TOOL_APP_2`:

```sh
hl -i 2
```

#### Using App Name

To fetch logs for a specific app name:

```sh
hl -a my-heroku-app
```

### Environment Variables

- `HEROKU_TOOL_APP_1`: The default Heroku app name used when no options are provided.
- `HEROKU_TOOL_APP_2`: The Heroku app name used when `-i 2` is specified.
- `HEROKU_TOOL_APP_3`: The Heroku app name used when `-i 3` is specified.

## `hd` Command Documentation

![BETA](https://img.shields.io/badge/BETA-8A2BE2)

The `hd` command is a CLI wrapper for scaling and restarting dynos for your Heroku apps. It provides an easy way to manage the number of dynos running for your application and reset them when needed.

### Usage

```sh
hd [options] [dyno] [quantity]
```

### Options

- `-a, --app [app name]`: The Heroku app name. If not provided, it defaults to the saved app name based on the index.
- `-r, --restart`: Restart the dynos for the specified app.

### Examples

## Scale Dynos

To scale the dynos for a specific app to 3:

```sh
hd -a my-heroku-app web 3
```

To scale the dynos for the default app (stored in `HEROKU_TOOL_APP_1`) to 2:

```sh
hd web 2
```

## Restart Dynos

To restart the dynos for a specific app:

```sh
hd -a my-heroku-app -r
```

To restart the dynos for the default app (stored in `HEROKU_TOOL_APP_1`):

```sh
hd -r
```

### Environment Variables

- `HEROKU_TOOL_APP_1`: The default Heroku app name used when no options are provided.
- `HEROKU_TOOL_APP_2`: The Heroku app name used when -i 2 is specified.
- `HEROKU_TOOL_APP_3`: The Heroku app name used when -i 3 is specified.

#### Notes

- Ensure that the environment variables `HEROKU_TOOL_APP_1`, `HEROKU_TOOL_APP_2`, and `HEROKU_TOOL_APP_3` are set in your environment to use the index options effectively.
- The command uses the `heroku logs -a <app_name> --tail` command internally to fetch and display the logs in real-time.

For more information, refer to the [source code](https://github.com/DevboiDesigns/herokutools).

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/devboidesigns/herokutools)

<sup>Inspiration by: [ctsrc](https://github.com/ctsrc) and his [repotools](https://crates.io/crates/repotools)</sup>

## Star on GitHub 🤩

If you like this tool please take a moment to
[star this project on GitHub](https://github.com/devboidesigns/herokutools#start-of-content).

[![GitHub stars](https://img.shields.io/github/stars/devboidesigns/herokutools?style=social)](https://github.com/devboidesigns/herokutools#start-of-content)
