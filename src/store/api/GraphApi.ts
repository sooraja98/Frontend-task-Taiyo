// api/index.ts
import axios from 'axios';
import {useQuery} from 'react-query';

interface CovidData {
    cases: number;
    deaths: number;
    recovered: number;
    active: number;
}

export const fetchCovidData = async () : Promise < CovidData > => {
    const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    return response.data;
};

export const useCovidData = () => {
    return useQuery < CovidData > ('covidData', fetchCovidData);
};
