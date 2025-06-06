let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalSettlementDetails;
    inFindColumn.footerFormatter = priceFormatter;
};

function jFLocalSettlementDetails(value, row, index) {
    if (row.IsSettled) {
        return `₹ ${row.AggValues.SettlementAmount}</a>`
       
    }
    else {
        return [
            `<a href="/Laundry/Branch/NewOrders/HtmlFiles/Settlement.html?OrderNumber=${row.pk}" data-ordernumber="${row.pk}" class="btn btn-outline-danger SettlementButtonClass" >`,
            `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">`,
            `<path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />`,
            `</svg>`,
            ` `,
            `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">`,
            `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>`,
            `<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>`,
            `</svg>`,
            `</a>`
        ].join('')
    }
}

function priceFormatter(data) {
    var field = this.field
    return '₹ ' + data.map(function (row) {
        return +row.AggValues.SettlementAmount
    }).reduce(function (sum, i) {
        return sum + i
    }, 0)
}

export { StartFunc };