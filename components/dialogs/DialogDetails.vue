<template>
  <Dialog v-model:visible="props.visible" :closable="false" header="More details" modal>
    <div class="dialog-container">
      <div class="infos-container">
        <h1>IP</h1>
        <div v-for="(item, index) in ipStore.as" :key="index" class="data-container">
          <span v-if="item" class="label">
            {{ index.toUpperCase() }}
          </span>
          <span class="content">
            {{ item || 'This data was not reported' }}
          </span>
        </div>
      </div>
      <div class="infos-container">
        <h1>Location</h1>
        <div v-for="(item, index) in geoStore.infos" :key="index" class="data-container">
          <span class="label">
            {{ (Object.keys(item)[0]).toUpperCase() }}
          </span>
          <span class="content">
            {{ Object.values(item)[0] || 'This data was not reported' }}
          </span>
        </div>
      </div>
    </div>
    <div class="btn-container">
      <Button label="Close" @click="closeDialog"/>
    </div>
  </Dialog>
</template>

<script setup>
import {useIpAddressStore} from '~/stores/ipAddress.ts';
import {useGeocondingStore} from '~/stores/geoconding.ts';

const ipStore = useIpAddressStore()
const geoStore = useGeocondingStore()
const props = defineProps({
  visible: Boolean
})
const emits = defineEmits(['close'])

function closeDialog() {
  emits('close', false)
}
</script>

<style scoped>
.dialog-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 3px;
  gap: 5rem;

  @media (max-width: 706px) {
    flex-direction: column;
    gap: 2rem;
  }
}

.infos-container {
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 0.5rem;

  @media (max-width: 706px) {
    width: 100%;
  }
}

.infos-container h1 {
  font-size: 20px;
  border-bottom: 1px solid black;

  @media (max-width: 706px) {
    font-size: 15px;
  }
}

.data-container {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 14px;
  font-weight: bold;

  @media (max-width: 706px) {
    font-size: 13px;
  }
}

.content {
  margin-left: 3px;
  margin-bottom: 3px;
}

.btn-container {
  display: flex;
  justify-content: flex-end;

  @media (max-width: 706px) {
    height: 15px
  }
}
</style>