<template>
  <Dialog v-model:visible="props.visible" :closable="false" :style="{ width: '60rem' }" header="More details" modal>
    <div class="flex justify-content-around mb-3">
      <div class="flex flex-column w-5">
        <h1 class="border-bottom-1">IP informations</h1>
        <div v-for="(item, index) in ipStore.as" :key="index" class="flex flex-column">
          <span v-if="item" class="font-bold">
            {{ index.toUpperCase() }}
          </span>
          <span class="ml-3 mb-3">
            {{ item }}
          </span>
        </div>
      </div>
      <div class="flex flex-column w-5">
        <h1 class="border-bottom-1">Location informations</h1>
        <div v-for="(item, index) in geoStore.infos" :key="index" class="flex flex-column ">
          <span v-if="item" class="font-bold">
            {{ (Object.keys(item)[0]).toUpperCase() }}
          </span>
          <span
              class="ml-3 mb-3">{{ Object.values(item)[0] }}
          </span>
        </div>
      </div>
    </div>
    <div class="flex justify-content-end">
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