/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class YTResultsElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }

  static get properties() {
    return {
      jsonData: {type: Object},
    };
  }

  constructor() {
    super();
    this.jsonData = null;
  }

  render() {
    const itemTemplates = [];
    if (this.jsonData != null) {
      for (const i of this.jsonData.items) {
        itemTemplates.push(html`<li><a href="https://www.youtube.com/watch?v=${i.id.videoId}" 
                      target="_blank" rel="noopener noreferrer">${i.snippet.title}</a></li>`);
      }
    }
    return html` <ul> ${itemTemplates} </ul> `;
  }
}

window.customElements.define('yt-results', YTResultsElement);
