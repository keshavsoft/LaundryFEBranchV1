import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalFromDom = jFLocalCustomerNameInputId();
    let jVarLocalUserName = localStorage.getItem("UserName");

    KeysJson.body.inMobileNumber = jVarLocalFromDom;
    KeysJson.body.UserName = jVarLocalUserName;

    KeysJson.body = JSON.stringify(KeysJson.body);

    return KeysJson;
};

let jFLocalCustomerNameInputId = () => {
    let jVarLocalCustomerNameInputId = 'Mobile'
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNameInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };