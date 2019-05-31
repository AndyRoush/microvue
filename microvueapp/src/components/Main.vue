<template>
  <div>
    <div class="image-container"></div>
    <div class="container">
      <div class="uk-flex-center@m uk-flex-right@l main_content">
        <!-- <img class="headerImage" :src="images.bgImg"> -->
        <div class="uk-width-2-3">
          <p class="main_header lightText">Micronutrients: <span class="lightText">The not so micro, nutrient</span></p>
          <span class="header_title_1 lightText">mi·cro·nu·tri·ent</span>
          <span class="header_title_2 lightText">/ˌmīkrōˈn(y)o͞otrēənt/</span>
          <span class="header_title_3 lightText">noun</span>
          <span class="header_title_4 lightText">plural noun: micronutrients</span>
          <p
            class="header_title_5 lightText"
          >A chemical element or substance required in trace amounts <br /> for the normal growth and development of living organisms.</p>
          <div class="main_button_wrapper">
          <router-link to="/learn" class="main_button">Teach me please</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {
    msg: String
  },
  data() {
    return {
      images: {
        headerImg: require("../assets/mountain_WP.png"),
        basket: require("../assets/basket.png"),
        veggies: require("../assets/veggies.png"),
        bgImg: require("../assets/bg_struc.png")
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 200px;
}

.image-container {
  /* height: 400px; */
  background-image: url("../assets/veggies.png");
  background-repeat: no-repeat;
  opacity: 0.5;
  z-index: -1;
}

.headerImage {
  opacity: 0.4;
}

.main_header {
  font-family: 'Abril Fatface', cursive;
  text-align: right;
  /* font-weight: 700; */
  font-size: 5rem;
  /* text-transform: uppercase; */
}

.main_content {
  display: flex;
}

.header_title_1 {
  display: block;
  font-size: 1.3rem;
  text-align: right;
}

.header_title_2 {
  display: block;
  text-align: right;
}

.header_title_3 {
  display: block;
  padding-top: 3px;
  font-style: italic;
  text-align: right;
}

.header_title_4 {
  text-align: right;
  displaY: block;
}

.header_title_5 {
  text-align: right;
}

.main_button_wrapper {
  display: flex;
  justify-content: flex-end;
}

.main_button {
  border: 3px solid #f2f2f2;
  padding: 14px;
  color: #f2f2f2;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 0.7rem;
  transition: 0.3s ease 0s;
}

.main_button:hover {
  border: 3px solid #3b945e;
  padding: 14px;
  color: #3b945e;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 0.7rem;
  transition: 0.3s ease 0s;
}


</style>
