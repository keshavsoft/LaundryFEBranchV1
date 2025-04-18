let StartFunc = ({ inFindColumn }) => {
    console.log("--inFindColumn",inFindColumn);
    
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    console.log("--value : ", value,row,index);
    if (value === true) {
        return '<span class="badge bg-success">✔</span>';
    } else {
        return '<span class="badge bg-danger">✘</span>';
    };
};

export { StartFunc };