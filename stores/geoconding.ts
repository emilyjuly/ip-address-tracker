import {defineStore} from 'pinia';
import {fetchGeocodingData} from '~/services/geocoding';
import {useIpAddressStore} from '~/stores/ipAddress.ts';
import type {AxiosResponse} from "axios";

export const useGeocondingStore = defineStore('geoconding', {
    state: () => ({
        location: [], infos: ''
    }),
    actions: {
        async changeLocation(): Promise<void> {
            this.location = []
            const apiKey = useRuntimeConfig().public.API_KEY_GEO;
            const ipStore = useIpAddressStore();

            try {
                const result: AxiosResponse = await fetchGeocodingData(apiKey, ipStore.location);
                this.infos = [
                    {oldName: result.features[0].properties.old_name},
                    {country: `${result.features[0].properties.country} - ${(result.features[0].properties.country_code).toUpperCase()}`},
                    {state: `${result.features[0].properties.state} - ${result.features[0].properties.state_code}`},
                    {city: result.features[0].properties.city}
                ]
                if (result) {
                    const reverseLocation = (result.features[0].geometry.coordinates)
                    this.location.push(reverseLocation[1])
                    this.location.push(reverseLocation[0])
                }

            } catch {
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Invalid IP, please try another address",
                });
            }
        }
    }
})