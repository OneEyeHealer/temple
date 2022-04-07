export function DisableButtonPlus(parameter) {
    return parameter <= 1 ? "btn btn-sm btn-secondary disabled" : "btn btn-sm btn-primary"
}
export function DisableButtonMinus(parameter, maxValue) {
    return parameter >= maxValue ? "btn btn-sm btn-secondary disabled" : "btn btn-sm btn-danger"
}

function plusBtn(currentPage) {
    if(currentPage === 1 )
        return "page-item disabled"
    else
        return "page-item active"
    // return currentPage === 1 ? "page-item disabled" : "page-item active";
}
function minusBtn(currentPage, totalResponse) {
    return currentPage === totalResponse ? "page-item disabled" : "page-item active";
}

export {
    plusBtn,
    minusBtn
}