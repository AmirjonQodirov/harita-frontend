/* eslint-disable */
<template>
  <div class="vue-world-map">
    <MapComponent/>
  </div>
</template>

<script>
import chroma from './js/chroma.js';
import MapComponent from './MapComponent.vue';
import {
  getDynamicMapCss,
  getBaseCss,
  getCombinedCssString,
} from './js/dynamic-map-css';


export default {
  components: { MapComponent },
  watch: {
    countryData() {
      this.renderMapCSS();
    },
  },
  props: {
    lowColor: {
      type: String,
      default: '#ffffff',
    },
    highColor: {
      type: String,
      default: '#ff0000',
    },
    countryData: {
      type: Object,
      required: true,
    },
    defaultCountryFillColor: {
      type: String,
      default: '#dadada',
    },
    countryStrokeColor: {
      type: String,
      default: 'black',
    },
    hoverFillColor: {
      type: String,
      default: '#dadada'
    }
  },
  data() {
    return {
      node: document.createElement('style'),
      chromaScale: chroma.scale([this.$props.lowColor, this.$props.highColor]),
    };
  },
  methods: {
    renderMapCSS() {
      const baseCss = getBaseCss(this.$props);
      const dynamicMapCss = getDynamicMapCss(this.$props.countryData, this.chromaScale);
      this.$data.node.innerHTML = getCombinedCssString(baseCss, dynamicMapCss);
    },
  },
  mounted() {
    document.body.appendChild(this.$data.node);
    this.renderMapCSS();
  },
};
</script>

<style>
.vue-world-map {
  height: 100%;
}

#map-svg {
  height: 100%;
}
</style>
