import axios, {AxiosInstance, AxiosResponse} from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'https://api.geoapify.com/v1/geocode/',
});

export const fetchGeocodingData = async (apiKey: string, location: string): Promise<AxiosResponse> => {
    try {
        const {data} = await api.get(`search?text=${location.region},${location.country}&apiKey=${apiKey}`);
        return data;
    } catch {
        if (error.response) {
            throw new Error(`Server error: ${error.response.status}`);
        } else if (error.request) {
            throw new Error('No response from server');
        } else {
            throw error;
        }
    }
}




