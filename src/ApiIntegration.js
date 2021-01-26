import axios from "axios";
export const API_BASE_URL = "http://zapio-admin.com/api";

export const listBusinessTypeAPI = callback => {
    let url = `${API_BASE_URL}/v2/brand/businesstype/`;
    axios
        .get(url)
        .then(response => {
            callback &&
                callback({
                    status: "success",
                    response: response
                });
        })
        .catch(error => {
            console.log("aaaaaaaaaaaaaa", error)
            // handlerError(error, callback);
        });
};

export const listCountryAPI = callback => {
    let url = `${API_BASE_URL}/v2/brand/country/`;
    axios
        .get(url)
        .then(response => {
            callback &&
                callback({
                    status: "success",
                    response: response
                });
        })
        .catch(error => {
            console.log("aaaaaaaaaaaaaa", error)
            // handlerError(error, callback);
        });
};

export const listStateAPI = (country, callback) => {
    let url = `${API_BASE_URL}/v2/brand/state/`;
    axios
        .post(url, { country: country })
        .then(response => {
            callback &&
                callback({
                    status: "success",
                    response: response
                });
        })
        .catch(error => {
            console.log("aaaaaaaaaaaaaa", error)
            // handlerError(error, callback);
        });
};
export const listCityAPI = (state, callback) => {
    let url = `${API_BASE_URL}/v2/brand/city/`;
    axios
        .post(url, { state: state })
        .then(response => {
            callback &&
                callback({
                    status: "success",
                    response: response
                });
        })
        .catch(error => {
            console.log("aaaaaaaaaaaaaa", error)
            // handlerError(error, callback);
        });
};




export const addBrandAPI = (brand, businessType, city, country, email, mobile, state, website, callback) => {

    let url = `${API_BASE_URL}/v2/brand/create/`;
    const formData = new FormData();
    formData.append("company_name", brand);
    formData.append("business_nature", businessType);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("company_email_id", email);
    formData.append("company_contact_no", mobile);
    formData.append("website", website);
    axios
        .post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then(response => {
            callback &&
                callback({
                    status: "success",
                    response: response
                });
        })
        .catch(error => {
            console.log("aaaaaaaaaaaaaa", error)
        });
};


export const VerifyEmailAPI = (id, callback) => {

    let url = `${API_BASE_URL}/v2/brand/active/`;
    const formData = new FormData();
    formData.append("id", id);
    axios
        .post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then(response => {
            callback &&
                callback({
                    status: "success",
                    response: response
                });
        })
        .catch(error => {
            console.log("aaaaaaaaaaaaaa", error)
        });
};