<template>
   <div class="brawlstars-container">
      <img class="hidden-brawlstars" :src="imgSrc" alt="brawlstars">
 
      <img class="fade-in" v-if="imgSrc" :src="imgSrc" alt="brawlstars">
   </div>
   
</template>

<script>
export default {
   props: {
      brawlStartId: {
         type: Number,
         require: true
      },
      showbrawlStar: {
         type: Boolean,
         require: true,
         default: false

      }
   },
   computed: {
      imgSrc() {
          return `https://jugaz.github.io/brawl-star-api/images/${this.brawlStartId}.png`
      }
   }

}
</script>

<style scoped>

   .brawlstars-container {
      height: 300px;
      display: flex;
      justify-content: center;
   }
   img {
      height: 300px;
      position: absolute;
      /*right: 32%;*/
      user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
   }
   .hidden-brawlstars {
      filter: brightness(0);
   }
</style>