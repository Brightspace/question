import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import './d2l-quiz-question-hint.js';
import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier1-icons.js';
import 'd2l-button/d2l-button-icon.js';
import '../localize-behavior.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
class D2LQuizQuestionWrittenResponse extends mixinBehaviors(D2L.PolymerBehaviors.D2LQuestion.LocalizeBehavior, PolymerElement) {
	static get template() {
		return html`
		<style>
			:host {
				display: block;
			}

			#d2l-quiz-question {
				max-width: var(--d2l-quiz-question-written-response-max-width-in-px, 500px);
				width: var(--d2l-quiz-question-written-response-max-width-in-px, 500px);
			}

			#d2l-quiz-question-body {
				margin-bottom: 1rem;
			}			

			#editor-container {
				display: inline-block;
			}

			#d2l-quiz-question-hint {
				margin: 1rem 0 0 0;
			}
		
			.spell-check {
				display: inline-block;
				margin-left: 0.5rem;
			}

			.html-editor {
				border: 0px;				
			}

			.text-area {
				background-color: #fff;
				border-radius: 0.3rem;
				border-style: solid;
				border-color: #d3d9e3;
				border-width: 1px;
				box-sizing: border-box;
				box-shadow: inset 0 2px 0 0 rgba(185, 194, 208, 0.2);
				display: inline-block;
				min-width: calc(2rem + 1em);
				vertical-align: middle;
				transition-duration: 0.5s;
				transition-timing-function: ease;
				transition-property: background-color, border-color;
				color: #565a5c;
				font-family: inherit;
				font-size: 0.8rem;
				font-weight: 400;
				letter-spacing: 0.02rem;
				line-height: 1.2rem;
				outline-width: 0;
				padding: 0.4rem 0.75rem	
			}

			.text-area:hover, .text-area:focus {
				border-color: #006fbf;
				border-width: 2px;
				outline-width: 0;
				padding: calc(0.4rem - 1px) calc(0.75rem - 1px);
			}
		</style>

		<div id="d2l-quiz-question">
			<div id="d2l-quiz-question-body" inner-h-t-m-l="[[questionData.bodyText]]" tabindex="0"></div>		
			<div id="editor-container"></div>
			<template is="dom-if" if="[[__isTextEditor(configData.htmlEditorUrl)]]">
				<d2l-button-icon icon="d2l-tier1:spellcheck" class="spell-check" text="[[localize('spell_check')]]"></d2l-button-icon>
			</template>
			<template is="dom-if" if="[[questionData.hint]]">
				<d2l-quiz-question-hint hint="[[questionData.hint]]"></d2l-quiz-question-hint>
			</template>
		</div>
`;
	}

	static get is() {
		return 'd2l-quiz-question-written-response';
	}

	static get properties() {
		return {
			questionData: {
				type: Object,
				readOnly: false
				//value: () => { return {'bodyText':'I am a test question', 'hint':'this is a hint', 'answer':null}}
			},

			configData: {
				type: Object,
				readOnly: false,
				observer: '_config'
				//value: () => { return {'htmlEditorUrl':null, 'rows':1, 'cols':100}}
			}
		};
	}

	constructor() {
		super();
	}

	_config() {
		const maxWidth = parseInt(getComputedStyle(this).getPropertyValue('--d2l-quiz-question-written-response-max-width-in-px'));
		if (this.configData.htmlEditorUrl) {
			const editorWidth = +this.__getParameterByName('width', this.configData.htmlEditorUrl);
			const actualWidth = editorWidth > maxWidth ? maxWidth : editorWidth;
			const editor = document.createElement('iframe');
			editor.setAttribute('scrolling', 'no');
			editor.classList.add('html-editor');
			this.shadowRoot.querySelector('#editor-container').appendChild(editor);
			editor.width = actualWidth + 2;
			editor.height = +this.__getParameterByName('height', this.configData.htmlEditorUrl) + +30;
			const url = this.configData.htmlEditorUrl.replace('width=' + editorWidth, 'width=' + actualWidth);
			editor.src = url;
		}
		else {
			const cols = this.configData.cols;
			const editorWidth = cols === 20 ? 169 : cols === 40 ? 309 : cols === 60 ? 449 : cols === 80 ? 589 : cols === 100 ? 729 : cols * 6.38;
			const actualWidth = editorWidth > maxWidth ? maxWidth : editorWidth;
			const textArea = document.createElement('textarea');
			textArea.classList.add('text-area');
			textArea.setAttribute('rows', this.configData.rows);
			textArea.style.width = (actualWidth - 55) + 'px';
			if (this.questionData.initialText) {
				textArea.value = this.questionData.initialText;
			}
			this.shadowRoot.querySelector('#editor-container').appendChild(textArea);
		}
	}

	__isTextEditor(url) {
		return url ? false : true;
	}

	__getParameterByName(name, url) {
		name = name.replace(/[[\]]/g, '\\$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
		var results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}
}

customElements.define(D2LQuizQuestionWrittenResponse.is, D2LQuizQuestionWrittenResponse);
