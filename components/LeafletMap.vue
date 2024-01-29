<template>
  <div class="map">
    <LMap
        ref="map"
        :zoom="zoom"
        :center="geoStore.location"
        v-if="geoStore.location.length > 0"
    >
      <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          layer-type="base"
          name="OpenStreetMap"
      />

      <LMarker :lat-lng="geoStore.location">
        <LIcon :icon-url="'/favicon.ico'" :icon-size="iconSize"/>
      </LMarker>

    </LMap>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGeocondingStore } from '~/stores/geoconding.ts';

const zoom = ref(15)
const geoStore = useGeocondingStore()
const iconSize = [60, 60]

onMounted( () => {
  geoStore.changeLocation()
})
</script>

<style scoped>
.map {
  height: 100vh;
  width: 100%;
}
</style>
