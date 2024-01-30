import axios, {AxiosInstance, AxiosResponse} from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'https://geo.ipify.org/api/v2/country',
});

export const fetchIpAddressData = async (apiKey: string, ipAddress: string): Promise<AxiosResponse> => {
    try {
        const {data} = await api.get(`?apiKey=${apiKey}&ipAddress=${ipAddress}`);
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




