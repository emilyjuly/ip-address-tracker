import { defineStore } from "pinia";
import axios from "axios";
import { useGeocondingStore } from "~/stores/geoconding.ts";
import Swal from 'sweetalert2'

export const useIpAddressStore = defineStore('ipAddress', {
    state: () => ({isLoading: true, ip: '', location: '', timezone: '', isp: '', infoItems: [{title: 'IP ADDRESS', content: ''},{title: 'LOCATION', content: ''},{title: 'TIMEZONE', content: ''},{title: 'ISP', content: ''}] }),
    actions: {
        async search(value): Promise<void> {
            const api = axios.create({
                baseURL: 'https://geo.ipify.org/api/v2/country',
            });

            const apiKey = useRuntimeConfig().public.API_KEY_IP;
            const geoStore = useGeocondingStore();

            try {
                const { data } = await api.get(`?apiKey=${apiKey}&ipAddress=${value}`);

                this.location = data.location;
                this.timezone = data.location.timezone;
                this.isp = data.isp;
                this.ip = data.ip;

                this.infoItems[0].content = data.ip;
                this.infoItems[1].content = `${data.location.region}, ${data.location.country}`;
                this.infoItems[2].content = data.location.timezone;
                this.infoItems[3].content = data.isp;
                await geoStore.changeLocation();
                this.isLoading = false;
            } catch (error) {
                console.error(error)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Invalid IP, please try another address",
                });
                this.isLoading = false;
            }
        }
    },
})