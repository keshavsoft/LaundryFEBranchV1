import { StartFunc as ColumnSerial } from "./ColumnSerial/entryFile.js";
import { StartFunc as OrderDate } from "./OrderDate/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;

    let LocalColumnColumnSerial = LocalColumns.find(element => element.field === "KS-Serial");

    if (LocalColumnColumnSerial === undefined === false) {
        ColumnSerial({ inFindColumn: LocalColumnColumnSerial });
    };

    let LocalColumnOrderDate = LocalColumns.find(element => element.field === "OrderDateTime");

    if (LocalColumnOrderDate === undefined === false) {
        OrderDate({ inFindColumn: LocalColumnOrderDate });
    };
   
};

export { StartFunc };