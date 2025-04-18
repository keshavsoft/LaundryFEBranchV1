let StartFunc = (inData) => {
    let jVarLocalData = inData;
    var $table = $('#table')
    $table.bootstrapTable("load", jVarLocalData);
};

export { StartFunc };