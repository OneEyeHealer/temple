import http from "./httpService";
const apiEndPoint = `offerings`;

export function getOfferings() {
    return http.get(apiEndPoint);
}
export function getOffering(offeringId) {
    return http.get(`${apiEndPoint}/${offeringId}`);
}
export function saveOffering(offering) {
    if(offering._id){
        const body = {...offering};
        delete body._id;
        return http.put(`${apiEndPoint}/${offering._id}`, body);
    }
    return http.post(apiEndPoint, offering);
}

export function deleteOffering(offeringId) {
    return http.delete(apiEndPoint + "/" + offeringId);
}

export function submitOfferingTime(time) {
    return new Date(time);
}
