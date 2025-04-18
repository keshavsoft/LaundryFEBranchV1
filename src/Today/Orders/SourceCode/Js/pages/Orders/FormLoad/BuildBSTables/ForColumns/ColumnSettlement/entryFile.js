let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = totalPriceFormatter;
    inFindColumn.formatter = symbolFormatPrice;
};

function totalPriceFormatter(data) {
    var field = this.field
    return '₹ ' + data.map(function (row) {
        return +row.AggValues.SettlementAmount
    }).reduce(function (sum, i) {

        return sum + i
    }, 0)
}

function symbolFormatPrice(data) {
    var field = this.field
    return '₹ '+data;

 }


export { StartFunc };