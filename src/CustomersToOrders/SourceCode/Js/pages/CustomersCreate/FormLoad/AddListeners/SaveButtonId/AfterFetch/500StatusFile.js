let StartFunc = ({ inResponse }) => {

    Swal.fire({
        title: "Error Alert",
        text: `${inResponse}`,
        icon: "error",
        confirmButtonColor: "#3085d6",
    }).then((result) => {

        if (result.isConfirmed || result.isDismissed) {
            InputPkId();
        }
    });
};

const InputPkId = () => {
    let jVarLocalHtmlId = 'Mobile';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalLength = jVarLocalInputPkId.value.trim().length;
    jVarLocalInputPkId.setSelectionRange(0, jVarLocalLength);

};

export { StartFunc }