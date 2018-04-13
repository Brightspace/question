const sa_question = {
  "properties": {
    "question": {
      "extension": {
        "questionType": 8
      },
      "response": {
        "maxScore": "1",
        "grading": "equally_weighted",
        "responseItems": {
          "0": {
            "processing": "match_correct",
            "evaluation": "text_case_insensitive",
            "correctResponse": [
              "apple",
              "banana",
              "cranberry"
            ],
            "mapping": {
              "mapEntry": {}
            }
          },
          "1": {
            "processing": "match_correct",
            "evaluation": "text_case_insensitive",
            "correctResponse": [
              "car",
              "plane",
              "bike"
            ],
            "mapping": {
              "mapEntry": {}
            }
          }
        }
      },
      "interaction": {
        "prompt": "<p>Short Answer</p>"
      },
      "modalFeedback": {
        "hint": {},
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
    "grading": {
          "type": "string"
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
        "evaluation": {
          "type": "string"
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
    "interaction": {
      "type": "object",
      "properties": {
        "prompt": {
          "type": "string"
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
      "href": "https://qa108111103g.bspc.com/d2l/api/le/qed/123118/collection/1/83/parent/0/question/107513/8/54721/54751/tool/51000?act=save",
      "type": "application/json;profile='http://d2l.com/d2l/api/qe/schemas/question.json'"
    },
    {
      "name": "savenew",
      "title": "Save and New",
      "method": "PUT",
      "href": "https://qa108111103g.bspc.com/d2l/api/le/qed/123118/collection/1/83/parent/0/question/107513/8/54721/54751/tool/51000?act=savenew",
      "type": "application/json;profile='http://d2l.com/d2l/api/qe/schemas/question.json'"
    },
    {
      "name": "savecopy",
      "title": "Save and Copy",
      "method": "PUT",
      "href": "https://qa108111103g.bspc.com/d2l/api/le/qed/123118/collection/1/83/parent/0/question/107513/8/54721/54751/tool/51000?act=savecopy",
      "type": "application/json;profile='http://d2l.com/d2l/api/qe/schemas/question.json'"
    },
    {
      "name": "new",
      "title": "New Question",
      "method": "GET",
      "href": "https://qa108111103g.bspc.com/d2l/api/le/qed/123118/collection/1/83/parent/0/question/8/tool/51000/new",
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
      "name": "text_case_insensitive",
      "title": "Text",
      "href": "#"
    },
    {
      "name": "text_case_sensitive",
      "title": "Case-Sensitive Text",
      "href": "#"
    },
    {
      "name": "regex",
      "title": "Regular Expression",
      "href": "#"
    },
    {
      "name": "numeric",
      "title": "Numeric",
      "href": "#"
    }
  ],
  "links": [
    {
      "rel": [
        "self"
      ],
      "href": "https://qa108111103g.bspc.com/d2l/api/le/qed/6606/collection/1/83/parent/0/question/8/tool/51000"
    }
  ],
  "title": "Creating Question"
};