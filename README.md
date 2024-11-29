# deno-ts-boilerplate

Developer Ready: A comprehensive template. Works out of the box for most [Deno](https://deno.com) projects.

Instant Value: All basic tools included and configured:

- [TypeScript](https://www.typescriptlang.org/).
- [Deno Lint](https://docs.deno.com/runtime/fundamentals/linting_and_formatting/) with some initial rules' recommendation.
- [Deno Test](https://docs.deno.com/runtime/fundamentals/testing/) for fast unit testing and code coverage.
- [Deno Format](https://docs.deno.com/runtime/fundamentals/testing/) to enforce consistent code style.
- Deno [scripts](#available-scripts) for common operations.
- `.editorconfig` for consistent file format.
- Simple example of TypeScript code and unit test.
- Use all ES6 features *(including experimental and proposal)*.
- Minimal `.env` files for environment customization.
- Clean imports: No relative files path.
- Zero dependencies: Install your own packages.
- `Deno Cron` as a task schedular
- `PM2` as a process manager

🤲 Free as in speech: available under the APLv2 license.

## Getting Started

This project is intended to be used with the latest Active LTS release of [Deno](https://docs.deno.com/runtime/fundamentals/stability_and_releases/).

If you don't have Deno 2+, Check installation guide [here](https://docs.deno.com/runtime/getting_started/installation/).

### Use as a repository template

To start,
1. Install PM2 process manager globally: `deno install --global npm:pm2`
2. Clone this repository.
3. Copy `.env.sample` to `.env`.
4. Install dependencies by `deno install`.
5. Start adding your code in the `src` and unit tests in the `__tests__` directories.

### Clone repository

To clone the repository, use the following commands:

```sh
git clone https://github.com/jiifw/deno-ts-boilerplate
cd deno-ts-boilerplate
deno install
```

### Download latest release

Download and unzip the current **main** branch or one of the tags:

```sh
wget https://github.com/jiifw/deno-ts-boilerplate/archive/main.zip -O deno-ts-boilerplate.zip
unzip deno-ts-boilerplate.zip && rm deno-ts-boilerplate.zip
```

## Available Scripts

- `start` - serve built project.
- `start:dev` - interactive watch mode to automatically transpile source files.
- `start:debug` - interactive watch mode with debugger to automatically transpile source files.
- `cron` - starts the experimental cron scheduler
- `clean` - remove coverage data, Jest cache, transpiled files and runtime files.
- `lint` - lint source files and tests.
- `fromat` - reformat files.
- `test` - run tests.
- `test:watch` - interactive watch mode to automatically re-run tests.
- `pm2:start` - [PM2](https://pm2.keymetrics.io/) specific start service(s).
- `pm2:stop` - [PM2](https://pm2.keymetrics.io/) specific stop service(s).
- `pm2:delete` - [PM2](https://pm2.keymetrics.io/) specific delete service(s).

## License

Licensed under the APLv2. See the [LICENSE](https://github.com/jiifw/deno-ts-boilerplate/blob/main/LICENSE) file for details.
