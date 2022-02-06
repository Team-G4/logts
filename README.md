# log.ts

An implementation of [MicroLogger](https://gitlab.com/tesseractge/MicroLogger) in Typescript that can be ran in Node.js or Deno'

### For anyone looking at this project on GitHub, it is an unmonitored mirror. The real project is hosted on [GitLab](https://gitlab.com/gfour/logts)

## Demo

[![asciicast](https://asciinema.org/a/466918.svg)](https://asciinema.org/a/466918)

## Authors

- [Quinn Lane (@Identithree)](https://www.gitlab.com/Identithree)

## Contributing

Contributions are always welcome!

See [our contribution guide](CONTRIBUTING.md) for ways to get started.
Also, please make sure that you are adhering to this project's [code of conduct](CODE_OF_CONDUCT.md).

## License

log.ts, along with MicroLogger, is licensed under the [BSD 3-Clause License](LICENSE).
If you are not a legal expert, [TL;DRLegal](https://tldrlegal.com/license/bsd-3-clause-license-(revised)) has a great explaination of the license.

## Installation

We provide installations for both Node.js and Deno

### Node.js

All major package managers (NPM, Yarn 1 and 2, and PNPM) are supported by us

#### NPM

1. Add project repository to `.npmrc`

```text
@gfour:registry=https://gitlab.com/api/v4/packages/npm/
```

2. Install library

```bash
npm i @gfour/logts
```

#### Yarn 1.x (Classic)

1. Add project repository to `.yarnrc`

```text
"@guided-explorations:registry" "https://gitlab.com/api/v4/packages/npm/"
```

2. Install library

```bash
yarn add @gfour/logts
```

#### Yarn 2.x (Berry)

1. Add project repository to `.yarnrc.yml`
```yml
npmScopes:
  gfour:
    npmRegistryServer: "https://gitlab.com/api/v4/packages/npm/"
```

2. Install library
```bash
yarn add @gfour/logts
```

#### PNPM

1. Add project repository to `.npmrc`

```text
@gfour:registry=https://gitlab.com/api/v4/packages/npm/
```

2. Install library

```bash
pnpm i @gfour/logts
```

### Deno

Coming soon! Check back later

## Build Locally

Clone the project and enter the folder

```bash
git clone https://gitlab.com/gfour/logts.git
cd logts
```

Install dependencies

```bash
yarn install
```

Build the library

```bash
yarn run build
```

## Usage/Examples

```javascript
import { log, loggerLevel } from '@gfour/logts'

log(loggerLevel.OK, "This is a log entry with the severity level 'OK'")
log(loggerLevel.INFO, "This is a log entry with the severity level 'INFO'")
log(loggerLevel.EXTENSION, "This is a log entry with the severity level 'EXTENSION'")
log(loggerLevel.DEBUG, "This is a log entry with the severity level 'DEBUG'")
log(loggerLevel.WARN, "This is a log entry with the severity level 'WARN'")
log(loggerLevel.FAILED, "This is a log entry with the severity level 'FAILED'")
log(loggerLevel.FATAL, "This is a log entry with the severity level 'FATAL'")
```

## Documentation

You can find more detailed information on our [documentation](https://gitlab.com/gfour/logts/-/wikis/home) (coming soon).

## Support

For support, email [our service desk](mailto:contact-project+gfour-logts-33359583-issue-@incoming.gitlab.com?subject=%E2%9D%93%20Support%20-%20log.ts) or submit an issue on our [issue tracker](https://gitlab.com/gfour/logts/-/issues).
Both will funnel into the issue tracker.

## Changelog

For every version, we publish detailed changelogs. You can view them [here](CHANGELOG.md).
