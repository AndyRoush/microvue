<template>
  <div uk-grid class="uk-grid-small uk-width-2-3">
    <div class="uk-position-relative">
      <img src="images/light.jpg" alt>
      <div class="uk-position-top">
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
          <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">
              <li>
                <a href="#" class="lightText">Image</a>
              </li>
            </ul>
          </div>
          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
              <li>
                <router-link to="/" class="darkText">Home</router-link>
              </li>
              <li>
                <router-link to="/learn" class="darkText">Learn</router-link>
              </li>
              <li>
                <router-link to="/see" class="darkText">See</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
.uk-position-top {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
