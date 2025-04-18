import { StartFunc as StartFuncFuncToRun } from "./ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("ShowId");

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", StartFuncFuncToRun);
    };
};

export { StartFunc };