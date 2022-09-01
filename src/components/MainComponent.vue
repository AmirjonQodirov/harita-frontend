<template>
  <div className="worldmap">
    <span id="title">Harita</span>

    <vue-world-map
        id="worldmap"
        :countryData="countryData"
        :defaultCountryFillColor="map.defaultCountryFillColor"
        :highColor="map.highColor"
        :countryStrokeColor="map.countryStrokeColor"
        :lowColor="map.lowColor"
        :hoverFillColor="map.hoverFillColor"
        @click="handleStateHover"
    >
    </vue-world-map>

    <span id="signature"><b>Datatracker</b>, <i>aaaaaaaaaa</i></span>
  </div>
</template>

<script>
import VueWorldMap from "./Map/WorldMapComponent";
import router from "@/router/router";
import Countries from "@/countries";

export default {
  components: {
    VueWorldMap,
  },
  methods: {
    handleStateHover: function (e) {
      if (e.target.tagName === 'path') {
        console.log(e.target.id);
        router.push( {name: 'country', params: { 'id': e.target.id }})
      }
    }
  },
  data() {
    return {
      map: {
        defaultCountryFillColor: "#BCC3E4",
        highColor: "red",
        lowColor: "white",
        countryStrokeColor: "black",
        hoverFillColor: "white",
      },
      countries: Countries,
      countryData: {},
      selected: null,
    };
  },
};
</script>

<style scoped>
#worldmap .vue-world-map {
}

</style>
