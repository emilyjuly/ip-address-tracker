<template>
  <div v-if="!ipStore.isLoading"
       class="absolute-card flex flex-column p-5 absolute z-2 bg-white border-round-xl">
    <div class="flex justify-content-around">
      <div v-for="(item, index) in ipStore.infoItems" :key="index" class="card-content">
        <h1 class="title text-sm font-normal"> {{ item.title }} </h1>
        <p class="content text-black font-normal text-2xl"> {{ item.content }} </p>
      </div>
    </div>
    <div class="flex justify-content-center">
      <p class="underline cursor-pointer" @click="showDialog">Details</p>
    </div>
  </div>
  <dialog-details :visible="dialog" @close="handleDialogClose"/>
</template>

<script lang="ts" setup>
import {useIpAddressStore} from '~/stores/ipAddress';
import {ref} from 'vue';
import DialogDetails from '~/components/dialogs/DialogDetails.vue';

const ipStore = useIpAddressStore()
const dialog = ref(false)

function showDialog() {
  dialog.value = true
}

function handleDialogClose() {
  console.log('chamando')
  dialog.value = false
}
</script>

<style scoped>
.absolute-card {
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  margin-top: -50px;
  width: 1161px;
  height: 200px;
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
</style>