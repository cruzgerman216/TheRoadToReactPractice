import axios from "axios";
const baseUrl = "/api/blogs";

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
  console.log(config);
  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const update = (id, newObject) => {
  const config = {
    headers: { Authorization: token }
  };
  const request = axios.put(`${baseUrl}/${id}`, newObject, config);
  return request.then(response => response.data);
};

const deleteblog = id => {
  const config = {
    headers: { Authorization: token }
  };
  const request = axios.delete(`${baseUrl}/${id}`, config);
  return request
    .then(response => response.data)
    .catch(error => console.log(error));
};
export default { getAll, create, update, setToken, deleteblog };

//"build:ui": "rd /s /q build && cd ../notes && npm run build --prod && xcopy ..\\notes\build ..\\part3a\build  /s /i",
