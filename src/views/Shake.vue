<template>
  <div id="shake" class="container">
    <b-jumbotron
      header="Our Shakes"
      lead="Here is our list of shakes, Feel free to choose!"
      class="aboutHeader"
    >
    </b-jumbotron>

    <b-tabs content-class="mt-3" justified>
      <b-tab active>
        <template #title>
          <p class="tabTitle"><strong>Banana Milkshake</strong></p>
        </template>
        <div class="container">
          <b-card
            img-src="https://www.sonshinekitchen.com/wp-content/uploads/2018/03/chocolate-banana-milkshake-10.jpg"
            img-alt="Banana Milkshake"
            img-left
            class="mb-3"
          >
            <b-card-text
              >This milkshake is good for your health as it is packed with
              proteins. To begin with, take one glass of milk (cold) and pour it
              into the mixer. Cut thin round slices of banana and put in the
              blender. Add one tsp sugar and cardamom powder to it. Give it a
              mix. Make sure that the mixture blends properly. Pour it in a
              glass and enjoy! You can garnish it with banana slices, whipped or
              fresh cream, and some chocolate powder.
            </b-card-text>
            <b-button to="/order" variant="primary">Buy now!</b-button>
          </b-card>
        </div>
      </b-tab>
      <b-tab>
        <template #title>
          <p class="tabTitle"><strong>Mango Shake</strong></p>
        </template>
        <div class="container">
          <b-card
            img-src="https://c.ndtvimg.com/mango-shake_625x300_1527852574155.jpg"
            img-alt="Mango Shake"
            img-left
            class="mb-3"
          >
            <b-card-text>
              Mango; the fruit which we all love. For all the mango lovers, this
              milkshake is love. First of all, dice one or two mangoes. Pour one
              glass of cold milk into the mixer. Add the diced mangoes to it.
              Mix it. Then add one tsp (or more) sugar to it. You can add a bit
              of cardamom powder if you wish. Mix again. You can top it off with
              some chocolate shavings or dry fruits powder. If you have some
              mango ice cream with you, you can add one or two scoops of it on
              the milkshake as a topping.
            </b-card-text>
            <b-button to="/order" variant="primary">Buy now!</b-button>
          </b-card>
        </div>
      </b-tab>
      <b-tab>
        <template #title>
          <p class="tabTitle"><strong>Nutella Milkshake</strong></p>
        </template>
        <div class="container">
          <b-card
            img-src="https://www.theflavorbender.com/wp-content/uploads/2020/06/Bubble-Milk-Tea-SM-7518-2-500x500.jpg"
            img-alt="Nutella Milkshake"
            img-left
            class="mb-3"
          >
            <b-card-text>
              For all the nutella fans there, this recipe is for you. First,
              blend one cup of cold milk and two to three tsp of Nutella. Scoop
              vanilla ice cream and add to it. Blend again. Transfer the shake
              in a glass, topping it off with some whipped cream. Be careful not
              to add too much of nutella otherwise you won’t get the flavor of
              the vanilla. Balance is important.
            </b-card-text>
            <b-button to="/order" variant="primary">Buy now!</b-button>
          </b-card>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.aboutHeader {
  background-color: #fbf3d9;
  margin-top: 30px;
}

.tabTitle {
  font-family: "Montserrat", "sans-serif";
  font-size: 35px;
}
</style>
