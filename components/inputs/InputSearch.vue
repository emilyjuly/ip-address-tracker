<template>
  <form @submit.prevent="ipStore.search(searchValue)">
    <div class="p-input-icon-right search-input-container flex align-items-center h-4rem">
      <InputText v-model="searchValue" class="search-input border-none outline-none h-full text-lg p-3"
                 placeholder="Search for any IP address" size="large"/>
      <button
          class="pi pi-angle-right search-input-icon-button border-none text-white h-full text-lg cursor-pointer transition-delay-200"
          type="submit"/>
    </div>
    <CardInfos/>
  </form>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {useIpAddressStore} from '~/stores/ipAddress';
import CardInfos from '~/components/cards/CardInfos.vue';

const ipStore = useIpAddressStore()
const searchValue = ref(null)

</script>

<style scoped>
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

</style>