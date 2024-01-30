import {defineStore} from 'pinia';
import {useGeocondingStore} from '~/stores/geoconding.ts';
import {fetchIpAddressData} from '~/services/ipAddress';
import type {AxiosResponse} from "axios";

export const useIpAddressStore = defineStore('ipAddress', {
    state: () => ({
        isLoading: true,
        ip: '',
        location: '',
        timezone: '',
        isp: '',
        infoItems: [
            {title: 'IP ADDRESS', content: ''},
            {title: 'LOCATION', content: ''},
            {title: 'TIMEZONE', content: ''},
            {title: 'ISP', content: ''}
        ]
    }),
    actions: {
        async search(value: string): Promise<void> {
            const apiKey = useRuntimeConfig().public.API_KEY_IP;
            const geoStore = useGeocondingStore();

            try {
                this.isLoading = true;
                const result: AxiosResponse = await fetchIpAddressData(apiKey, value);

                if (result) {
                    this.location = result.location;
                    this.timezone = result.location.timezone;
                    this.isp = result.isp;
                    this.ip = result.ip;

                    this.infoItems[0].content = result.ip;
                    this.infoItems[1].content = `${result.location.region}, ${result.location.country}`;
                    this.infoItems[2].content = result.location.timezone;
                    this.infoItems[3].content = result.isp;

                    await geoStore.changeLocation();
                }


            } catch {
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Invalid IP, please try another address",
                });
            } finally {
                this.isLoading = false;
            }
        }
    },
})