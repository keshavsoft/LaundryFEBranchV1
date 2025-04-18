import { StartFunc as LoginModal } from "../../../assets/static/js/Common/NiceAdmin/Header/LoginModal/EntryFile.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = LoginModal();

    if (jVarLocalFromAdmin) {
        jFLocalLeftSide();
    };
};

const jFLocalLeftSide = () => {
    document.querySelector(".revenue-card").querySelector("h6").innerHTML = "16";
};

StartFunc();