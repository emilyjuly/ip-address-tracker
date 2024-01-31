<template>
  <header class="bg-cover bg-no-repeat relative">
    <div class="flex flex-column align-items-center	justify-content-center">
      <div class="header">
        <h1 class="text-white font-medium text-3xl">IP Address Tracker</h1>
      </div>
      <form @submit.prevent="ipStore.search(searchValue)">
        <div class="p-input-icon-right search-input-container flex align-items-center h-4rem">
          <InputText v-model="searchValue" class="search-input border-none outline-none h-full text-lg p-3"
                     placeholder="Search for any IP address" size="large"/>
          <button
              class="pi pi-angle-right search-input-icon-button border-none text-white h-full text-lg cursor-pointer transition-delay-200"
              type="submit"/>
        </div>
        <div v-if="!ipStore.isLoading"
             class="absolute-card flex justify-content-around p-5 absolute z-2 bg-white border-round-xl">
          <div v-for="(item, index) in ipStore.infoItems" :key="index" class="card-content">
            <h1 class="title text-sm font-normal"> {{ item.title }} </h1>
            <p class="content text-black font-normal text-2xl"> {{ item.content }} </p>
          </div>
        </div>
      </form>
    </div>
  </header>
  <section v-if="!ipStore.isLoading" class="relative z-1">
    <LeafletMap/>
  </section>
  <div v-if="ipStore.isLoading" class="overlay fixed h-full w-full">
    <span class="loading-spinner text-white text-md fixed">Loading...</span>
  </div>
</template>

<script setup>
import '~/assets/css/main.css';
import {ref} from 'vue';
import LeafletMap from '~/components/LeafletMap.vue';
import {useIpAddressStore} from '~/stores/ipAddress.ts';
import axios from 'axios';

const ipStore = useIpAddressStore()
const searchValue = ref(null)
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

.search-input-container {
  @media (max-width: 1264px) {
    height: 50px
  }

  @media (max-width: 910px) {
    height: 30px
  }
}

.search-input {
  border-radius: 15px 0 0 15px;
  width: 688px;

  @media (max-width: 1264px) {
    border-radius: 10px 0 0 10px;
    font-size: 15px;
    width: 500px;
  }

  @media (max-width: 910px) {
    border-radius: 5px 0 0 5px;
    font-size: 10px;
    width: 400px;
  }

  @media (max-width: 706px) {
    height: 20px;
    width: 300px;
  }
}

.search-input-icon-button {
  width: 75px;
  border-radius: 0 15px 15px 0;
  background: #7536A2;

  @media (max-width: 1264px) {
    border-radius: 0 10px 10px 0;
    width: 50px;
    font-size: 15px;
  }

  @media (max-width: 910px) {
    border-radius: 0 5px 5px 0;
    width: 30px;
  }
}

.search-input-icon-button:hover {
  transition: 0.2s;
  background-color: #9f4adc;
}

.absolute-card {
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  margin-top: -50px;
  width: 1161px;
  height: 130px;
  box-shadow: 0 2px 13px 0 #7536A2;

  @media (max-width: 1264px) {
    height: 100px;
    width: 800px;
    padding: 10px;
    top: 70%;
  }

  @media (max-width: 910px) {
    height: 80px;
    width: 600px;
    top: 80%;
    border-radius: 10px;
  }

  @media (max-width: 706px) {
    flex-direction: column;
    width: 200px;
    height: 150px;
    justify-content: center;
    align-items: center;
    top: 30%;
  }
}

.title {
  color: #9A9A9A;
  letter-spacing: 0.42px;

  @media (max-width: 1264px) {
    font-size: 10px;
  }

  @media (max-width: 706px) {
    font-size: 7px;
    text-align: center;
  }
}

.content {
  letter-spacing: 0.75px;

  @media (max-width: 1264px) {
    font-size: 15px;
  }

  @media (max-width: 910px) {
    font-size: 10px;
  }

  @media (max-width: 706px) {
    font-size: 7px;
  }
}

.overlay {
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

