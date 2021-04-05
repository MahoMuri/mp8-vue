<template>
  <div id="coffee" class="container">
    <b-jumbotron
      header="Our Coffees"
      lead="Here is our list of coffees, Feel free to choose!"
      class="aboutHeader"
    >
    </b-jumbotron>

    <b-tabs content-class="mt-3" justified>
      <b-tab active>
        <template #title>
          <p class="tabTitle"><strong>Espresso</strong></p>
        </template>
        <div class="container">
          <b-card
            img-src="https://static.scientificamerican.com/sciam/cache/file/7C0BADB7-D030-4E4E-BE715FB20458C51E_source.jpg?w=590&h=800&533ACFE5-6F68-4434-B0595E60892B668A"
            img-alt="Espresso"
            img-left
            class="mb-3"
          >
            <b-card-text>
              Espresso is a concentrated form of coffee served in small, strong
              shots and is the base for many coffee drinks. It's made from the
              same beans as coffee but is stronger, thicker, and higher in
              caffeine. However, because espresso is typically served in smaller
              servings than coffee, it has less caffeine per serving.
            </b-card-text>
            <b-button to="/order" variant="primary">Buy now!</b-button>
          </b-card>
        </div>
      </b-tab>
      <b-tab>
        <template #title>
          <p class="tabTitle"><strong>Double Espresso</strong></p>
        </template>
        <div class="container">
          <b-card
            img-src="https://www.thecheesecakefactory.com/assets/images/Menu-Import/960x720-CCF_DoubleEspresso.jpg"
            img-alt="Double Espresso"
            img-left
            class="mb-3"
          >
            <b-card-text>
              A double espresso may also be listed as doppio, which is the
              Italian word for double. This drink is highly concentrated and
              strong.
            </b-card-text>
            <b-button to="/order" variant="primary">Buy now!</b-button>
          </b-card>
        </div>
      </b-tab>
      <b-tab>
        <template #title>
          <p class="tabTitle"><strong>Americano</strong></p>
        </template>
        <div class="container">
          <b-card
            img-src="https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-recipes-americano-1571757341897.jpg"
            img-alt="Americano"
            img-left
            class="mb-3"
          >
            <b-card-text>
              Americanos are popular breakfast drinks and thought to have
              originated during World War II. Soldiers would add water to their
              coffee to extend their rations farther. The water dilutes the
              espresso while still maintaining a high level of caffeine.
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
