const tf_question = {
  "properties": {
	"question": {
	  "extension": {
		"questionType": 2
	  },
	  "response": {
		"maxScore": "1",
		"responseItems": {
		  "0": {
			"processing": "match_correct",
			"correctResponse": [
			  "answer_1_true"
			],
			"mapping": {
			  "mapEntry": {}
			}
		  }
		}
	  },
	  "choiceInteraction": {
		"shuffle": false,
		"orientation": "vertical",
		"prompt": "<p>True or False</p>",
		"choiceOrder": [
		  "answer_1_true",
		  "answer_2_false"
		],
		"choices": {
		  "answer_1_true": {
			"identifier": "answer_1_true",
			"text": "True",
			"feedback": {}
		  },
		  "answer_2_false": {
			"identifier": "answer_2_false",
			"text": "False",
			"feedback": {}
		  }
		},
		"enumeration": 2
	  },
	  "modalFeedback": {
		"hint": {
		  "text": "<p>Hint</p>"
		},
		"general": {}
	  }
	},
	"schema": {
	  "question": {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "http://d2l.com/schemas/qed.json",
  "type": "object",
  "properties": {
	"title": {
	  "type": "string",
	"title": "Short Description",
	"maxLength": 256
	},
  "extension": {
	"difficulty": {
	  "type": "integer"
	},
	"questionType": {
	  "type": "integer",
	  "default": 1,
	  "oneOf": [
	  {
		"enum": [
		1
		],
		"title": "Multiple Choice"
	  },
	  {
		"enum": [
		2
		],
		"title": "True or False"
	  },
	  {
		"enum": [
		3
		],
		"title": "Fill in the Blanks"
	  },
	  {
		"enum": [
		4
		],
		"title": "Multi-Select"
	  },
	  {
		"enum": [
		5
		],
		"title": "Matching"
	  },
	  {
		"enum": [
		6
		],
		"title": "Ordering"
	  },
	  {
		"enum": [
		7
		],
		"title": "Written Response"
	  },
	  {
		"enum": [
		8
		],
		"title": "Short Answer"
	  },
	  {
		"enum": [
		9
		],
		"title": "Likert"
	  },
	  {
		"enum": [
		10
		],
		"title": "Image Information"
	  },
	  {
		"enum": [
		11
		],
		"title": "Text Information"
	  },
	  {
		"enum": [
		12
		],
		"title": "Arithmetic"
	  },
	  {
		"enum": [
		13
		],
		"title": "Significant Figures"
	  },
	  {
		"enum": [
		14
		],
		"title": "Multi-Short Answer"
	  }
	  ]
	}
  },
	"response": {
	  "type": "object",
	  "properties": {
		"maxScore": {
		  "type": "string",
		  "title": "Default Points",
	  "readOnly": false
		},
	"responseItems": {
	  "type": "object",
	  "additionalProperties": {
		"type": "object",
	  "properties": {
		"processing": {
		  "type": "string",
		  "default": "match_correct",
		  "enum": [
		  "match_correct",
		  "map_response"
		  ]
		},
		"correctResponse": {
		  "type": "array",
		  "items": {
		  "type": "string"
		  }
		}
	  }
	  }
	}		   
	  }
	},
	"choiceInteraction": {
	  "type": "object",
	  "properties": {
		"enumeration": {
	  "title": "Enumeration",
		  "type": "number",
		  "default": 4,
		  "oneOf": [
			{
			  "enum": [
				1
			  ],
			  "title": "1, 2, 3, 4, 5, ..."
			},
			{
			  "enum": [
				2
			  ],
			  "title": "i, ii, iii, iv, v, ..."
			},
			{
			  "enum": [
				3
			  ],
			  "title": "I, II, III, IV, V, ..."
			},
			{
			  "enum": [
				4
			  ],
			  "title": "a, b, c, d, e, f, ..."
			},
			{
			  "enum": [
				5
			  ],
			  "title": "A, B, C, D, E, F, ..."
			}
		  ]
		},
		"orientation": {
		  "type": "string"
		},
		"prompt": {
		  "type": "string"
		},
		"choiceOrder": {
		  "type": "array",
		  "items": {
			"type": "string"
		  }
		},
		"choices": {
		  "type": "object",
		  "additionalProperties": {
			"type": "object",
			"properties": {
			  "identifier": {
				"type": "string"
			  },
			  "text": {
				"type": "string",
		"readOnly": true
			  },
			  "feedback": {
		"title": "Feedback",
				"type": "object",
				"properties": {
				  "text": {
					"type": "string"
				  },
				  "title": {
					"type": "string"
				  }
				}
			  }
			}
		  }
		}
	  }
	},
	"modalFeedback": {
	  "type": "object",
	  "properties": {
		"hint": {
	  "title": "Hint",
		  "type": "object",
		  "properties": {
			"title": {
			  "type": "string"
			},
			"text": {
			  "type": "string"
			}
		  }
		},
		"general": {
	  "title": "Feedback",
		  "type": "object",
		  "properties": {
			"title": {
			  "type": "string"
			},
			"text": {
			  "type": "string"
			}
		  }
		}
	  }
	}
  }
}
	},
	"config": {
	  "htmlEditorDisabled": false
	}
  },
  "entities": [],
  "actions": [
	{
	  "name": "save",
	  "title": "Save",
	  "method": "PUT",
	  "href": "https://qa108111074g.bspc.com/d2l/api/le/qed/123117/collection/1/68/parent/0/question/107451/2/54672/54699/tool/51000?act=save",
	  "type": "application/json;profile='http://d2l.com/d2l/api/qe/schemas/question.json'"
	},
	{
	  "name": "savenew",
	  "title": "Save and New",
	  "method": "PUT",
	  "href": "https://qa108111074g.bspc.com/d2l/api/le/qed/123117/collection/1/68/parent/0/question/107451/2/54672/54699/tool/51000?act=savenew",
	  "type": "application/json;profile='http://d2l.com/d2l/api/qe/schemas/question.json'"
	},
	{
	  "name": "savecopy",
	  "title": "Save and Copy",
	  "method": "PUT",
	  "href": "https://qa108111074g.bspc.com/d2l/api/le/qed/123117/collection/1/68/parent/0/question/107451/2/54672/54699/tool/51000?act=savecopy",
	  "type": "application/json;profile='http://d2l.com/d2l/api/qe/schemas/question.json'"
	},
	{
	  "name": "new",
	  "title": "New Question",
	  "method": "GET",
	  "href": "https://qa108111074g.bspc.com/d2l/api/le/qed/123117/collection/1/68/parent/0/question/2/tool/51000/new",
	  "type": "application/json;profile='http://d2l.com/d2l/api/qe/schemas/question.json'"
	},
	{
	  "name": "manage-options",
	  "title": "Options",
	  "href": "#"
	},
	{
	  "name": "add-feedback",
	  "title": "Add Feedback",
	  "href": "#"
	},
	{
	  "name": "remove-feedback",
	  "title": "Remove Feedback",
	  "href": "#"
	},
	{
	  "name": "add-title",
	  "title": "Add Short Description",
	  "href": "#"
	},
	{
	  "name": "remove-title",
	  "title": "Remove Short Description",
	  "href": "#"
	},
	{
	  "name": "add-answer",
	  "title": "Add Answer",
	  "href": "#"
	},
	{
	  "name": "remove-answer",
	  "title": "Remove answer {number}",
	  "href": "#"
	},
	{
	  "name": "add-enumeration",
	  "title": "Add Enumeration",
	  "href": "#"
	},
	{
	  "name": "remove-enumeration",
	  "title": "Remove Enumeration",
	  "href": "#"
	},
	{
	  "name": "add-hint",
	  "title": "Add Hint",
	  "href": "#"
	},
	{
	  "name": "remove-hint",
	  "title": "Remove Hint",
	  "href": "#"
	},
	{
	  "name": "show-points",
	  "title": "",
	  "href": "#"
	},
	{
	  "name": "show-checkbox",
	  "title": "",
	  "href": "#"
	}
  ],
  "links": [
	{
	  "rel": [
		"self"
	  ],
	  "href": "https://qa108111074g.bspc.com/d2l/api/le/qed/6606/collection/1/68/parent/0/question/2/tool/51000"
	}
  ],
  "title": "Creating Question"
};