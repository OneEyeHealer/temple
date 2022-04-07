import _ from 'lodash';

export function paginateData(data, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
   return  _(data).slice(startIndex).take(pageSize).value();
}
export function hasPrevious(pageNo, itemPerPage, totalResponse) {
    if (itemPerPage > totalResponse || pageNo === 1)
        return "page-item disabled"
    else
        return "page-item active"
}
export function hasNext(pageNo, itemPerPage, totalResponse) {
    if (itemPerPage > totalResponse || pageNo === itemPerPage)
        return "page-item disabled"
    else
        return "page-item active"
}
