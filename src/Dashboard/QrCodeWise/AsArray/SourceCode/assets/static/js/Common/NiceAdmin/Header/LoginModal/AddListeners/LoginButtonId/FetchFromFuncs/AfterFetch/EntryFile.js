import { StartFunc as PrepareBody } from "../FetchHeaders/PrepareBody.js";

let StartFunc = async ({ Status, inSuccessFunc }) => {
    let LocalStatus = Status;

    if (LocalStatus.status === 200) {
        jFLocalModalClose();
        jFLocalToLocalStorage();
        inSuccessFunc();
        // console.log("inSuccessFunc",inSuccessFunc);
    }
    if (LocalStatus.status === 401) {
        jFLocalModalInputFocus();
    }
};

const jFLocalToLocalStorage = () => {
    const jVarLocalFetchBody = PrepareBody();
    localStorage.setItem("KUserName", jVarLocalFetchBody.UserName);
};

let jFLocalModalClose = () => {
    const loginModalElement = document.getElementById('LoginModalId');
    const myModalAlternative = bootstrap.Modal.getInstance(loginModalElement);
    if (myModalAlternative) {
        myModalAlternative.hide();
    };
};

let jFLocalModalInputFocus = () => {
    let jVarLocalUsernameId = document.getElementById('UsernameId');
    let jVarLocalPasswordId = document.getElementById('PasswordId');
    jVarLocalUsernameId.classList.add("is-invalid");
    jVarLocalPasswordId.classList.add("is-invalid");
};




export { StartFunc };