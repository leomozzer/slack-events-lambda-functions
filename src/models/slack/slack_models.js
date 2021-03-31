module.exports = {
    'date': {
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Pick a date for the deadline."
                },
                "accessory": {
                    "type": "datepicker",
                    "initial_date": "1990-04-28",
                    "placeholder": {
                        "type": "plain_text",
                        "text": "Select a date",
                        "emoji": true
                    },
                    "action_id": "datepicker-action"
                }
            }
        ]
    },
    'select':{
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Test block with multi conversations select"
                },
                "accessory": {
                    "type": "multi_conversations_select",
                    "placeholder": {
                        "type": "plain_text",
                        "text": "Select conversations",
                        "emoji": true
                    },
                    "action_id": "multi_conversations_select-action"
                }
            }
        ]
    },  
    'modal':{
        "type": "modal",
        "callback_id": "modal_sample", // We need to add this  //Create a new shortcut on the Interactivity & Shortcuts from slack
        "title": {
            "type": "plain_text",
            "text": "My App",
            "emoji": true
        },
        "submit": {
            "type": "plain_text",
            "text": "Done",
            "emoji": true
        },
        "close": {
            "type": "plain_text",
            "text": "Cancel",
            "emoji": true
        },
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Thanks for openeing this modal!"
                }
            },
            {
                "type": "input",
                "block_id": "cute_animal_selection_block", // put this here to identify the selection block
                "element": {
                    "type": "static_select",
                    "action_id": "cute_animal_selection_element", // put this here to identify the selection element
                    "placeholder": {
                        "type": "plain_text",
                        "text": "Select a cute animal",
                        "emoji": true
                    },
                    "options": [
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "Puppy",
                                "emoji": true
                            },
                            "value": "puppy"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "Kitten",
                                "emoji": true
                            },
                            "value": "kitten"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "Bunny",
                                "emoji": true
                            },
                            "value": "bunny"
                        }
                    ]
                },
                "label": {
                    "type": "plain_text",
                    "text": "Choose a cute pet:",
                    "emoji": true
                }
            },
            {
                "type": "input",
                "block_id": "cute_animal_name_block", // put this here to identify the input.
                "element": {
                    "type": "plain_text_input",
                    "action_id": "cute_animal_name_element" // put this here to identify the selection element

                },
                "label": {
                    "type": "plain_text",
                    "text": "Give it a cute name:",
                    "emoji": true
                }
            }
        ]
    },
    'button': {
        'blocks': [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "You have a new request:\n*<fakeLink.toEmployeeProfile.com|Fred Enriquez - New device request>*"
                }
            },
            {
                "type": "section",
                "fields": [
                    {
                        "type": "mrkdwn",
                        "text": "*Type:*\nComputer (laptop)"
                    },
                    {
                        "type": "mrkdwn",
                        "text": "*When:*\nSubmitted Aut 10"
                    },
                    {
                        "type": "mrkdwn",
                        "text": "*Last Update:*\nMar 10, 2015 (3 years, 5 months)"
                    },
                    {
                        "type": "mrkdwn",
                        "text": "*Reason:*\nAll vowel keys aren't working."
                    },
                    {
                        "type": "mrkdwn",
                        "text": "*Specs:*\n\"Cheetah Pro 15\" - Fast, really fast\""
                    }
                ]
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "emoji": true,
                            "text": "Approve"
                        },
                        "style": "primary",
                        "value": "click_me_123"
                    },
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "emoji": true,
                            "text": "Deny"
                        },
                        "style": "danger",
                        "value": "click_me_123"
                    }
                ]
            }
        ]
    }
}