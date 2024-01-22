<template>
  <header>
    <div class="top">
      <h1>IP Address Tracker</h1>
      <form @submit.prevent="handleSubmit">
        <div class="p-input-icon-right search-input-container">
          <InputText class="search-input" v-model="searchValue" size="large" placeholder="Search for any IP address or domain" />
          <button type="submit" class="pi pi-angle-right search-input-icon-button"></button>
        </div>
        <div class="absolute-card">
          <div class="card-content" v-for="item in infoItems" :key="item">
            <h1 class="title"> {{ item.title }} </h1>
            <p class="content"> {{ item.content }} </p>
          </div>
        </div>
      </form>
    </div>
  </header>
  <section>
    <img src="~/assets/images/map.png" alt="Mapa"/>
  </section>
</template>

<script setup>
import '~/assets/css/main.css'
import { ref } from 'vue';

const searchValue = ref(null);

const handleSubmit = () => {
  console.log('Form submitted with value:', searchValue.value);
};

const infoItems = [
  {
    title: 'IP ADDRESS',
    content: '192.212.174.101'
  },
  {
    title: 'LOCATION',
    content: 'Brooklyn, NY 1001'
  },
  {
    title: 'TIMEZONE',
    content: 'UTC - 05:00'
  },
  {
    title: 'ISP',
    content: 'SpaceX Starlink'
  },
]
</script>

<style scoped>
header {
  position: relative;
  background-image: url('../assets/images/bg-image.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 30vh;
}

header h1 {
  color: white;
  font-size: 40px;
  font-weight: 500;
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
}

.search-input {
  width: 686px;
  height: 100%;
  border-radius: 15px 0 0 15px;
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
}

.search-input-icon-button:hover {
  transition: 0.2s;
  background-color: #9f4adc;
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
}

.title {
  color: #9A9A9A;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.42px;
}

.content {
  color: #000;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 0.75px;
}

section img {
  width: 100%;
}
</style>
