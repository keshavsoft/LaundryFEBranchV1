import { StartFunc as QrCodes } from "./QrCodes/Entry.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    try {
        let a = QrCodes();

        StartFuncAfterFetch(a);
    } catch (e) {
        alert("error from Promise All");
    };
};

export { StartFunc }