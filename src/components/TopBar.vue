<template>
  <div class="TopBar">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'TopBar',
  props: {
    msg: String
  }
}
</script>

<!-- add "scoped" attribute to limit css to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@300;500&display=swap');
h1 {
  margin: 40px 0 0;
  font-family: 'Grenze Gotisch', cursive;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
