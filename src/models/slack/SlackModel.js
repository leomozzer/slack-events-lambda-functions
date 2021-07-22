class SlackModel {
    constructor() {
        this.model = {
            "commands": [
                {
                    "blocks": [
                        {
                            "text": {
                                "text": "You have a new request:\n*<fakeLink.toEmployeeProfile.com|Fred Enriquez - New device request>*",
                                "type": "mrkdwn"
                            },
                            "type": "section"
                        },
                        {
                            "fields": [
                                {
                                    "text": "*Type:*\nComputer (laptop)",
                                    "type": "mrkdwn"
                                },
                                {
                                    "text": "*When:*\nSubmitted Aut 10",
                                    "type": "mrkdwn"
                                },
                                {
                                    "text": "*Last Update:*\nMar 10, 2015 (3 years, 5 months)",
                                    "type": "mrkdwn"
                                },
                                {
                                    "text": "*Reason:*\nAll vowel keys aren't working.",
                                    "type": "mrkdwn"
                                },
                                {
                                    "text": "*Specs:*\n\"Cheetah Pro 15\" - Fast, really fast\"",
                                    "type": "mrkdwn"
                                }
                            ],
                            "type": "section"
                        },
                        {
                            "elements": [
                                {
                                    "style": "primary",
                                    "text": {
                                        "emoji": true,
                                        "text": "Done",
                                        "type": "plain_text"
                                    },
                                    "type": "button",
                                    "value": "click_me_123"
                                },
                                {
                                    "style": "danger",
                                    "text": {
                                        "emoji": true,
                                        "text": "Deny",
                                        "type": "plain_text"
                                    },
                                    "type": "button",
                                    "value": "click_me_123"
                                }
                            ],
                            "type": "actions"
                        }
                    ],
                    "name": "/button"
                },
                {
                    "blocks": [
                        {
                            "accessory": {
                                "alt_text": "cute cat",
                                "image_url": "https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg",
                                "type": "image"
                            },
                            "text": {
                                "text": "This is a section block with an accessory image.",
                                "type": "mrkdwn"
                            },
                            "type": "section"
                        }
                    ],
                    "name": "/image"
                },
                {
                    "modal": {
                        "blocks": [
                            {
                                "text": {
                                    "text": "Thanks for openeing this modal!",
                                    "type": "mrkdwn"
                                },
                                "type": "section"
                            },
                            {
                                "block_id": "cute_animal_selection_block",
                                "element": {
                                    "action_id": "cute_animal_selection_element",
                                    "options": [
                                        {
                                            "text": {
                                                "emoji": true,
                                                "text": "Puppy",
                                                "type": "plain_text"
                                            },
                                            "value": "puppy"
                                        },
                                        {
                                            "text": {
                                                "emoji": true,
                                                "text": "Jack",
                                                "type": "plain_text"
                                            },
                                            "value": "Jack"
                                        },
                                        {
                                            "text": {
                                                "emoji": true,
                                                "text": "Bunny",
                                                "type": "plain_text"
                                            },
                                            "value": "bunny"
                                        }
                                    ],
                                    "placeholder": {
                                        "emoji": true,
                                        "text": "Select a cute animal",
                                        "type": "plain_text"
                                    },
                                    "type": "static_select"
                                },
                                "label": {
                                    "emoji": true,
                                    "text": "Choose a cute pet:",
                                    "type": "plain_text"
                                },
                                "type": "input"
                            },
                            {
                                "block_id": "cute_animal_name_block",
                                "element": {
                                    "action_id": "cute_animal_name_element",
                                    "type": "plain_text_input"
                                },
                                "label": {
                                    "emoji": true,
                                    "text": "Give it a cute name:",
                                    "type": "plain_text"
                                },
                                "type": "input"
                            }
                        ],
                        "callback_id": "modal_sample",
                        "close": {
                            "emoji": true,
                            "text": "Cancel",
                            "type": "plain_text"
                        },
                        "submit": {
                            "emoji": true,
                            "text": "Done",
                            "type": "plain_text"
                        },
                        "title": {
                            "emoji": true,
                            "text": "My App",
                            "type": "plain_text"
                        },
                        "type": "modal"
                    },
                    "name": "modal_sample"
                }
            ]
        }
    }
}

module.exports = SlackModel