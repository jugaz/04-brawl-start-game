<template>
    <h1 v-if="!brawl">Espere por favor...</h1>
    <div v-else>   
        <h1>¿Quién es este brawl?</h1>

        <BrawlStarsPicutre :brawl-start-id="parseInt(brawl.id)" :show-brawl-start="showBrawlStart"/>
        <BrawlStarsOptions :brawls="brawlStartArr" 
            @selection-brawl-start="checkAnswer"/>

            <template v-if="showAnswer">
                <h2  class="fade-in">{{ message }}</h2>
                <button @click="newGame">
                    Nuevo Juego
                </button>
            </template>
    </div>





</template>

<script>
import BrawlStarsPicutre from "@/components/BrawlStarsPicutre.vue"
import BrawlStarsOptions from "@/components/BrawlStarsOptions.vue"


import getBrawlStarsOptions from "@/helpers/getBrawlStartOptions"
import BrawlStars from '@/pages/BrawlStarsPage.vue';

// console.log( getBrawlStarsOptions() )

export default {

    components: {
        BrawlStarsPicutre,
        BrawlStarsOptions
    },
    data() {
        return {
            brawlStartArr: [],
            brawl: null,
            showBrawlStart: false,
            showAnswer:false,
            message:''
        }
    },

    methods: {
        async mixBrawlsArray() {
            this.brawlStartArr = await getBrawlStarsOptions()
            console.log(this.brawlStartArr)

            const rndInt = Math.floor( Math.random() * 4 )
            this.brawl = this.brawlStartArr[ rndInt ] 
        },
        checkAnswer(brawlId) {
            console.log('brawlId',brawlId)
            this.showBrawlStart = true
            this.showAnswer = true

            if( brawlId === this.brawl.id ) {
                this.message = `Correcto, ${ this.brawl.name }`
            }
            else {
                this.message = `Oops, era ${ this.brawl.name }`
            }
        },
        newGame() {
            this.showBrawlStart = false
            this.showAnswer     = false
            this.brawlStartArr  = []
            this.brawl          = null
            this.mixBrawlsArray()
        }

    },
    mounted() {
        this.mixBrawlsArray()
    }
}
</script>

<style>

</style>