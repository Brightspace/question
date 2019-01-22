/*
'd2l-quiz-question-multiple-choice'

*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import './d2l-quiz-question-hint.js';
import '../localize-behavior.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';

class D2LQuizQuestionMultipleChoice extends mixinBehaviors(D2L.PolymerBehaviors.D2LQuestion.LocalizeBehavior, PolymerElement) {
  static get template() {
	return html`
		<style>
			:host {
				display: block;
			}

			#d2l-quiz-question {
				counter-reset: choices;
			}

			#d2l-quiz-question-body {
				margin-bottom: 1rem;
			}

			.choice {
				display: block;
				margin-bottom: 1rem;
			}

			.choice-content-container {
				display: inline-block;
				width: 85%;
			}

			.choice > .choice-content-container > div > .choice-text > * {
				display: inline;
			}

			.radio-button-container {
				display: inline-block;
				vertical-align: top;
				margin-right: 0.5rem;
			}

			:host-context([dir='rtl']) .radio-button-container {
				display: inline-block;
				vertical-align: top;
				margin-left: 0.5rem;
			}

			.radio-button {
	            border-color: #d3d9e3;
				border-width: 1px;	
				border-radius: 0.55rem;
				border-style: solid;
				box-sizing: border-box;
				box-shadow: none;
				display: inline-block;
				height: 1.2rem;
				width: 1.2rem;
				margin: 0;
				padding: 0;
				vertical-align: middle;
				transition-duration: 0.5s;
				transition-timing-function: ease;
				transition-property: background-color, border-color;
				-webkit-appearance: none;
				-moz-appearance: none;
				appearance: none;
				background-position: center center;
				background-repeat: no-repeat;
				background-color: #f2f3f5;
			}

			.radio-button:hover, .radio-button:focus {
				background-color: #e6eaf0;
				border-color: #006fbf;
				border-width: 2px;
				outline-width: 0;
				padding: 0;
			}

			.radio-button:checked {
				background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%225%22%20cy%3D%225%22%20r%3D%225%22%20fill%3D%22%23565a5c%22%2F%3E%3C%2Fsvg%3E");
			}

			.preview-counters {
				margin-left: 0.4rem;
			}

			:host-context([dir='rtl']) .preview-counters {
				margin-right: 0.4rem;
				margin-left: 0;
			}

			.preview-counters-decimal::before {
				vertical-align: top;
				counter-increment: choices;
				content: counter(choices, decimal) ") ";
			}

			.preview-counters-lower-roman::before {
				vertical-align: top;
				counter-increment: choices;
				content: counter(choices, lower-roman) ") ";
			}

			.preview-counters-upper-roman::before {
				vertical-align: top;
				counter-increment: choices;
				content: counter(choices, upper-roman) ") ";
			}

			.preview-counters-lower-alpha::before {
				vertical-align: top;
				counter-increment: choices;
				content: counter(choices, lower-alpha) ") ";
			}

			.preview-counters-upper-alpha::before {
				vertical-align: top;
				counter-increment: choices;
				content: counter(choices, upper-alpha) ") ";
			}

			.choice-text {
				display: inline-block;
				width: 90%;
			}

			#d2l-quiz-question.horizontal {
				width: max-content;
			}

			.horizontal {
				display: inline-block;
			}

			.horizontal > .choice > .choice-content-container {
				width: auto;
				margin-right: 1.5rem;
			}

			.horizontal > .choice > .choice-content-container .choice-text {
				width: auto;
			}

			select.select {
				border-radius: 0.3rem;
				border-style: solid;
				box-sizing: border-box;
				display: inline-block;
				height: auto;
				margin: 0;
				vertical-align: middle;
				width: auto;
				transition-duration: 0.5s;
				transition-timing-function: ease;
				transition-property: background-color, border-color;
				color: #565a5c;
				font-family: inherit;
				font-size: 0.8rem;
				font-weight: 400;
				letter-spacing: 0.02rem;
				line-height: 1.2rem;
				-webkit-appearance: none;
				-moz-appearance: none;
				appearance: none;
				background-position: right center;
				background-repeat: no-repeat;
				background-size: contain;
				max-height: calc(2rem + 2px);
				background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2242%22%20height%3D%2242%22%20viewBox%3D%220%200%2042%2042%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22%23f2f3f5%22%20d%3D%22M0%200h42v42H0z%22%2F%3E%3Cpath%20stroke%3D%22%23d3d9e3%22%20d%3D%22M0%200v42%22%2F%3E%3Cpath%20d%3D%22M14.99%2019.582l4.95%204.95a1.5%201.5%200%200%200%202.122%200l4.95-4.95a1.5%201.5%200%200%200-2.122-2.122L21%2021.35l-3.888-3.89a1.5%201.5%200%200%200-2.12%202.122z%22%20fill%3D%22%23565A5C%22%2F%3E%3C%2Fsvg%3E");
				padding-right: calc(0.75rem + 42px);
				max-width: calc(100vw - 80px);
				min-width: 11.5rem;
			}

			select.select, select.select:hover:disabled {
				background-color: #fff;
				border-color: #d3d9e3;
				border-width: 1px;
				box-shadow: inset 0 2px 0 0 rgba(185, 194, 208, 0.2);
				padding: 0.4rem 0.75rem;
			}

			select.select:hover, select.select:focus  {
				border-color: #006fbf;
				border-width: 2px;
				outline-width: 0;
				padding: calc(0.4rem - 1px) calc(0.75rem - 1px);
			}

			select.select option {
				font-weight: 400;
			}

			#d2l-quiz-question-hint {
				margin: 1rem 0 0 0;
			}
		</style>

		<div id="d2l-quiz-question" class$="[[__orientationClass(questionData.orientation)]]">
			<div id="d2l-quiz-question-body" inner-h-t-m-l="[[questionData.bodyText]]" tabindex="0"></div>
			<div>
				<template is="dom-if" if="[[__isDropdown(questionData.orientation)]]">
					<select class="select">
						<option>[[localize('select_option')]]</option>
						<template is="dom-repeat" items="[[__getChoices(questionData.choices, questionData.randomization)]]">
							<option inner-h-t-m-l="[[item.text]]"></option>
						</template>
					</select>
				</template>
				<template is="dom-if" if="[[__isNotDropdown(questionData.orientation)]]">
					<template is="dom-repeat" items="[[__getChoices(questionData.choices, questionData.randomization)]]">
						<div class$="[[__orientationClass(questionData.orientation)]]">
							<label class="choice">
								<div class="radio-button-container">
									<input type="radio" class="radio-button" name="[[__generateUUID()]]" value="[[item.text]]">
								</div>
								<div class="choice-content-container">											
									<div class$="[[__enumerationType(questionData.enumeration)]]">
										<div class="choice-text" inner-h-t-m-l=" [[item.text]]">
										</div>
									</div>
								</div>
							</label>
						</div>
					</template>
				</template>
			</div>
			<template is="dom-if" if="[[questionData.hint]]">
				<d2l-quiz-question-hint hint="[[questionData.hint]]"></d2l-quiz-question-hint>
			</template>
		</div>
`;
  }

  static get is() {
	  return "d2l-quiz-question-multiple-choice";
  }

  static get properties() {
		return {
		  questionData: {
				type: Object,
				readOnly: false
				//value: null
				//value: () => { return {'bodyText':'I am a test question', 'hint':'this is a hint', 'enumeration':'2', 'randomization':true, 'orientation':'Vertical', choices':[{'text':'123'}, {'text':'456'}]}}
		  }
		}
  }

  constructor() {
	  super();
	  this.uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
  }

  __enumerationType(enumerationValue) {
	  if (!enumerationValue) {
		  return '';
	  } else if (enumerationValue.toString() === "1") {
		  return "preview-counters preview-counters-decimal";
	  } else if (enumerationValue.toString() === "2") {
		  return "preview-counters preview-counters-lower-roman";
	  } else if (enumerationValue.toString() === "3") {
		  return "preview-counters preview-counters-upper-roman";
	  } else if (enumerationValue.toString() === "4") {
		  return "preview-counters preview-counters-lower-alpha";
	  } else if (enumerationValue.toString() === "5") {
		  return "preview-counters preview-counters-upper-alpha";
	  }
  }

  __randomizeArray(array) {
	  for (let i = array.length - 1; i > 0; i--) {
		  let j = Math.floor(Math.random() * (i + 1));
		  [array[i], array[j]] = [array[j], array[i]];
	  }
  }

  __getChoices(choices, randomization) {
	  if(!randomization) {
		  return choices;
	  }
	  else {
		  this.__randomizeArray(choices);
		  return choices;
	  }
  }

  __generateUUID() {		
	  return this.uuid;
  }

  __isDropdown(orientation) {
	  return orientation === 'Dropdown';
  }

  __isNotDropdown(orientation) {
	  return orientation !== 'Dropdown';
  }

  __orientationClass(orientation) {
	  if (orientation === 'Horizontal') {
		  return 'horizontal';
	  }
	  else {
		  return '';
	  }
  }

}

customElements.define(D2LQuizQuestionMultipleChoice.is, D2LQuizQuestionMultipleChoice);
