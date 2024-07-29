# Examples README

## Setting up the environment

This repository uses [`yarn@v1`](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).
Other package managers may work but are not officially supported for development.

To set up the repository, run these commands from the repository's root:

```bash
yarn
yarn build
```

This will install all the required dependencies and build output files to `dist/`.

## Run the examples

```bash
node EXAMPLE_NAME.mjs
```

## `.env` file: API keys and server URLs

Copy the file `.env.example` to `.env` and edit it with your preferred API key and server URL.
