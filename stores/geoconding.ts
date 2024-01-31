import {defineStore} from 'pinia';
import {fetchGeocodingData} from '~/services/geocoding';
import {useIpAddressStore} from '~/stores/ipAddress.ts';
import type {AxiosResponse} from "axios";

export const useGeocondingStore = defineStore('geoconding', {
    state: () => ({
        location: [], moreInformations: {}
    }),
    actions: {
        async changeLocation(): Promise<void> {
            this.location = []
            const apiKey = useRuntimeConfig().public.API_KEY_GEO;
            const ipStore = useIpAddressStore();

            try {
                const result: AxiosResponse = await fetchGeocodingData(apiKey, ipStore.location);
                this.moreInformations = result.features[0].properties

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