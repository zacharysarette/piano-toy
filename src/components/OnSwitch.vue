<template>
  <div>
  <button class="on" @click="turnOn">
    On
  </button>
  <button class="off" @click="turnOff">
    Off
  </button>
  </div>
</template>
<script>
import { eventBus } from '../main'

export default {
  name: 'OnSwitch',
  methods: {
    turnOn () {
      eventBus.$emit('turnOn')
    },
    turnOff () {
      eventBus.$emit('turnOff')
    }
  }
}
</script>
<style scoped>
.on {
  background:green;
  color:aliceblue;
}
.off {
  background:crimson;
  color:aliceblue;
}
</style>
