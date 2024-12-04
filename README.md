# Heroku Tools

**A CLI Wrapper for Everyday Commands**

[![NPM Downloads](https://img.shields.io/npm/v/:herokutools)](https://www.npmjs.com/package/herokutools)
[![NPM Downloads](https://img.shields.io/npm/dw/:herokutools)](https://www.npmjs.com/package/herokutools)
[![NPM License](https://img.shields.io/npm/l/:herokutools)](LICENSE)
[![Stars](https://img.shields.io/github/stars/devboidesigns/herokutools)](https://github.com/DevboiDesigns/herokutools)

`herokutools` is a command-line interface (CLI) wrapper designed to simplify and streamline the process of managing and fetching logs from your Heroku applications. This tool provides a set of easy-to-use commands that help you interact with your Heroku apps more efficiently.

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
npm i -g @devboidesigns/herokutools
```

## Coming Soon

### Heroku Scale and Reset Dynos Command

We are working on adding a command to scale and reset your Heroku dynos. This will allow you to easily manage the number of dynos running for your application and reset them when needed.

### Heroku Set Environment Variables Command

Another upcoming feature is the ability to set environment variables for your Heroku apps directly from the CLI. This will simplify the process of managing your app's configuration and ensure that your environment variables are always up to date.

Stay tuned for these exciting new features!

# Commands

## `hl` Command Documentation

The `hl` command is a CLI wrapper for fetching logs from your Heroku apps. It provides an easy way to view logs for your Heroku applications.

### Usage

```sh
hl [options]
```

### Options

- `-i, --index [index]`: Index of the app to log. Valid values are `1`, `2`, or `3`. If no index is provided, it defaults to the app name stored in `process.env.HCI_APP_1`.
- `-a, --app [app name]`: Logs for your Heroku app. If not provided, it defaults to the saved app name based on the index.

### Examples

#### Default Usage

If no options are passed, the command will fetch logs for the app name stored in `process.env.HCI_APP_1`.

```sh
hl
```

#### Using Index

To fetch logs for the app name stored in `process.env.HCI_APP_2`:

```sh
hl -i 2
```

#### Using App Name

To fetch logs for a specific app name:

```sh
hl -a my-heroku-app
```

### Environment Variables

- `HCI_APP_1`: The default Heroku app name used when no options are provided.
- `HCI_APP_2`: The Heroku app name used when `-i 2` is specified.
- `HCI_APP_3`: The Heroku app name used when `-i 3` is specified.

#### Notes

- Ensure that the environment variables `HCI_APP_1`, `HCI_APP_2`, and `HCI_APP_3` are set in your environment to use the index options effectively.
- The command uses the `heroku logs -a <app_name> --tail` command internally to fetch and display the logs in real-time.

For more information, refer to the [source code]().

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/devboidesigns/herokutools)

<sup>Inspiration by: [ctsrc](https://github.com/ctsrc) and his [repotools](https://crates.io/crates/repotools)</sup>

## Star on GitHub 🤩

If you like this tool please take a moment to
[star this project on GitHub](https://github.com/devboidesigns/herokutools#start-of-content).

[![GitHub stars](https://img.shields.io/github/stars/devboidesigns/herokutools?style=social)](https://github.com/devboidesigns/herokutools#start-of-content)
