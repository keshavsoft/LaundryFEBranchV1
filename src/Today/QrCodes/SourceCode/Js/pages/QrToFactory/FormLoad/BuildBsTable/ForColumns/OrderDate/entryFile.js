let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = OrderDateFunc;
};

let OrderDateFunc = (value, row, index) => {
    return new Date(row.OrderDateTime).toLocaleDateString('en-GB'); // dd/mm/yyyy format

};


export { StartFunc };