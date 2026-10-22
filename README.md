# CvRenderer

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Generating the plain-text CV reference (`<lang>.data.md`)

[scripts/generate-cv-md.ts](scripts/generate-cv-md.ts) turns a mock file (`src/assets/cv-data/<lang>.mock.ts`) into a plain-text Markdown mirror (`<lang>.data.md`, no `<b>`/`<i>` tags) for copy-pasting into application forms. Blocks shared by several roles (contact, freelance experience, education, languages, courses...) are written once under "Common Data" and only referenced from each role.

There is no npm script and no TS runner in `devDependencies`, so run it with `tsx` via `npx`, passing the language (it overwrites `<lang>.data.md`):

```bash
npx tsx scripts/generate-cv-md.ts de-DE   # or en-EN, es-ES
```

Output is written next to the mock file, e.g. `src/assets/cv-data/de-DE.data.md`. Re-run it after editing a mock file. Every exported role (`CvData`) in the mock is included, in file order.

The mock is evaluated with the real `src/environments/environment.ts`, so the default environment determines which conditional values end up in the output. Blocks are deduplicated by value, so roles built with `{...seniorfrontend, ...}` share what they inherit. `en-EN.data.md` and `es-ES.data.md` in the repo are hand-edited versions; regenerating them overwrites that work.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
