const editorComponents = [
    {
        component: 'downloads',
        fields: [
            {
                name: 'download',
                label: 'download',
                widget: 'relation',
                collection: "downloads",
                multiple: true,
                search_fields: [ "buttonLabel", "internalName" ],
                display_fields: [ "{{buttonLabel}} ({{internalName}})" ],
                value_field: "{{id}}"
            },
        ]
    },
    {
        component: 'Link',
        fields: [
            {
                name: 'label',
                label: 'label',
                widget: 'string'
            },
            {
                name: 'link',
                label: 'link',
                widget: 'string'
            },
        ]
    }
    // {
    //     component: 'person',
    //     fields: [
    //         {
    //         multiple: true,
    //         name: "person",
    //         widget: "relation",
    //         collection: "persons",
    //         search_fields: [ "{{firstName}}", "{{lastName}}" ],
    //         value_field: "{{slug}}",
    //         display_fields: [ "{{firstName}} {{lastName}}" ]
    //         }
    //     ]
    // }
]




const capitalize = ([firstLetter, ...restOfWord]) =>
    firstLetter.toUpperCase() + restOfWord.join("");


// const mainRegexPattern = `/^:dispatch{:data='(.*?)' type='button'}$/ms`
    // /^:dispatch{:data='(.*?)' type='button'}$/ms
const createEditorComponent = function(editorComponent) {
    CMS.registerEditorComponent({
        // Internal id of the component
        id: editorComponent.component,
        // Visible label
        label: capitalize(editorComponent.component),
        // Fields the user need to fill out when adding an instance of the component
        fields: [
            ...editorComponent.fields
        ],
        pattern: new RegExp(`^:dispatch{:data='(.*?)' type='${editorComponent.component}'}$`, `ms`),
        fromBlock: function(match) {
            const data = JSON.parse(match[1]);
            return editorComponent.fields.reduce((acc ,item) => {
                acc[item.name] = data[item.name]
                return acc
            }, {});
        },
        // This is used to serialize the data from the custom widget to the
        // markdown document
        toBlock: function(data) {
            return `:dispatch{:data='${JSON.stringify( data )}' type='${editorComponent.component}'}`;
        }
    })
}

editorComponents.map(createEditorComponent)