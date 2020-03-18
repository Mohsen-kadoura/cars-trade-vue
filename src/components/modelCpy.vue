<template>
  <div>
    <div class="wrapper">
      <div>
        <router-link to="/"><button class="home">Back to Gallery</button></router-link>
      </div>
        <h4>{{ title}}</h4>
        <h3>{{ price }}</h3>
        <div class="container">
            <div class="big">
                  <img :src="bigPic" alt="">
            </div>
            <div class="gallery">
                <div class="item"><img
                        :src="pic1"
                        width="200" alt=""></div>
                <div class="item"><img
                        :src="pic2"
                        width="200" alt=""></div>
                <div class="item"><img
                        :src="pic3"
                        width="200" alt=""></div>
                <div class="item"><img
                        :src="pic4"
                        width="200" alt=""></div>
            </div>
        </div>
        <div class="detail">
            <div>
                <h3>Highlights</h3>
            </div>
            <div class="desc">
                <ul class="columns">
                    <li class="head">
                        <ul>
                            <li v-for="sp in spec1">{{ sp }}</li>
                        </ul>
                    </li>
                    <li class="head">
                        <ul>
                            <li v-for="sp in spec2">{{ sp }}</li>
                        </ul>
                    </li>
                    <li class="head">
                        <ul>
                          <ul>
                              <li v-for="sp in spec3">{{ sp }}</li>
                          </ul>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
      </div>
      <app-car></app-car>
    </div>
</template>

<script>
  // const urlParams = new URLSearchParams(window.location.search);
  // const id = urlParams.get('is');

  import Car from './car.vue';
  import { cars, specs } from '../data.js';


  export default {
    data() {
      const id = this.$route.query.id;
      const model = 'car' + id;
      const car = cars[model];
      
      return {
        title: car.title,
        price : car.price,
        bigPic: car.bigPic,
        pic1: car.pic1,
        pic2: car.pic2,
        pic3: car.pic3,
        pic4: car.pic4,
        spec1: specs[model].col1,
        spec2: specs[model].col2,
        spec3: specs[model].col3
      }
    },
    components: {
      appCar: Car
    }
  }
</script>

<style>

    h4 {
        width: 74%;
        display: inline-block;
        font-size: 20px;
        margin-bottom: 10px;
        padding-left: 0 !important;
        margin-top: 0;
    }

    h3 {
        display: inline-block;
    }

    .container {
        display: grid;
        grid-gap: 1em;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 400px;
        margin-bottom: 3em;
    }

    .gallery {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 200px 200px;
        justify-items: center;
        align-items: center;
    }

    .big img {
        width: 400px;
    }

    .galley img {
        width: 100%;
    }

    .desc {
        width: 75%;
        margin-left: 10em;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin-left: 0;
    }

    ul.columns {
        display: flex;
    }

    li.head {
        margin-right: 6em;
        padding-left: 0.8em;
    }

    .detail {
        display: flex;
        align-items: flex-start;
        margin-bottom: 5em;
    }

    #description {
        position: relative;
        top: -1em;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
        padding: .5em;
        font: 400 14px/1.42857143 Roboto, sans-serif;
        margin-left: 3.5em;
    }

    th {
        text-align: left;
    }

    td {
        text-align: left;
        padding-left: 5em;
    }
    .home {
      font-size: 1.1em;
      padding: 8px 15px;
      border-radius: 5px;
      background-color: blue;
      color: #FFF;
    }

    @media screen and (max-width: 960px) {
        .gallery {
            display: none;
        }

        h3,
        h4 {
            display: block;
        }
    }
</style>
