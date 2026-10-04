import axios from "axios";

const baseUrl = "/api/notes";

export const getAll = () => {
    return axios.get(baseUrl).then((response) => response.data);
};

export const create = (newObject) => {
    return axios.post(baseUrl, newObject).then((response) => response.data);
};

export const update = (id, newObject) => {
    return axios
        .put(`${baseUrl}/${id}`, newObject)
        .then((response) => response.data);
};

/*
export default {
    getAll: getAll,
    create: create,
    update: update,
};
*/
export default { getAll, create, update, };