import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import '../localize-behavior.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
class D2LQuizQuestionNotSupported extends mixinBehaviors(D2L.PolymerBehaviors.D2LQuestion.LocalizeBehavior, PolymerElement) {
	static get template() {
		return html`
		<style>
			:host {
				display: block;				
			}

			#d2l-quiz-question-body {
				height: 180px;
				width: 100%;
				border-radius: 6px;
				border: dotted 2px #dce1e8;
				color: #b9c2d0;
			}

			.center {
				text-align: center;
				width: 80%;
				margin-left: auto;
				margin-right: auto;
				position: relative;
				top: 50%;
				transform: translateY(-50%);
			}
		</style>

		<div id="d2l-quiz-question">
			<div id="d2l-quiz-question-body">
				<div id="d2l-quiz-question-not-supported-message" class="center" tabindex="0">
				</div>
			</div>
		</div>
`;
	}

	static get is() {
		return 'd2l-quiz-question-not-supported';
	}

	static get properties() {
		return {
			questionType: {
				type: String,
				readOnly: false,
				observer: '__displayMessage'
				//value: ''
			}
		};
	}

	constructor() {
		super();
	}

	__displayMessage() {
		if (this.questionType) {
			this.shadowRoot.querySelector('#d2l-quiz-question-not-supported-message').textContent = this.localize('preview_not_supported', 'questionType', this.questionType);
		}
		else {
			this.shadowRoot.querySelector('#d2l-quiz-question-not-supported-message').textContent = this.localize('preview_not_supported_generic');
		}
	}
}

customElements.define(D2LQuizQuestionNotSupported.is, D2LQuizQuestionNotSupported);
