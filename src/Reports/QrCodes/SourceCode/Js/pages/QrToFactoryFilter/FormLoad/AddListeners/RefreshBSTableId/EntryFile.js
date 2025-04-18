import { StartFunc as StartFuncfetchasGet } from "./FetchAsGet/entryFile.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("ShowButtonId");

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", StartFuncfetchasGet);
    };
};

export { StartFunc };