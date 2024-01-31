<template>
  <Dialog v-model:visible="props.visible" :closable="false" :style="{ width: '60rem' }" header="More details"
          modal>
    <div class="flex justify-content-around mb-3">
      <div class="flex flex-column w-5">
        <h1 class="border-bottom-1">IP informations</h1>
        <span class="font-bold">ASN:</span> <span class="ml-3 mb-3">{{ ipStore.as.asn }}</span>
        <span class="font-bold">Name:</span> <span class="ml-3 mb-3">{{ ipStore.as.name }}</span>
        <span class="font-bold">Route:</span> <span class="ml-3 mb-3">{{ ipStore.as.route }}</span>
        <span class="font-bold">Domain:</span> <span class="ml-3 mb-3">{{ ipStore.as.domain }}</span>
        <span class="font-bold">Type:</span> <span class="ml-3 mb-3">{{ ipStore.as.type }}</span>
      </div>
      <div class="flex flex-column w-5">
        <h1 class="border-bottom-1">Location informations</h1>
        <span class="font-bold">Old name:</span> <span class="ml-3 mb-3">{{ geoStore.moreInformations.old_name }}</span>
        <span class="font-bold">Country:</span> <span class="ml-3 mb-3">{{
          geoStore.moreInformations.country
        }} - {{ (geoStore.moreInformations.country_code.toUpperCase()) }}</span>
        <span class="font-bold">Region:</span> <span
          class="ml-3 mb-3">{{ geoStore.moreInformations.region }}</span>
        <span class="font-bold">State:</span> <span class="ml-3 mb-3">{{
          geoStore.moreInformations.state
        }} - {{ (geoStore.moreInformations.state_code).toUpperCase() }}</span>
        <span class="font-bold">City:</span> <span class="ml-3 mb-3">{{ geoStore.moreInformations.city }}</span>
      </div>
    </div>
    <div class="flex justify-content-end">
      <Button label="Fechar" @click="closeDialog"/>
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