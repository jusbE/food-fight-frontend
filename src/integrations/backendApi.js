import axios from 'axios';

const BACKEND_BASE_URL = 'http://food-fight-backend.herokuapp.com';

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

export const getBattlelog = async (fighter1, fighter2) => {
  const endpoint = `${BACKEND_BASE_URL}/fight`
  const queryParams = {
    name1: fighter1,
    name2: fighter2
  }
  return (await axios.get(endpoint, {params: queryParams})).data
}