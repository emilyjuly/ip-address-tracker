<template>
  <header>
    <div class="top">
      <h1>IP Address Tracker</h1>
      <form @submit.prevent="ipStore.search(searchValue)">
        <div class="p-input-icon-right search-input-container">
          <InputText class="search-input" v-model="searchValue" size="large" placeholder="Search for any IP address" />
          <button type="submit" class="pi pi-angle-right search-input-icon-button"></button>
        </div>
        <div class="absolute-card" v-if="!ipStore.isLoading">
          <div class="card-content" v-for="(item, index) in ipStore.infoItems" :key="index">
            <h1 class="title"> {{ item.title }} </h1>
            <p class="content"> {{ item.content }} </p>
          </div>
        </div>
      </form>
    </div>
  </header>
  <section v-if="!ipStore.isLoading">
    <LeafletMap />
  </section>
  <div v-if="ipStore.isLoading" class="overlay"></div>
  <ProgressSpinner v-if="ipStore.isLoading" class="loading-spinner" animationDuration=".5s" />
</template>

<script setup>
import '~/assets/css/main.css'
import { ref } from 'vue';
import LeafletMap from "~/components/LeafletMap.vue";
import { useIpAddressStore } from "~/stores/ipAddress.ts";
import axios from "axios";

const ipStore = useIpAddressStore()
const searchValue = ref(null)

onMounted(async() => {
  try {
    const response = await axios.get('https://api.ipify.org?format=json')
    await ipStore.search(response.data.ip)
  } catch (error) {
    console.error('Não foi possível obter o IP', error)
  }
})
</script>

<style scoped>
header {
  position: relative;
  background-image: url('../assets/images/bg-image.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
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
  font-size: 40px;
  font-weight: 500;

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

.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.search-input-container {
  display: flex;
  align-items: center;
  height: 70px;

  @media (max-width: 1264px) {
    height: 50px
  }

  @media (max-width: 910px) {
    height: 30px
  }
}

.search-input {
  outline: none;
  border: none;
  width: 686px;
  height: 100%;
  border-radius: 15px 0 0 15px;

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
  border: none;
  color: white;
  width: 75px;
  height: 100%;
  font-size: 22px;
  border-radius: 0 15px 15px 0;
  background: #7536A2;
  cursor: pointer;
  transition: 0.3s;

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

section {
  position: relative;
  z-index: 1;
}

.absolute-card {
  display: flex;
  justify-content: space-around;
  padding: 30px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, 50%);
  margin-top: -50px;
  z-index: 2;
  width: 1161px;
  height: 169px;
  border-radius: 15px;
  background: white;
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
  font-size: 14px;
  font-weight: 500;
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
  color: #000;
  font-size: 25px;
  font-weight: 500;
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.loading-spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
</style>

