<template>
  <div id="app">
    <keep-alive>
      <router-view>
      </router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {

  },
  methods: {

  },
};
</script>

<style>
body {
  color: white;
  padding: 12px;
  margin: 12px;
  background-color: #6D6D6D;
}

#mySelect {
  position: fixed;
  top: 6px;
  right: 6px;
  width: 30%;
}

#title {
  position: fixed;
  top: 6px;
  left: 6px;
  font-style: italic;
  font-size: 1.875em;
}

#signature {
  position: fixed;
  bottom: 6px;
  right: 6px;
  font-size: 0.895em;
}
</style>