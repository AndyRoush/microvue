<template>
  <div class="container">
    <ul
      class="uk-subnav uk-subnav-pill"
      uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium"
    >
      <li>
        <a href="#">Vitamins</a>
      </li>
      <li>
        <a href="#">Minerals</a>
      </li>
      <li>
        <a href="#">Amino Acids</a>
      </li>
    </ul>

    <ul class="uk-switcher uk-margin">
      <li><ul uk-accordion>
    <li>
        <a class="uk-accordion-title" href="#">Vitamin B1 - Thiamine</a>
        <div class="uk-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Vitamin B2 - Riboflavin</a>
        <div class="uk-accordion-content">
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Vitamin B3 - Niacin</a>
        <div class="uk-accordion-content">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
        </div>
    </li>
</ul></li>
      <li>Hello again!</li>
      <li>Bazinga!</li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "See"
};
</script>

<style scoped>
.container {
  margin-top: 120px;
  margin-left: 25%;
  margin-right: 25%
}
</style>

