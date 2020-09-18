import {
  removeAllWhiteSpace,
  removeUnnecessaryLitAdditionalString,
} from '../__test__/__utils__/component-matcher-helper';

beforeAll(async () => {
  await page.goto(URL, { waitUntil: 'domcontentloaded' });
});

describe('Test title and header of the homepage', () => {
  it('Title of the page', async () => {
    const title = await page.title();
    expect(title).toBe('Front-End Web Starter Pack');
  });

  it('Header of the page', async () => {
    const appElement = await page.$('app-element');
    const html = removeUnnecessaryLitAdditionalString(await page.evaluate(
      (element) => element.shadowRoot.innerHTML, appElement,
    ));

    expect(removeAllWhiteSpace(html)).toBe(removeAllWhiteSpace(`
          <div class="app">
              <h1>Hello</h1>
          </div>
    `));
  });
});
