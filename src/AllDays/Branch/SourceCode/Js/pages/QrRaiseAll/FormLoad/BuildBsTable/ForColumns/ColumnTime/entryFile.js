let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalDateFormatter;
};

function jFLocalDateFormatter(value, row, index) {
    return new Date(row.OrderData.Currentdateandtime).toLocaleDateString('en-GB');
};

export { StartFunc };