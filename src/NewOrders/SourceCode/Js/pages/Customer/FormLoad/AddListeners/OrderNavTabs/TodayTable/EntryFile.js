import { StartFunc as StartFuncFuncToRun } from "./ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalCustomerNameInputId = "TodayOrderRefreshButtonId";
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNameInputId);

    jVarLocalHtmlId.addEventListener("click", StartFuncFuncToRun);
};

export { StartFunc }