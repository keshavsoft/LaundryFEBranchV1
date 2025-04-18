import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as ColumnSerial } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnStatus } from "./ColumnStatus/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnRate = LocalColumns.find(element => element.field === "Rate");
    let LocalColumnStatus = LocalColumns.find(element => element.field === "Status");
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial")

    if (LocalColumnRate === undefined === false) {
        ColumnRate({ inFindColumn: LocalColumnRate });
    };

    if (LocalColumnOperateFine === undefined === false) {
        ColumnSerial({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalColumnStatus === undefined === false) {
        ColumnStatus({ inFindColumn: LocalColumnStatus });
    };
};
export { StartFunc };