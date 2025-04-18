let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalSerialColumn;
};

function jFLocalSerialColumn(value, row, index) {
    return index + 1;
};
export { StartFunc };