import React from 'react';const data = {
    "form": {
        "sections": [
            {
                "section_title": "Material UI Form Using Json",
                "fields": [
                    {
                        "name": "name",
                        "label": "Name",
                        "required": true,
                        "hidden": true,
                        "data_type": "String",
                        "html_element": "TextField",
                        "error": false,
                        "variant": "outlined"
                    },
                    {
                        "name": "email",
                        "label": "Email",
                        "hidden": false,
                        "required": true,
                        "data_type": "String",
                        "html_element": "TextField",
                        "error": false,
                        "variant": "outlined"
                    },
                    {
                        "name": "age",
                        "label": "Age",
                        "hidden": false,
                        "required": true,
                        "data_type": "Integer",
                        "html_element": "TextField",
                        "error": false,
                        "variant": "outlined"
                    },
                    {
                        "name": "phone",
                        "label": "Phone",
                        "hidden": true,
                        "required": true,
                        "data_type": "Integer",
                        "html_element": "TextField",
                        "error": false,
                        "variant": "outlined"
                    },
                    {
                        "name": "address",
                        "label": "Address",
                        "minRows": "3",
                        "placeholder": "Enter Address",
                        "html_element": "TextArea",
                        "variant": "outlined"
                    },
                    {
                        "name": "country",
                        "label": "Country",
                        "hidden": false,
                        "required": true,
                        "data_type": "Image",
                        "error": false,
                        "variant": "outlined",
                        "placeholder": "Choose Country",
                        "options": [
                            {
                                "label": "India",
                                "value": "india"
                            },
                            {
                                "label": "Canada",
                                "value": "canada"
                            },
                            {
                                "label": "England",
                                "value": "england"
                            }
                        ],
                        "html_element": "Select"
                    },
                    {
                        "name": "hobby",
                        "label": "Hobby",
                        "hidden": false,
                        "error": false,
                        "variant": "outlined",
                        "options": [
                            {
                                "label": "Football",
                                "value": "football"
                            },
                            {
                                "label": "Cricket",
                                "value": "cricket"
                            },
                            {
                                "label": "Travel",
                                "value": "travel"
                            }
                        ],
                        "required": false,
                        "html_element": "multiple"
                    }
                ],
                "feilds2": [
                    {
                        "section_title2": "Choose Gender",
                        "required": false,
                        "radioFeilds": [
                            {
                                "name": "radio1",
                                "label": "Male",
                                "value": "male",
                                "html_element": "radio",
                                "data_type": "radio",
                                "hidden": false,
                                "error": false
                            },
                            {
                                "name": "radio1",
                                "label": "Female",
                                "value": "female",
                                "html_element": "radio",
                                "data_type": "radio",
                                "hidden": false,
                                "error": false
                            },
                        ]
                    },
                    {
                        "section_title3": "What would you like to have?",
                        "required": false,
                        "checkFeilds": [
                            {
                                "name": "tea",
                                "value": "tea",
                                "html_element": "checkbox",
                                "defaultChecked": false,
                                "hidden": false,
                                "label": "Tea"
                            },
                            {
                                "name": "coffy",
                                "value": "coffy",
                                "html_element": "checkbox",
                                "defaultChecked": false,
                                "hidden": false,
                                "label": "Coffy"
                            },
                            {
                                "name": "juice",
                                "value": "juice",
                                "html_element": "checkbox",
                                "defaultChecked": false,
                                "hidden": false,
                                "label": "Juice"
                            },
                            {
                                "name": "soup",
                                "value": "soup",
                                "html_element": "checkbox",
                                "defaultChecked": false,
                                "hidden": false,
                                "label": "Soup"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}


function MaterialForm() {
  return (
    <div>
      
    </div>
  )
}

export default MaterialForm
