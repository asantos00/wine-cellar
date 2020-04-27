import { getWines } from './api';
import axios from 'axios';


it('should do a http request to /wines', () => {
  axios.get = jest.fn().mockResolvedValue({ data: [] })

  getWines();

  expect(axios.get).toHaveBeenCalledWith('/wines');
})
