import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/media';

async function getAll() {
  const response = await axios.get(baseUrl);
  return response.data;
}

async function update(id, newBookmark) {
  const currentToken = localStorage.getItem('token')
  const config = {headers: {Authorization: currentToken}}
  const response = await axios.patch(`${baseUrl}/${id}`, newBookmark, config);
  return response.data;
}

const dataServices = { getAll, update };
export default dataServices;
