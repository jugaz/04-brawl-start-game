<template>
   <div class="brawlstars-container">
      <img 
         v-if="!showBrawlStart"
         :src="imgSrc"
         class="hidden-brawlstars"
         alt="brawlstars">
 
      <img v-else class="fade-in" :src="imgSrc" alt="brawlstars">
   </div>
   
</template>

<script>
export default {
   props: {
      brawlStartId: {
         type: Number,
         require: true
      },
      showBrawlStart: {
         type: Boolean,
         require: true,
         default: false

      }
   },
   computed: {
      imgSrc() {
          return `https://jugaz.github.io/brawl-start-api/images/${this.brawlStartId}.png`
      }
   }

}
</script>

<style scoped>

   .brawlstars-container {
      height: 300px;
   }
   img {
      height: 300px;

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