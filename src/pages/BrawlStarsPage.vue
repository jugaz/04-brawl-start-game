<template>
    <h1>¿Quién es este brawl?</h1>

    <BrawlStarsPicutre :brawlStartId="4" :showbrawlStar="true"/>
    <BrawlStarsOptions />

</template>

<script>
import BrawlStarsPicutre from "@/components/BrawlStarsPicutre.vue"
import BrawlStarsOptions from "@/components/BrawlStarsOptions.vue"


import getBrawlStarsOptions from "@/helpers/getBrawlStartOptions"

console.log( getBrawlStarsOptions() )

export default {

    components: {
        BrawlStarsPicutre,
        BrawlStarsOptions
    
  }
}
</script>

<style>

</style>