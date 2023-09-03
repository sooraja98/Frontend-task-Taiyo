// api/index.ts
import axios from 'axios';
import { useQuery } from 'react-query';

export const fetchCovidData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/all');
  return response.data;
};

export const useCovidData = () => {
  return useQuery('covidData', fetchCovidData);
};
