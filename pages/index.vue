<template>
  <header>
    <h1>IP Address Tracker</h1>
    <InputSearch/>
  </header>
  <section v-if="!ipStore.isLoading" class="relative z-1">
    <LeafletMap/>
  </section>
  <div v-if="ipStore.isLoading" class="overlay">
    <span class="loading-spinner text-white text-md fixed">Loading...</span>
  </div>
</template>

<script setup>
import '~/assets/css/main.css';
import {ref} from 'vue';
import LeafletMap from '~/components/map/LeafletMap.vue';
import {useIpAddressStore} from '~/stores/ipAddress.ts';
import axios from 'axios';
import InputSearch from '~/components/inputs/InputSearch.vue';

const ipStore = useIpAddressStore()
const checked = ref(false)

onMounted(async () => {
  try {
    const response = await axios.get('https://api.ipify.org?format=json')
    await ipStore.search(response.data.ip)
  } catch (error) {
    console.error(error)
  }
})
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  background-image: url('../assets/images/bg-image.png');
  height: 30vh;

  @media (max-width: 1264px) {
    height: 20vh;
  }

  @media (max-width: 910px) {
    height: 15vh;
  }

  @media (max-width: 706px) {
    height: 15vh;
  }
}

header h1 {
  color: white;
  font-size: 35px;
  letter-spacing: 1px;
  font-weight: 300;
  @media (max-width: 1264px) {
    font-size: 20px;
  }

  @media (max-width: 910px) {
    font-size: 15px;
  }

  @media (max-width: 706px) {
    font-size: 10px;
  }
}

.overlay {
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}

.loading-spinner {
  letter-spacing: 0.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

