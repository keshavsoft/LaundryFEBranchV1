import { StartFunc as YesterdayRefreshButtonId } from "./YesterdayRefreshButtonId/EntryFile.js";
import { StartFunc as ThisWeekTableId } from "./ThisWeekTableId/EntryFile.js";
import { StartFunc as AllTableId } from "./AllTableId/EntryFile.js";
import { StartFunc as TodayTable } from "./TodayTable/EntryFile.js";


let StartFunc = () => {
    YesterdayRefreshButtonId();
    ThisWeekTableId();
    AllTableId();
    TodayTable();
    
};

export { StartFunc }