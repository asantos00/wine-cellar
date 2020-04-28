import { render, cleanup, waitFor } from '@testing-library/react'
import Home from './index';
import * as Api from '../services/api';

afterEach(() => {
  jest.clearAllMocks()
  cleanup();
});

jest.mock('../services/api');

it('tries to get wines', async () => {
  const getWines = jest.fn().mockResolvedValue([]);

  // @ts-ignore
  Api.getWines = getWines;

  render(<Home />)

  await waitFor(() => {
    expect(getWines).toHaveBeenCalled();
  })
})

it('renders wines coming from client', async () => {
  const getWines = jest.fn().mockResolvedValue([
    { name: 'Douro', year: 2019 },
    { name: 'Alentejo', year: 2020 }
  ]);

  // @ts-ignore
  Api.getWines = getWines;

  const { getByText } = render(<Home />)

  await waitFor(() => {
    expect(getWines).toHaveBeenCalled();
    expect(getByText('Douro 2019')).toBeTruthy();
    expect(getByText('Alentejo 2020')).toBeTruthy();
  })
})
