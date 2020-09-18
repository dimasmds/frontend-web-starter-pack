/**
 * @jest-environment jest-environment-jsdom-sixteen
 */

// Inject Component
import '../../src/lib/components/AppElement';

import { describe, it } from '@jest/globals';
import { fixture } from '@open-wc/testing-helpers';
import {
  removeAllWhiteSpace,
  removeUnnecessaryLitAdditionalString,
} from '../__utils__/component-matcher-helper';

describe('App Component Test', () => {
  it('should have title property with default empty string', async () => {
    const el = await fixture('<app-element></app-element>');
    expect(el._title).toEqual('');
  });

  it('should have title property with correctly value', async () => {
    const el = await fixture('<app-element _title="Hello"></app-element>');
    expect(el._title).toEqual('Hello');
  });

  it('should rendered with correctly property value', async () => {
    const el = await fixture('<app-element _title="Hello"></app-element>');
    const renderedHtml = removeUnnecessaryLitAdditionalString(el.shadowRoot.innerHTML);

    expect(removeAllWhiteSpace(renderedHtml))
      .toEqual(removeAllWhiteSpace(`
          <div class="app">
              <h1>Hello</h1>
          </div>
    `));
  });
});
