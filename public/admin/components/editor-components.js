const editorComponents = [
    {
        component: 'button',
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
            {
                name: 'type',
                label: 'type',
                widget: 'select',
                options: [
                    {label: "White", value: 0},
                    {label: "Black", value: 1},
                    {label: "Primary", value: 2}
                ]
            },
            {
                name: 'download',
                label: 'link',
                widget: 'file',
                media_library: {
                    config: {
                        multiple: false,
                        max_file_size: 1024000
                    }
                }
            },
        ]
    },
    {
        component: 'person',
        fields: [
            {
            multiple: true,
            name: "teacher",
            widget: "relation",
            collection: "teachers",
            search_fields: [ "{{firstName}}", "{{lastName}}" ],
            value_field: "{{slug}}",
            display_fields: [ "{{firstName}} {{lastName}}" ]
            }
        ]
    }
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
            const components = editorComponent.fields.reduce((acc ,item) => {
                acc[item.name] = data[item.name]
                return acc
            }, {});
            return components;
        },
        // This is used to serialize the data from the custom widget to the
        // markdown document
        toBlock: function(data) {
            return `:dispatch{:data='${JSON.stringify( data )}' type='${editorComponent.component}'}`;
        }
    })
}

editorComponents.map(createEditorComponent)