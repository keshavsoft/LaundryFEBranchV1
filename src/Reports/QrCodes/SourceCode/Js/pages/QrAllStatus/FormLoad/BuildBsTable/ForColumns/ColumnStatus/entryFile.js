let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    if (value === true) {
        return '<span class="badge bg-success"> ✔</span>';
    } else {
        return '<span class="badge bg-danger">✘</span>';
    };
};

export { StartFunc };