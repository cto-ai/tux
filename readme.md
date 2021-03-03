# @cto.ai/tux

> CTO.ai Terminal User Experience Library

## Status - WIP

## API

This is a native ESM module.

### `spinner`

[ora](https://npm.im/ora) spinner instance.

### `render(message)`

Render a message using [chalk templates](https://www.npmjs.com/package/chalk#tagged-template-literal).

### `theme(mode)`

Change the color theme, possible modes are `dark` and `light`.

## Engines

* Node 12.4+
* Node 14.0+

## Development

Test:

```sh
npm test
```

Visual coverage report (run after test):

```sh
npm run cov
```

Lint:

```sh
npm run lint
```

Autoformat:

```sh
npm run lint -- --fix
```

## Releasing

For mainline releases:

```sh
npm version <major|minor|patch>
git push --follow-tags
```

For prereleases:

```sh
npm version prerelease
git push --follow-tags
```

### License

MIT
