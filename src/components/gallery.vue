<!-- <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link> -->
<template>
  <div class="wrapper">
      <h1>New Hybrid/Electric Cars for Sale</h1>
      <hr>
      <div class="container">
          <div class="card">
            <!-- <router-link to="/model1"> -->
              <router-link to="/modelCpy?id=1">
              <a><img class="car"
                      src="https://tdrvehicles2.azureedge.net/photos/chrome/Expanded/White/2019CHC230016/2019CHC23001601.jpg"
                      alt=""></a></router-link>
              <div class="text">
                  <h3>2019 Chevrolet Malibu</h3>
                  <p class="price-label">Dealer Price range</p>
                  <p class="price">$19,600 - $41,924</p>
              </div>
              <router-link to="/modelCpy?id=1" class="button"><a>
                  see inventory
              </a>
            </router-link>
          </div>

          <div class="card">
              <router-link to="/modelCpy?id=2"><a><img class="car"
                      src="https://tdrvehicles2.azureedge.net/photos/chrome/Expanded/White/2020TOC320001/2020TOC32000101.jpg"
                      alt=""></a></router-link>
              <div class="text">
                  <h3>2020 Toyota Prius Prime</h3>
                  <p class="price-label">Dealer Price range</p>
                  <p class="price">$27,349 - $40,754</p>
              </div>
              <router-link to="/modelCpy?id=2" class="button"><a>
                  see inventory
              </a></router-link>
          </div>

          <div class="card">
              <router-link to="/modelCpy?id=3"><a><img class="car"
                      src="https://tdrvehicles2.azureedge.net/photos/chrome/Expanded/White/2019TOS200001/2019TOS20000101.jpg"
                      alt=""></a></router-link>
              <div class="text">
                  <h3>2019 Toyota RAV4</h3>
                  <p class="price-label">Dealer Price range</p>
                  <p class="price">$27,969 - $49,210</p>
              </div>
            <router-link to="/modelCpy?id=3" class="button"> <a>
                  see inventory
              </a></router-link>
          </div>

          <div class="card">
              <router-link to="/modelCpy?id=4"><a><img class="car"
                      src="https://tdrvehicles2.azureedge.net/photos/chrome/Expanded/White/2019FOC270001/2019FOC27000101.jpg"
                      alt=""></a></router-link>
              <div class="text">
                  <h3>2019 Ford Fusion Hybrid</h3>
                  <p class="price-label">Dealer Price range</p>
                  <p class="price">$30,145 - $35,495</p>
              </div>
              <router-link to="/modelCpy?id=4" class="button"><a>
                  see inventory
              </a></router-link>
          </div>

          <div class="card">
              <router-link to="/modelCpy?id=5"><a><img class="car"
                      src="https://tdrvehicles2.azureedge.net/photos/chrome/Expanded/White/2019KIC170001/2019KIC17000101.jpg"
                      alt=""></a></router-link>
              <div class="text">
                  <h3>2019 Kia Soul EV</h3>
                  <p class="price-label">Dealer Price range</p>
                  <p class="price">$35,895 - $41,790</p>
              </div>
              <router-link to="/modelCpy?id=5" class="button"><a>
                  see inventory
              </a></router-link>
          </div>

          <div class="card">
              <router-link to="/modelCpy?id=6"><a><img class="car"
                      src="https://tdrvehicles2.azureedge.net/photos/chrome/Expanded/White/2020TOS200001/2020TOS20000101.jpg"
                      alt=""></a></router-link>
              <div class="text">
                  <h3>2020 Toyota RAV4</h3>
                  <p class="price-label">Dealer Price range</p>
                  <p class="price">$29,935 - $49,292</p>
              </div>
              <router-link to="/modelCpy?id=6"  class="button"><a>
                  see inventory
              </a></router-link>
          </div>

      </div>
  </div>
</template>

<script>
  export default {

}
</script>

<style scoped>

  .wrapper {
      text-align: center;
      padding: 2em;
      font-family: Arial, Helvetica, sans-serif;
  }

  .container {
      position: relative;
      left: 3em;
      width: 70%;
      margin: 2em auto;
      display: grid;
      grid-gap: 4em;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-auto-rows: 500px;
  }

  h1 {
      font: 300 26px/34px Roboto, sans-serif;
      padding-bottom: 10px;
  }

  hr {
      border: 1px solid #ddd;
      margin-bottom: 2em;
      width: 70%;
      position: relative;
      left: 3em;
  }

  .card {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 1em 0.5em;
  }

  .card h3 {
      font: 21px/27px Roboto, sans-serif;
      color: #3e3e3e;
      margin-bottom: 2em;
  }

  .car {
      width: 250px;
      border-bottom: 1px solid #ddd;

  }

  .text {
      text-align: left;
  }

  .price-label {
      font: 300 12px/10px Roboto, sans-serif;
      color: #555;
      position: relative;
  }

  .price {
      position: relative;
      top: -0.8em;
      font: 500 21px/23px Roboto, sans-serif;
  }

  .button {
      width: 250px;
      border: 2px solid #4bbb04;
      border-radius: 20px;
      color: #4bbb04;
      font: 500 14px/40px Roboto, sans-serif;
      text-decoration: none;
      text-align: center;
  }

  @media only screen and (max-width: 600px) {
      .wrapper {
          padding: 2em 0;
      }
      hr {
          border: 1px solid #ddd;
          margin-bottom: 2em;
          width: 70%;
          position: relative;
          left: 0;
     }
      .container {
          position: static;
          margin: 0 auto;
          width: 100%;
          grid-template-columns:  1fr;
      }
      .car {
          width: 100%;
      }
      .button {
       width: 70%;
    }
  }
</style>
