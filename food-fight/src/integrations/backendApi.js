import axios from 'axios';

const BACKEND_BASE_URL = 'http://localhost:3001/fighterNames?name=';

export const listFighters = async (name) => {
  return (await axios.get(`${BACKEND_BASE_URL}${name}`)).data
}