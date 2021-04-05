<template>
  <div class="container">
    <div class="jumbotron" id="welcome">
      <h1>Welcome to Home Brew!</h1>
      <p>
        We are a startup cafe that specialize in serving Coffee, Tea, and
        Shakes!
      </p>
      <hr class="my-4" />
      <!-- <p class="lead">We have a variety of drinks in our menu, click the button below to learn more!</p>
            <a class="btn btn-primary btn-lg btn-block" href="#" role="button" aria-pressed="false">Learn more</a> -->
    </div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
    >
      <!-- Slides with image only -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100"
            :height="imgHeight"
            src="@/assets/img/image2.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100"
            :height="imgHeight"
            src="@/assets/img/image1.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100"
            :height="imgHeight"
            src="@/assets/img/image3.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <!-- <b-carousel-slide img-src="@/assets/img/image1.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="@/assets/img/image2.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="@/assets/img/image3.jpg"></b-carousel-slide> -->
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgHeight: 750,
    };
  },
};
</script>
