let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = totalPriceFormatter;
    inFindColumn.Formatter = totalPriceFormatter;
};

function totalPriceFormatter(data) {
    var field = this.field
    return '₹ ' + data.map(function (row) {
        return +row.AggValues.SettlementAmount
    }).reduce(function (sum, i) {

        return sum + i
    }, 0)
}

export { StartFunc };