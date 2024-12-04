# Heroku Tools - CLI Wrapper for Everyday Commands

`herokutools` is a command-line interface (CLI) wrapper designed to simplify and streamline the process of managing and fetching logs from your Heroku applications. This tool provides a set of easy-to-use commands that help you interact with your Heroku apps more efficiently.

## Features

- Fetch logs for your Heroku apps with a single command.
- Support for multiple Heroku apps through environment variables.
- Easy setup and installation.
- Built with TypeScript and Commander.js for robust and type-safe command handling.

## Installation

1.  Build the project:

```sh
  npm run build
```

2. Link the package globally:

```sh
sudo npm link
```

## Setup

- Build the project:

```sh
npm run build
```

- Install the package globally:

```sh
npm install -g .
```

# `hl` Command Documentation

The `hl` command is a CLI wrapper for fetching logs from your Heroku apps. It provides an easy way to view logs for your Heroku applications.

## Usage

```sh
hl [options]
```

## Options

- `-i, --index [index]`: Index of the app to log. Valid values are `1`, `2`, or `3`. If no index is provided, it defaults to the app name stored in `process.env.HCI_APP_1`.
- `-a, --app [app name]`: Logs for your Heroku app. If not provided, it defaults to the saved app name based on the index.

## Examples

### Default Usage

If no options are passed, the command will fetch logs for the app name stored in `process.env.HCI_APP_1`.

```sh
hl
```

### Using Index

To fetch logs for the app name stored in `process.env.HCI_APP_2`:

```sh
hl -i 2
```

### Using App Name

To fetch logs for a specific app name:

```sh
hl -a my-heroku-app
```

## Environment Variables

- `HCI_APP_1`: The default Heroku app name used when no options are provided.
- `HCI_APP_2`: The Heroku app name used when `-i 2` is specified.
- `HCI_APP_3`: The Heroku app name used when `-i 3` is specified.

### Notes

- Ensure that the environment variables `HCI_APP_1`, `HCI_APP_2`, and `HCI_APP_3` are set in your environment to use the index options effectively.
- The command uses the `heroku logs -a <app_name> --tail` command internally to fetch and display the logs in real-time.

For more information, refer to the [source code]().

<sup>[Thanks 🙏](https://blog.logrocket.com/building-typescript-cli-node-js-commander/)</sub>

<sup>Inspiration by: [ctsrc](https://github.com/ctsrc) and his [repotools](https://crates.io/crates/repotools)</sup>
