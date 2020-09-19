# Front-End Web Starter Pack
This is my bootstrap for building modern web applications. Formulated purely based on personal needs. But if it suits you, feel free to use it.

In this project I minimized the use of frameworks, either CSS or JavaScript. But I use many tools to make development easier. Here are the details.

## Tools Stack
- **Module Bundler**: I use webpack 4 for bundling a module. I used some extra loader and plugin to supports  SCSS, TypeScript, and Progressive Web Apps.
- **UI Components**: I like Web Component, especially because it is a native API. So I decided to include `LitElement`.
- **Testing**: I use Jest for testing framework. I've integrated Jest with Puppeteer so that it can be used to test the front end. I also used `@open-wc/testing` and `jest-environment-jsdom-sixteen` to help test Web Component.
- **Linting**: My code style based on AirBnB style. I use ESLint for linting.

## How to Use
To use this starter pack is quite easy. Download or Clone this repository. Then run the command `npm run install`. Start coding!

## How to Run
- `npm run start-dev` for running a project in development mode.
- `npm run start-dev-sw` same as above, but with Service Worker (work offline capability).
- `npm run build-local` building a project in production mode with BundleWebpackAnalyzer.
- `npm run build` build a project in production mode with test validation.
- `npm run test` running test.

## Notes
- Use js instead of ts for creating Web Components. Because it will cause an error. For now, I don't have an idea how to solve this problem. I really appreciate it if you would like to try to fix this.


