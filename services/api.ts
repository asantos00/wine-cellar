import axios, { AxiosResponse } from 'axios';

export interface Wine {
  name: string,
  year: number
}

export const getWines = () => {
  return axios.get<Wine[]>('/wines')
    .then(({ data }) => data)
}
