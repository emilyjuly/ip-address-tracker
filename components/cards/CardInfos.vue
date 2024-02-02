<template>
  <div v-if="!ipStore.isLoading" class="absolute-card">
    <div class="infos">
      <div v-for="(item, index) in ipStore.infoItems" :key="index">
        <h1 class="title"> {{ item.title }} </h1>
        <p class="content"> {{ item.content }} </p>
      </div>
    </div>
    <div class="details-container">
      <p @click="showDialog">Details</p>
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
  dialog.value = false
}
</script>

<style scoped>
.absolute-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
  position: absolute;
  z-index: 2;
  background-color: white;
  border-radius: 15px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 1161px;
  height: 200px;
  box-shadow: 0 2px 13px 0 #7536A2;

  @media (max-width: 1264px) {
    flex-direction: column;
    width: 250px;
    height: 220px;
    justify-content: center;
    align-items: center;
    top: -30%;
  }
}

.infos {
  display: flex;
  max-height: 100%;
  width: 100%;
  justify-content: space-around;

  @media (max-width: 1264px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.title {
  font-size: 13px;
  color: #9A9A9A;
  letter-spacing: 0.42px;

  @media (max-width: 1264px) {
    font-size: 7px;
    text-align: center;
  }
}

.content {
  font-size: 20px;
  letter-spacing: 0.75px;

  @media (max-width: 1264px) {
    font-size: 10px;
  }
}

.details-container {
  display: flex;
  justify-content: center;
}

.details-container p {
  text-decoration: underline;
  cursor: pointer;

  @media (max-width: 1264px) {
    font-size: 7px;
    letter-spacing: 1px;
  }
}
</style>