<template>
  <button @mousedown="pressKey" @mouseup="releaseKey" @mouseleave="releaseKey" :class="keyType === 'black' ? 'blackKey': ''">
    <span>{{ keyName }}</span>
  </button>
</template>
<script>

export default {
  props: {
    keyName: String,
    noteDuration: String,
    keyType: String,
    synth: Object,
    tone: Function
  },
  computed: {
  },
  methods: {
    async pressKey () {
      this.synth.triggerAttack(this.keyName)
    },
    async releaseKey () {
      this.synth.triggerRelease(this.keyName)
    }
  }
}
</script>
<style scoped>
button {
  width:40px;
  padding:0px;
  text-align: center;
  background:#fef6e9;
  height: 200px
}
button:hover {
  background:#f5af77;
}
.blackKey {
  position:relative;
  margin-right:-15px;
  margin-left:-15px;
  background: #4f3235;
  color:#fef6e9;
  width: 30px;
  height: 120px;
  vertical-align:top;
  z-index: 10;
}
span {
  position:relative;
  text-align: center;
  font-size: 16px;
  bottom:-40px;
}
@media only screen and (max-width: 600px) {
  button {
    width:100%;
    height: 80px;
    margin-bottom:0px;
    text-align: right;
    background:#fef6e9;
    vertical-align: bottom;
  }
  button:hover {
    background:#f5af77;
  }
  .blackKey {
    display: block;
    float:right;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom:-25px;
    margin-top:-25px;
    width: 50%;
    height: 50px;
    background: #4f3235;
    color:#fef6e9;
    vertical-align: middle;
  }
  span {
    float:left;
    position:relative;
    text-align: left;
    font-size: 26px;
    left:30px;
    bottom:0px;
  }
}
</style>
