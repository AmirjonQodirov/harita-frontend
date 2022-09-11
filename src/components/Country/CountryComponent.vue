/* eslint-disable */
<template>
  <div class="country">
    <div class="name">
      <b>{{countryInfo.name}}</b>
    </div>
    <div class="flag">
      <img class="flag-coat" alt="flag" :src="countryInfo.flag"/>
    </div>
    <div class="gerb">
      <img class="flag-coat" :src=countryInfo.coatOfArms alt="coatOfArms"/>
    </div>
    <div class="c-map">
      <WorldMapComponent
          id="worldmap"
          :countryData="checked"
          @click="toMain"
      >
      </WorldMapComponent>
    </div>
    <div class="static-icons-under-flag">
      <div class="outer">
        <div class="middle">
          <div class="inner1">
            <img v-if="countryInfo.independent" class="under-flag-img" src= "../../assets/icons/independence.png" alt="independence">
            <img v-else class="under-flag-img" src= "../../assets/icons/not_independent.svg" alt="independence">
          </div>
          <div class="inner1">
            <img v-if="countryInfo.landlocked" class="under-flag-img" src= "../../assets/icons/not_wave.svg" alt="landlocked">
            <img v-else class="under-flag-img" src= "../../assets/icons/wave.png" alt="landlocked">
          </div>
          <div class="inner1">
            <img v-if="countryInfo.unMember" class="under-flag-img" src= "../../assets/icons/un.png" alt="un member">
            <img v-else class="under-flag-img" src= "../../assets/icons/not_un.svg" alt="un member">
          </div>
        </div>
      </div>
    </div>

    <div class="info-icons">
      <div class="outer">
        <div class="middle">
          <div class="inner">
            <img align="left" class="info-img" src= "../../assets/icons/place.png" alt="capital">
            <text>{{ countryInfo.capital }}</text>
          </div>
          <div class="inner">
            <img align="left" class="info-img" src= "../../assets/icons/area.png" alt="area">
            <text>{{ countryInfo.area }} &#13218;</text>
          </div>
          <div class="inner">
            <img align="left" class="info-img" src= "../../assets/icons/people-together.png" alt="population">
            <text>{{ countryInfo.population }}</text>
          </div>
        </div>
        <div class="middle">
          <div class="inner">
            <img align="left" class="info-img" src= "../../assets/icons/appointment.png" alt="start of week">
            <text>{{ countryInfo.startOfWeek }}</text>
          </div>
          <div class="inner">
            <img align="left" class="info-img" src  = "../../assets/icons/car.png" alt="Car side">
            <text>{{ countryInfo.carSide }}</text>
          </div>
          <div class="inner">
            <img align="left" class="info-img" src= "../../assets/icons/wall-clock.png" alt="local time">
            <text>{{ countryInfo.time }}</text>
          </div>
        </div>
        <div class="middle">
          <div class="inner">
            <img align="left" class="info-img" src= "../../assets/icons/distance-learning.png" alt="subregion">
            <text>{{ countryInfo.subRegion }}</text>
          </div>
          <div class="inner">
            <img align="left" class="info-img" src= "../../assets/icons/internet.png" alt="site">
            <text>{{ countryInfo.tld }}</text>
          </div>
          <div class="inner">
            <img align="left" class="info-img" src= "../../assets/icons/border.png" alt="borders">
            <text>{{ countryInfo.borders }}</text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import WorldMapComponent from "@/components/Map/WorldMapComponent";
import router from "@/router/router";

export default {
  name: "CountryComponent",
  components: {WorldMapComponent},
  props: ['id'],
  data() {
    return {
      countryInfo: {},
      checked: {},
    }
  },
  mounted() {
    this.checked = {}
    this.checked = this.getCountryData()
    axios
        .get('http://localhost:8082/harita/country/country/' + this.id)
        .then((response) => {
          this.countryInfo = response.data
          console.log(response)
        })

    document.addEventListener("backbutton", this.backCallBack, false);
  },
  methods: {
    getCountryData() {
      this.checked = {}
      const entries = new Map([
        [this.id, 10000],
        ['def', 0],
      ]);
      return Object.fromEntries(entries);
    },
    toMain() {
      this.checked = {}
      router.replace({path: '/'})
    },
    backCallBack() {
      this.checked = {}
    }
  }
}
</script>

<style scoped>
*{
  font-family: 'Roboto Mono',serif
}
.country{
  width: calc(100% - 64px);
  height: calc(100% - 64px);
  position: relative;
  margin: 32px;
  color: white;
  font-size: 4vw;
}
.name{
  position: absolute;
  height: 7vh;
  width: 100%;
  text-align: left;
}

.flag{
  position: absolute;
  margin-top: 14vh;
  height: 27vh;
  width: 30%;
  text-align: start;
}

.gerb{
  position: absolute;
  margin-top: 14vh;
  margin-left: 30%;
  height: calc(30vh + 75px);
  width: 26%;
  text-align: center;
}

.c-map{
  position: absolute;
  margin-top: 14vh;
  margin-left: 56%;
  height: calc(30vh + 75px);
  width: 44%;
  text-align: left;
}

.c-map:hover {
  cursor: pointer;
}

.static-icons-under-flag{
  position: absolute;
  margin-top: 44vh;
  width: 30%;
  height: 75px;
  text-align: left;
}

.under-flag-img {
  height: 75px;
}


.info-icons{
  position: absolute;
  margin-top: calc(55vh + 75px);
  width: 100%;
  height: 260px;
  text-align: left;
}

div.outer {
  display:table;
  width: 100%;
  height: 100%;
  font-size: 1.5vw;
}
div.middle {
  display:table-row;
}
div.inner1 {
  display:table-cell;
  text-align: center;
}
div.inner {
  display:inline-block;
  text-align: left;
  width: 33%;
  line-height: 60px;
  height: 60px;
}
text {
  height: 60px;
  margin-left: 24px;
  text-align: center;
  max-width: calc(100% - 94px);
  display:inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info-img{
  width: 60px;
  height: 60px;
}

.flag-coat{
  width: 100%;
  height: 100%;
  object-fit: contain;
}

</style>