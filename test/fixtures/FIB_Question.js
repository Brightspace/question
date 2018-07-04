const fib_question = {
  "properties": {
    "question": {
      "extension": {
        "questionType": 3
      },
      "response": {
        "maxScore": "1",
        "responseItems": {
          "0": {
            "processing": "match_correct",
            "evaluation": "text_case_insensitive",
            "correctResponse": [
              "swimming",
              "running",
              "biking"
            ],
            "mapping": {
              "mapEntry": {}
            },
            "legacyCols": 30
          },
          "1": {
            "processing": "match_correct",
            "evaluation": "text_case_insensitive",
            "correctResponse": [
              "no"
            ],
            "mapping": {
              "mapEntry": {}
            },
            "legacyCols": 5
          }
        }
      },
      "textEntryInteraction": {
        "textEntries": [
          {
            "text": "It is a sunny day, let's go&nbsp;"
          },
          {
            "responseId": "0"
          },
          {
            "text": "&nbsp;with me,&nbsp;"
          },
          {
            "text": "good?"
          },
          {
            "responseId": "1"
          }
        ],
        "prompt": "It is a sunny day, let's go&nbsp; _______ &nbsp;with me,&nbsp;good? _______ "
      },
      "modalFeedback": {
        "hint": {},
        "general": {}
      },
      "title": "FIB123"
    },
    "config": {
      "htmlEditorDisabled": false,
      "allowHint": true
    }
  },
  "entities": [],
  "actions": [],
  "links": [],
  "title": "Previewing Question"
}