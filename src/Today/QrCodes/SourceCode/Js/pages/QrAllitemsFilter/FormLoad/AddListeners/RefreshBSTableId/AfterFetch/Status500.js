
let StartFunc = ({ inData }) => {
    Swal.fire({
        title: `No Data ${inData.KReason} `,
        text: 'I will close in 2 seconds.',
        timer: 2000
    })
};

export { StartFunc };