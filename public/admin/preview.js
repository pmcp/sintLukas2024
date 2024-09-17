window.previewDataCMS = {};




const GeneratePreview = (type, properties = []) => createClass({
    render: function () {

        //
        // var posts = await this.props.getCollection('news');
        // var arr = [];
        // console.log(posts);
        // posts.forEach((t) => {
        //     console.log(t);
        //     const gettingData = t.get('data');
        //     console.log(gettingData);
        //     arr.push(gettingData);
        // });


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
        const src = `${isLocal ? 'http' : 'https'}://${host}/preview/${type}`;
        window.previewDataCMS = data;
        const html = `<iframe border="0" src="${src}" width="100%" height="100%" style="border: 1px solid #EEE; height: calc(100vh - 80px)"></iframe>`;
        return h('div', { dangerouslySetInnerHTML: { __html: html } });
    },
});

// COLLECTIONS
CMS.registerPreviewTemplate('aanbod', GeneratePreview('aanbod', ['title', 'order', 'color', 'background', 'side', 'ateliers', 'id']));

// OBJECTS
// The first input into CMS.registerPreviewTemplate needs to match the file name property. So, for file collections, templates are registered by file, not by collection.
CMS.registerPreviewTemplate('homepage', GeneratePreview('homepage', ['block_mainInfo', 'block_banner', 'block_news', 'block_courses', 'block_about', 'block_calendar']));
CMS.registerPreviewTemplate('academie', GeneratePreview('academie', ['title', 'images', 'markdown', 'side1']));
CMS.registerPreviewTemplate('nl', GeneratePreview('inschrijven', ['title', 'images', 'text1', 'text2', 'text3', 'text4', 'text5']));




// CMS.registerPreviewTemplate('locations', GeneratePreview('locations', ['title']));



