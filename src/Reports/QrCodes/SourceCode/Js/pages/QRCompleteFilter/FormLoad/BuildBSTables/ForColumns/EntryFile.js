import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as ColumnSerial } from "./ColumnSerial/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnRate = LocalColumns.find(element => element.field === "Rate");

    if (LocalColumnRate === undefined === false) {
        ColumnRate({ inFindColumn: LocalColumnRate });
    };

    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial")
    if (LocalColumnOperateFine === undefined === false) {
        ColumnSerial({ inFindColumn: LocalColumnOperateFine });
    };
};
export { StartFunc };