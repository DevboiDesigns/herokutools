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

## Environment Variables Documentation

`herokutools` uses environment variables to manage configurations for different Heroku apps. These environment variables allow you to set default values that the tool will use when no specific options are provided.

**Available Environment Variables**

- `HEROKU_TOOL_APP_1`: The default Heroku app name used when no options are provided.
- `HEROKU_TOOL_APP_2`: The Heroku app name used when -i 2 is specified.
- `HEROKU_TOOL_APP_3`: The Heroku app name used when -i 3 is specified.

**Setting Environment Variables**

You can set these environment variables in your shell configuration file (e.g., `.bashrc`, `.zshrc`, `.bash_profile`, etc.) or directly in your terminal session.

**<sup>Example: Setting Environment Variables in `.bashrc` or `.zshrc`</sup>**

```sh
export HEROKU_TOOL_APP_1=my-default-app
export HEROKU_TOOL_APP_2=my-second-app
export HEROKU_TOOL_APP_3=my-third-app
```

After adding these lines, reload your shell configuration:

```sh
source ~/.bashrc  # or source ~/.zshrc
```

**<sup>Example: Setting Environment Variables in the Terminal</sup>**

```sh
export HEROKU_TOOL_APP_1=my-default-app
export HEROKU_TOOL_APP_2=my-second-app
export HEROKU_TOOL_APP_3=my-third-app
```

**Using Environment Variables in `herokutools`**

When you run commands with `herokutools`, it will use the environment variables you have set to determine the default Heroku app names.

**<sup>Example: Fetching Logs with `hl`</sup>**

If you have set `HEROKU_TOOL_APP_1` to `my-default-app`, running the `hl` command without any options will fetch logs for `my-default-app`:

```sh
hl
```

To fetch logs for the app set in `HEROKU_TOOL_APP_2`, use the `-i` option:

```sh
hl -i 2
```

**<sup>Example: Scaling and Restarting Dynos with `hd`</sup>**

To scale the dynos for the default app (stored in `HEROKU_TOOL_APP_1`) to 2:

```sh
hd web 2
```

To restart the dynos for the default app:

```sh
hd -r
```

<!-- **<sup>Example: Managing Environment Variables with `he`</sup>**

To get the value of an environment variable for the default app:

```sh
he -g MY_VAR
```

To set the value of an environment variable for the default app:

```sh
he -s MY_VAR my_value
```

To remove an environment variable for the default app:

```sh
he -r MY_VAR
```

To list all environment variables for the default app:

```sh
he -l
``` -->

**Notes**

- Ensure that the environment variables `HEROKU_TOOL_APP_1`, `HEROKU_TOOL_APP_2`, and `HEROKU_TOOL_APP_3` are set in your environment to use the index options effectively.
- The commands use the Heroku CLI internally to manage the apps, so make sure you have the Heroku CLI installed and authenticated.

<!-- ## Coming Soon

### Heroku Scale and Reset Dynos Command

We are working on adding a command to scale and reset your Heroku dynos. This will allow you to easily manage the number of dynos running for your application and reset them when needed.

### Heroku Set Environment Variables Command

Another upcoming feature is the ability to set environment variables for your Heroku apps directly from the CLI. This will simplify the process of managing your app's configuration and ensure that your environment variables are always up to date.

Stay tuned for these exciting new features! -->

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

## `he` Command Documentation

![BETA](https://img.shields.io/badge/BETA-8A2BE2)

The `he` command is a CLI wrapper for managing environment variables for your Heroku apps. It provides an easy way to get, set, and remove environment variables.

### Usage

```sh
he [options] [key] [value]
```

### Options

- `-a, --app [app name]`: The Heroku app name. If not provided, it defaults to the saved app name based on the index.
- `-s, --set [key] [value]`: Set the value of an environment variable.
- `-r, --remove [key`]: Remove an environment variable.

### Examples

#### Get Environment Variable

To get all environment variables for a specific app:

```sh
he -a my-heroku-app -g
```

To get the value of an environment variable for the default app (stored in HEROKU_TOOL_APP_1):

```sh
he
```

#### Set Environment Variable

To set the value of an environment variable for a specific app:

```sh
he -a my-heroku-app MY_VAR=my_value
```

To set the value of an environment variable for the default app (stored in HEROKU_TOOL_APP_1):

```sh
he MY_VAR=my_value
```

#### Remove Environment Variable

To remove an environment variable for a specific app:

```sh
he -a my-heroku-app -r MY_VAR
```

To remove an environment variable for the default app (stored in HEROKU_TOOL_APP_1):

```sh
he -r MY_VAR
```

## `htr` Command Documentation

![BETA](https://img.shields.io/badge/BETA-8A2BE2)

The `he` command is a CLI wrapper for transferring a heroku app to a different user.

### Usage

```sh
he [options] [key] [value]
```

### Options

- `-a, --app [app name]`: The Heroku app name. If not provided, it defaults to the saved app name based on the index.
- `-e, --email <email>`: Get the value of an environment variable.

## Notes

- Ensure that the environment variables `HEROKU_TOOL_APP_1`, `HEROKU_TOOL_APP_2`, and `HEROKU_TOOL_APP_3` are set in your environment to use the index options effectively.
- The command uses the `heroku logs -a <app_name> --tail` command internally to fetch and display the logs in real-time.

## First Stable Version

We are excited to announce that the first stable version of `herokutools` will be `1.0.0`. This release will include all the core features, including fetching logs, scaling and restarting dynos, and setting environment variables for your Heroku apps.

Stay tuned for the release, and thank you for your support and feedback during the beta phase!

For more information, refer to the [source code](https://github.com/DevboiDesigns/herokutools).

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/devboidesigns/herokutools)

<sup>Inspiration by: [ctsrc](https://github.com/ctsrc) and his [repotools](https://crates.io/crates/repotools)</sup>

## Star on GitHub 🤩

If you like this tool please take a moment to
[star this project on GitHub](https://github.com/devboidesigns/herokutools#start-of-content).

[![GitHub stars](https://img.shields.io/github/stars/devboidesigns/herokutools?style=social)](https://github.com/devboidesigns/herokutools#start-of-content)
