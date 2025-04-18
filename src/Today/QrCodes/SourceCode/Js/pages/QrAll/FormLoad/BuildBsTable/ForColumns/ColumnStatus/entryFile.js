let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    if (value === true) {
        //return '<span class="badge bg-success"><i class="bi bi-check-lg"></i> <span class="d-none">Scanned</span></span>';

        return '<span class="badge bg-success"><i class="bi bi-check-lg"></i> <span class="d-none">Scanned</span></span>';
    } else {
        return '<span class="badge bg-danger"><i class="bi bi-x-lg"></i><span class="d-none">Pending</span></span>';
    };
};

export { StartFunc };