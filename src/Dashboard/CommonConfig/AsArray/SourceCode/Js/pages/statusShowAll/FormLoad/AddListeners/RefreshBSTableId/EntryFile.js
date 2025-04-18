import { StartFunc as StartFuncFuncToRun } from "./ButtonClickFunc.js";

let StartFunc = () => {
    // let jVarLocalRefreshBSTableId = document.getElementById("RefreshBSTableId");

    const arrClass = document.querySelectorAll(".RefreshBSTableClass");

    for (let i of arrClass) {
        i.addEventListener("click", StartFuncFuncToRun);
    };

    // if (jVarLocalRefreshBSTableId === null === false) {
    //     jVarLocalRefreshBSTableId.addEventListener("click", StartFuncFuncToRun);
    // };
};

export { StartFunc };
