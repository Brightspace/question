import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import './d2l-quiz-question-hint.js';
import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier1-icons.js';
import 'd2l-button/d2l-button-icon.js';
import '../localize-behavior.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
class D2LQuizQuestionFillInTheBlank extends mixinBehaviors(D2L.PolymerBehaviors.D2LQuestion.LocalizeBehavior, PolymerElement) {
	static get template() {
		return html`
		<style>
			:host {
				display: block;
			}

			#d2l-quiz-question {
				max-width: var(--d2l-quiz-question-fill-in-the-blank-max-width-in-px, 500px);
				width: var(--d2l-quiz-question-fill-in-the-blank-max-width-in-px, 500px);
			}

			#d2l-quiz-question-hint {
				margin: 1rem 0 0 0;
			}

			p {
				margin-top: 0;
			}

			.text-group {
				display: inline-block;
			}

			:host-context([dir='rtl']) .text-group {
				display: inline-block;
				margin-right: 0.5rem;
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
				margin: 0.3rem 0 0.3rem 0.5rem;
				padding: 0.4rem 0.75rem;
				overflow: hidden;
			}

			.text-area:hover, .text-area:focus {
				border-color: #006fbf;
				border-width: 2px;
				outline-width: 0;
				padding: calc(0.4rem - 1px) calc(0.75rem - 1px);
			}

			.spell-check {
				margin-right: 0.3rem;
			}

			.hint-spacing {
				margin-top: 0.5rem;
			}

		</style>

		<div id="d2l-quiz-question">
			<div>
				<slot></slot>
				<template is="dom-repeat" items="[[questionData.body]]">
					<template is="dom-if" if="[[__isEqualTo(item.type, 'text')]]">
						<span inner-h-t-m-l="[[item.value]]"></span>
					</template>
					<template is="dom-if" if="[[__isEqualTo(item.type, 'blank')]]">
						<div class="text-group">
							<textarea class="text-area" rows="1" style$="width:[[__convertColsToPx(item.cols)]];"></textarea>
							<d2l-button-icon icon="d2l-tier1:spellcheck" class="spell-check" text="[[localize('spell_check')]]"></d2l-button-icon>
						</div>
					</template>
				</template>
			</div>
			<template is="dom-if" if="[[questionData.hint]]">
				<d2l-quiz-question-hint class="hint-spacing" hint="[[questionData.hint]]"></d2l-quiz-question-hint>
			</template>
		</div>
`;
	}

	static get is() {
		return 'd2l-quiz-question-fill-in-the-blank';
	}

	static get properties() {
		return {
			questionData: {
				type: Object,
				readOnly: false
				//value: () => { return {"body":[{"type":"text","value":"This is some text"},{"type":"blank", "cols":20},{"type":"text","value":"and some middle text"},{"type":"blank","cols":30},{"type":"text","value":"and this is the end."}], "hint":"this is a hint"}}
			}
		};
	}

	constructor() {
		super();
	}

	__isEqualTo(a, b) {
		return a === b;
	}

	__convertColsToPx(cols) {
		const maxWidth = parseInt(getComputedStyle(this).getPropertyValue('--d2l-quiz-question-fill-in-the-blank-max-width-in-px'));
		const desiredWidth = cols === 20 ? 169 : cols === 40 ? 309 : cols === 60 ? 449 : cols * 6.38;
		const actualWidth = (desiredWidth + 60 > maxWidth ? maxWidth - 60 : desiredWidth) + 'px';
		return actualWidth;
	}
}

customElements.define(D2LQuizQuestionFillInTheBlank.is, D2LQuizQuestionFillInTheBlank);
