<template>
  <div id="app">
    <top-bar :class="$style.header" msg="Piano Toy"/>
    <template>
      <div :class="$style.primary"></div>
    </template>
    <template v-for="note in notes">
      <piano-key :keyType="contains(note, '#') ? 'black' : 'white'" :key="note" :keyName="note" :synth="synth" noteDuration="8n" :tone="tone" />
    </template>
  </div>
</template>

<script>
import { eventBus } from './main'
import TopBar from './components/TopBar.vue'
import PianoKey from './components/PianoKey.vue'
import { getTotalNotes } from './data/notes'
import { contains } from './utils/utils'
import * as Tone from 'tone'

export default {
  name: 'App',
  components: {
    TopBar,
    PianoKey
  },
  created () {
    eventBus.$on('turnOn', (data) => {
      this.turnOn()
    })
  },
  data () {
    return {
      synth: new Tone.PolySynth(4, Tone.synth).toMaster(),
      tone: Tone,
      notes: getTotalNotes()
    }
  },
  methods: {
    contains (arr, element) {
      return contains(arr, element)
    },
    async turnOn () {
    }
  }
}
</script>
<style module lang="scss">
$irone: #f0ccbd;
$hinemosu: #c38f95;
$benikakehanairo: #98596E;
$akebono: #f5af77;
$oboroduki: #fce0af;
$shinonomeiro: rgb(243, 170, 150);
$aiirohatoba: #64585c;
$shirahanoya: #fef6e9;
$umoregi: #4f3235;
$colors: (
  1: $irone,
  2: $hinemosu,
  3: $benikakehanairo,
  4: $akebono,
  5: $oboroduki,
  6: $shinonomeiro,
  7: $aiirohatoba,
  8: $shirahanoya,
  9: $umoregi,
);
body {
  background-color: $aiirohatoba;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.header {
  background-color: map-get($colors, 4);
  color: map-get($colors, 9);
  padding:10px;
}
.primary {
  background-color: map-get($colors, 3);
  color: map-get($colors, 5);
  padding:10px;
}
:export {
  primaryColor: $irone;
  secondaryColor: $hinemosu;
  dark: $umoregi;
}
</style>
