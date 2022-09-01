<template>
  <div class="country">
    <div class="name">
      <b>
        {{id}}
      </b>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryComponent",
  props: ['id'],
  computed: {
    // countryData() {
    //
    // }
  },
  methods: {

  }
}
</script>

<style scoped>
*{
  font-family: 'Roboto Mono',serif
}
.country{
  width: 20%;
  height: calc(20vw*1.2);
  margin: 2.5%;
  background-color: #C4C4C4;
  position: relative;
  border-radius: 25px;
  font-size: 1vw;
}
.name{
  margin-top: 10%;
  position: absolute;
  width: 100%;
  text-align: center;
  color: black;
}

</style>