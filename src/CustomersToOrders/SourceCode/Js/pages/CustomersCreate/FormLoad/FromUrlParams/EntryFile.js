let StartFunc = () => {
    localBranchInputFunc();
    let jVarLocalBranchId = 'BranchNameId';
    let jVarlocalBranch = document.getElementById(jVarLocalBranchId);
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    if (jVarlocalBranch === null === false) {
    const modifiedString = jVarLocalBranchName.replace("BranOrders", "");

        jVarlocalBranch.innerHTML = modifiedString;
    };
};

let localBranchInputFunc = () =>  {
    
    let jVarLocalBranchId='BranchName';
    let jVarlocalBranch=document.getElementById(jVarLocalBranchId);
    let jVarLocalBranchName=localStorage.getItem("BranchName");
    const modifiedBranch = jVarLocalBranchName.replace("BranOrders", "");

    if(jVarlocalBranch===null===false){
        jVarlocalBranch.value=modifiedBranch;
    }


};

export { StartFunc }