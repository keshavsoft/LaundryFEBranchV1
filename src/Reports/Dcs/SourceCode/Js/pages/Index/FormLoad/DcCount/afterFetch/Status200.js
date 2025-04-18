const StartFunc = (data) => {
    let localAddondata = data.Count
    jFLocalToInputAddonsId(localAddondata)
    jFLocalToInputAddonsCount(localAddondata)
};

let jFLocalToInputAddonsId = (inValue) => {
    let jVarLocalHtmlId = 'DcCountId';
    let jVarLocalAddonsId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalAddonsId === null === false) {
        jVarLocalAddonsId.innerHTML = inValue;
        
    };
};

let jFLocalToInputAddonsCount = (inValue) => {
    let jVarLocalHtmlId = 'AddonsCount';
    let jVarLocalAddonsCount = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalAddonsCount === null === false) {
        jVarLocalAddonsCount.innerHTML = inValue;
        
    };
};

export { StartFunc };