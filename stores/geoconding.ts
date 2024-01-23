import { defineStore } from "pinia";
import axios from "axios";
import { useIpAddressStore } from "~/stores/ipAddress.ts";

export const useGeocondingStore = defineStore('geoconding', {
    state: () => ({location: ''}),
    actions: {
        async changeLocation() {
            this.location = ''
            const api = axios.create({
                baseURL: 'https://api.geoapify.com/v1/geocode/'
            })
            const apiKey = useRuntimeConfig().public.API_KEY_GEO;
            const ipStore = useIpAddressStore()

            try {
                const { data } = await api.get(`search?text=${ipStore.location.region},${ipStore.location.country}&apiKey=${apiKey}`)
                console.log(data)
                this.location = (data.features[0].geometry.coordinates);
            } catch (error) {
                console.error(error)
            }
        }
    }
})