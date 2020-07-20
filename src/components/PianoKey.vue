<template>
  <div
    v-touch:start="pressKey"
    v-touch:end="releaseKey"
    v-touch:moving="releaseKey"
    :class="keyType === 'black' ? 'blackKey': ''"
  >
  </div>
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
div {
  display: inline-block;
  width:40px;
  height: 200px;
  padding:0px;
  border-bottom:1px solid #64585c;
  border-right:1px solid #64585c;
  text-align: center;
  background:#fef6e9;
}
div.active {
  background:#f5af77;
}
.blackKey {
  position:relative;
  bottom:80px;
  margin-right:-15px;
  margin-left:-15px;
  background: #4f3235;
  border-right:0px;
  color:#fef6e9;
  width: 30px;
  height: 120px;
  z-index: 10;
}
@media only screen and (max-width: 600px) {
  div {
    width:100%;
    height: 80px;
    margin-bottom:0px;
    text-align: right;
    background:#fef6e9;
    vertical-align: bottom;
  }
  div.active {
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
}
</style>
