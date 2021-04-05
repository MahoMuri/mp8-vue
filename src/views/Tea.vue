<template>
  <div id="tea" class="container">
    <b-jumbotron
      header="Our Teas"
      lead="Here is our list of teas, Feel free to choose!"
      class="aboutHeader"
    >
    </b-jumbotron>

    <b-tabs content-class="mt-3" justified>
      <b-tab active>
        <template #title>
          <p class="tabTitle"><strong>Chamomile Tea</strong></p>
        </template>
        <div class="container">
          <b-card
            img-src="https://post.healthline.com/wp-content/uploads/2020/09/chamomile-tea-thumb-1-732x549.jpg"
            img-alt="Chamomile Tea"
            img-left
            class="mb-3"
          >
            <b-card-text>
              Chamomile tea is most commonly known for its calming effects and
              is frequently used as asleep aid. <br />Two studies have examined
              the effects of chamomile tea or extract on sleep problems in
              humans. In one study of 80 postpartum women experiencing sleep
              issues, drinking chamomile tea for two weeks led to improved sleep
              quality and fewer symptoms of depression.
            </b-card-text>
            <b-button to="/order" variant="primary">Buy now!</b-button>
          </b-card>
        </div>
      </b-tab>
      <b-tab>
        <template #title>
          <p class="tabTitle"><strong>Matcha Tea</strong></p>
        </template>
        <div class="container">
          <b-card
            img-src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
            img-alt="Matcha Tea"
            img-left
            class="mb-3"
          >
            <b-card-text>
              Matcha is finely ground powder of specially grown and processed
              green tea leaves, traditionally consumed in East Asia. The green
              tea plants used for matcha are shade-grown for three to four weeks
              before harvest; the stems and veins are removed during processing.
              During shaded growth, the plant Camellia sinensis produces more
              theanine and caffeine. The powdered form of matcha is consumed
              differently from tea leaves or tea bags, as it is suspended in a
              liquid, typically water or milk.
            </b-card-text>
            <b-button to="/order" variant="primary">Buy now!</b-button>
          </b-card>
        </div>
      </b-tab>
      <b-tab>
        <template #title>
          <p class="tabTitle"><strong>Milk Tea</strong></p>
        </template>
        <div class="container">
          <b-card
            img-src="https://www.theflavorbender.com/wp-content/uploads/2020/06/Bubble-Milk-Tea-SM-7518-2-500x500.jpg"
            img-alt="Milk Tea"
            img-left
            class="mb-3"
          >
            <b-card-text>
              Milk tea, quite simply, is tea with milk added. This creates a
              smoother flavor and slightly sweetens the tea. It is a popular way
              to serve tea in many parts of the world, and it is an easy way to
              change up your average cup of tea. There are many regions in the
              world where milk tea is the default type of tea. This is most
              apparent in certain parts of India where tea usually refers to
              milk tea. Tea without milk is ordered as "black tea" or simply
              "tea without." Milk tea is also commonly consumed in England,
              Ireland, Scotland, Canada, Sri Lanka, and Hong Kong.
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
