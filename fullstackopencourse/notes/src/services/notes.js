import axios from "axios";
const baseUrl = "/api/notes";

let token = null;

const setToken = newToken => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = async newObject => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl} /${id}`, newObject);
  return request.then(response => response.data);
};

export default { getAll, create, update, setToken };

//"build:ui": "rd /s /q build && cd ../notes && npm run build --prod && xcopy ..\\notes\build ..\\part3a\build  /s /i",
