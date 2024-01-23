<template>
  <div class="map">
    {{geoStore.location}}
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
    </LMap>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGeocondingStore } from "~/stores/geoconding.ts";
const zoom = ref(6)
const geoStore = useGeocondingStore()
</script>

<style scoped>
.map {
  height: 100vh;
  width: 100%;
  z-index: -1;
}
</style>
