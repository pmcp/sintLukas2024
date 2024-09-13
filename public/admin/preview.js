window.previewDataCMS = {};
const GeneratePreview = (type, properties = []) => createClass({
    render: function () {
        console.log(this.props)
        const { entry } = this.props;
        const data = { type };
        const keys = (properties || []);
        if (Array.isArray(keys)) {
            keys.forEach((key) => {
                try {
                    const tmp = entry.getIn(['data', key]);
                    data[key] = tmp === 'undefined' ? '' : tmp;
                } catch (e) {
                    console.log(e);
                }
            })
            try {
                data.mediaFiles = entry.get('mediaFiles')
            } catch (e) {
                console.log(e);
            }
        }
        let host = window.location.host;
        const isLocal = ['localhost', '127.0.0.1', '0.0.0.0'].includes((host || 'default-online').split(':')[0]);

        // const src = `${isLocal ? 'http' : 'https'}://${host}/preview/${type}`;
        const src = `${isLocal ? 'http' : 'https'}://${host}/preview`;
        window.previewDataCMS = data;
        const html = `<iframe border="0" src="${src}" width="100%" height="100%" style="border: 1px solid #EEE; height: calc(100vh - 80px)"></iframe>`;
        return h('div', { dangerouslySetInnerHTML: { __html: html } });
    },
});

CMS.registerPreviewTemplate('pages', GeneratePreview('pages', ['title', 'intro', 'elements', 'image']));
CMS.registerPreviewTemplate('aanbod', GeneratePreview('aanbod', ['title', 'intro', 'elements', 'image']));
// CMS.registerPreviewTemplate('locations', GeneratePreview('locations', ['title']));