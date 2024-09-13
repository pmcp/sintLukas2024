// https://github.com/ai/nanoid
function nanoid(t = 21) {
    return crypto.getRandomValues(new Uint8Array(t))
        .reduce((t, e) => (t += (e &= 63) < 36 ? e.toString(36) : e < 62 ? (e - 26)
            .toString(36).toUpperCase() : e > 62 ? "x" : "y"), "");
}

const UuidWidget = createClass({
    componentDidMount() {
        const { value, onChange } = this.props;
        if (!value) {
            onChange(nanoid());
        }
    },

    render() {
        const { value, classNameWrapper, forID } = this.props;
        return h(
            "span",
            {
                id: forID,
                style: { fontFamily: "monospace", marginLeft: "1rem" }
                //className: classNameWrapper
            },
            value
        );
    }
});

CMS.registerWidget("uuid", UuidWidget);