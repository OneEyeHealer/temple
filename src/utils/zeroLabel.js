export function ZeroLabel(value) {
    return (
        value === 0 ? "Zero" : value
    );
}
export function itemTally(tallyItemList, tallyItem) {
    return tallyItem && tallyItem._id
        ? tallyItemList.filter((item) => item.category._id === tallyItem._id).length
        : tallyItemList.length;
}