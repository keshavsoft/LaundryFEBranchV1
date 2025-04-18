import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";
import IconsJson from './icons.json' with {type: 'json'};
import AttributesJson from './Attributes.json' with {type: 'json'};
import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";


const StartFunc = () => {

    jFPrepareColumns();
};

var $table = $('#table');
optionsJson.onExpandRow = StartFuncOnExpandRow;
optionsJson.icons = IconsJson;
ForColumns({ inColumns: optionsJson.columns });
$table.bootstrapTable(optionsJson);

const jFPrepareColumns = () => {
    jFPrepareOrder();
    jFPrepareCustomer();
    jFPrepareMobile();
    jFPrepareDate();
    jFPrepareItems();
};

const jFPrepareOrder = () => {
    var $customer = $('#OrderId');

    $customer.attr(AttributesJson.coloumnAttributes.orderAttributes);
};

const jFPrepareCustomer = () => {
    var $customer = $('#CustomerId');

    $customer.attr(AttributesJson.coloumnAttributes.customerAttributes);
};

const jFPrepareMobile = () => {
    var $mobile = $('#MobileId');

    $mobile.attr(AttributesJson.coloumnAttributes.mobileAttributes);
};

const jFPrepareDate = () => {
    var $mobile = $('#DateId');

    $mobile.attr(AttributesJson.coloumnAttributes.dateAttributes);
};

const jFPrepareItems = () => {
    var $mobile = $('#ItemsId');

    $mobile.attr(AttributesJson.coloumnAttributes.ItemsAttributes);
};

export { StartFunc };