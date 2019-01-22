import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier1-icons.js';
import '../localize-behavior.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
class D2LQuizQuestionHint extends mixinBehaviors(D2L.PolymerBehaviors.D2LQuestion.LocalizeBehavior, PolymerElement) {
	static get template() {
		return html`
		<style>
			:host {
				display: block;
			}

			.toggle-hint-link {
				text-decoration: none;
			}
			
			.toggle-hint-link:hover .toggle-hint-button, .toggle-hint-link:focus .toggle-hint-button {
				border-color: #b9c2d0;
			}

			.toggle-hint-button {
				align-items: center;
				border: 1px solid transparent;
				border-radius: 0.3rem;	
				display: inline-flex;
				justify-content: center;
				margin-right: 5px;
				padding: 0.3rem;
				vertical-align: middle;
			}

			.toggle-hint-text {
				color: #005694;
			}

			.hidden{
				display: none;
			}
		</style>

		<div id="d2l-quiz-question-hint">
			<div>
				<a id="toggle-on-hint-link" href="javascript://" class="toggle-hint-link" on-click="__toggle">
					<span class="toggle-hint-button">
						<d2l-icon icon="d2l-tier1:arrow-expand"></d2l-icon>
					</span>
					<span class="toggle-hint-text">
						[[localize('view_hint')]]
					</span>					
				</a>
				<a id="toggle-off-hint-link" href="javascript://" class="toggle-hint-link hidden" on-click="__toggle">
					<span class="toggle-hint-button">
						<d2l-icon icon="d2l-tier1:arrow-collapse"></d2l-icon>
					</span>
					<span class="toggle-hint-text">
						[[localize('hide_hint')]]
					</span>					
				</a>
			</div>
			<p id="hint" class="hidden" tabindex="0" inner-h-t-m-l="[[hint]]"></p>
		</div>
`;
	}

	static get is() {
		return 'd2l-quiz-question-hint';
	}

	static get properties() {
		return {
			hint: {
				type: String,
				readOnly: false
				//value: ''
			}
		};
	}

	constructor() {
		super();
	}

	__toggle() {
		this.shadowRoot.querySelector('#toggle-on-hint-link').classList.toggle('hidden');
		this.shadowRoot.querySelector('#toggle-off-hint-link').classList.toggle('hidden');
		this.shadowRoot.querySelector('#hint').classList.toggle('hidden');
	}
}

customElements.define(D2LQuizQuestionHint.is, D2LQuizQuestionHint);
