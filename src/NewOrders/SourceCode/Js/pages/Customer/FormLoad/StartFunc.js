import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";
import { StartFunc as CustomerNavTabsBSTables } from "./CustomerNavTabsBSTables/EntryFile.js";
import { StartFunc as OrdersNavTabsBSTables } from "./OrdersNavTabsBSTables/EntryFile.js";

const StartFunc = () => {
    CustomerNavTabsBSTables();
    OrdersNavTabsBSTables();
    StartFuncAddListeners();
    StartFuncFromUrlParams();
    jFLocalRunCustomerButtonClick();
};

let jFLocalRunCustomerButtonClick = () => {
    if (jFLocalCustomerNameInputId() === "" === false) {
        var element = document.getElementById('CustomerNameSearchButtonId');
        var event = new Event('click');
        element.dispatchEvent(event);
    };
};

let jFLocalCustomerNameInputId = () => {
    let jVarLocalCustomerNameInputId = 'CustomerNameInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNameInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };
