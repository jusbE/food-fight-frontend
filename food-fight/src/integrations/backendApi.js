import axios from 'axios';

const BACKEND_BASE_URL = 'http://localhost:3001';

export const listFighters = async (name) => {
  const endpoint = `${BACKEND_BASE_URL}/fighterNames`
  const queryParams = {
    name
  }
  return (await axios.get(endpoint, {params: queryParams})).data
}

export const getFighter = async (name) => {
  const endpoint = `${BACKEND_BASE_URL}/fighter`
  const queryParams = {
    name
  }
  return (await axios.get(endpoint, {params: queryParams})).data
}