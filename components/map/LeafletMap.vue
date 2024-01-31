<template>
  <div class="map">
    <LMap
        v-if="geoStore.location.length > 0"
        ref="map"
        :center="geoStore.location"
        :zoom="zoom"
    >
      <LTileLayer
          attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          layer-type="base"
          name="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LMarker :lat-lng="geoStore.location">
        <LIcon :icon-size="iconSize" :icon-url="'/favicon.ico'"/>
      </LMarker>

    </LMap>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useGeocondingStore} from '~/stores/geoconding.ts';

const zoom = ref(15)
const geoStore = useGeocondingStore()
const iconSize = [60, 60]

onMounted(() => {
  geoStore.changeLocation()
})
</script>

<style scoped>
.map {
  height: 100vh;
  width: 100%;
}
</style>
