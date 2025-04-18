import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnSettlement } from "./ColumnSettlement/entryFile.js";
import { StartFunc as ColumnQrCodes } from "./ColumnQrCodes/entryFile.js";
import { StartFunc as ColumnBillprint } from "./ColumnBillprint/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial")
    let LocalColumnSettlement = LocalColumns.find(element => element.field === "AggValues.SettlementAmount")
    let LocalColumnQrCodes = LocalColumns.find(element => element.field === "TotalItems")
    let LocalColumnBillprint = LocalColumns.find(element => element.field === "Billprint")

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalColumnSettlement === undefined === false) {
        ColumnSettlement({ inFindColumn: LocalColumnSettlement });
    };

    if (LocalColumnQrCodes === undefined === false) {
        ColumnQrCodes({ inFindColumn: LocalColumnQrCodes });
    };
    if (LocalColumnBillprint === undefined === false) {
        ColumnBillprint({ inFindColumn: LocalColumnBillprint });
    };

};

export { StartFunc };