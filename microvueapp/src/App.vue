<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Navbar from "./components/Navbar";
import Learn from "./components/Learn";
import See from "./components/See"

export default {
  name: "app",
  components: {
    Main,
    Navbar,
    Learn,
    See
  }
};
</script>

<style>
/* font-family: 'The Girl Next Door', cursive;
font-family: 'Krub', sans-serif;
font-family: 'Thasadith', sans-serif;
font-family: 'NTR', sans-serif;
font-family: 'Pavanam', sans-serif;
font-family: 'Chathura', sans-serif;
font-family: 'Kavivanar', cursive;
font-family: 'Quicksand', sans-serif;
font-family: 'Barlow Semi Condensed', sans-serif;
font-family: 'Handlee', cursive;
font-family: 'Pontano Sans', sans-serif;
font-family: 'Julius Sans One', sans-serif;
font-family: 'Nanum Gothic Coding', monospace;
font-family: 'Playfair Display', serif;
font-family: 'Noto Serif', serif;
font-family: 'Libre Baskerville', serif;
font-family: 'Abril Fatface', cursive;
 */

body {
   background-color: #65ccb8;
   background-image: url("./assets/bg_struc.png");
   background-blend-mode: saturation;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  height: 100vh
}

.container {
  margin-left: 15%;
  margin-right: 15%;
}

.darkText {
  color: #182628 !important;
  font-weight: 600;
}

.lightText {
  color: #f2f2f2 !important;
}

.lightGreen_bg {
  background-color: #65ccb8 !important
}

.lightGreen_text {
  color: #65ccb8 !important
}

.mediumGreen_bg {
  background-color: #57ba98 !important
}

.mediumGreen_text {
  color: #57ba98 !important
}

.darkGreen_bg {
  background-color: #3b945e !important;
}

.darkGreen_text {
  color: #3b945e !important;
}
</style>
