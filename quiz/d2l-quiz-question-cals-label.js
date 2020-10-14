import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import '../localize-behavior.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';

class D2LQuizQuestionCalsLabel extends mixinBehaviors(D2L.PolymerBehaviors.D2LQuestion.LocalizeBehavior, PolymerElement) {
	static get template() {
		return html`
		<style>
			:host {
				display: block;
			}

            .d2l-quiz-question-label{
				color: #6e7376;
				font-size: .7rem;
				font-weight: 400;
				line-height: 1rem;
				margin: auto;
			}
		</style>

		<div id='d2l-quiz-question-cals-label'>
            <div class='d2l-quiz-question-label' inner-h-t-m-l='[[label]]' tabindex='0'></div>
		</div>
`;

	}

	static get is() {
		return 'd2l-quiz-question-cals-label';
	}

	static get properties() {
		return {
			label: {
				type: String,
				readOnly: false
			}
		};
	}

	constructor() {
		super();
	}
}

customElements.define(D2LQuizQuestionCalsLabel.is, D2LQuizQuestionCalsLabel);
