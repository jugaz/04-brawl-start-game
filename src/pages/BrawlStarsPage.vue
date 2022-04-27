<template>
    <h1 v-if="!brawl">Espere por favor...</h1>
    <div class="contenedor-brawlstartpage" v-else>   
        <h1>¿Quién es este brawl?</h1>

        <BrawlStarsPicutre :brawl-start-id="brawl.id" :show-brawl-start="showBrawlStart"/>
        <BrawlStarsOptions ref="options"  
            :brawls="brawlStartArr"
            @selection-brawl-start="checkAnswer"/>

        <div class="response-brawlstartpage" v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">
                NUEVO JUEGO
            </button>
        </div>
    </div>





</template>

<script>
import BrawlStarsPicutre from "@/components/BrawlStarsPicutre.vue"
import BrawlStarsOptions from "@/components/BrawlStarsOptions.vue"
import getBrawlStarsOptions from "@/helpers/getBrawlStartOptions"

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
            message:'',
        }
    },

    methods: {
        async mixBrawlsArray() {
            this.brawlStartArr = await getBrawlStarsOptions()
            console.log(this.brawlStartArr)

            const rndInt = Math.floor( Math.random() * 4 )
            this.brawl = this.brawlStartArr[ rndInt ] 
        },
        
        checkAnswer( brawlId) {

            this.showBrawlStart = true
            this.showAnswer = true
             console.log("this",this)
          
            if( brawlId === this.brawl.id ) {
                this.message = `Excelente, era ${ this.brawl.name }`
                event.currentTarget.classList.add("success")
                document.querySelectorAll(".name-brawl").forEach(element => { 
                      element.classList.add("disabled")
                });
            }
            else {
                event.currentTarget.classList.add("fail")
                if(event.currentTarget.classList.contains("fail")) {
                    document.querySelectorAll(".name-brawl").forEach(element => {
                        
                        
                        if(this.brawl.name === element.innerHTML ) {
                             element.classList.add("success")
                        }
                        else {
                            element.classList.add("disabled")
                        }
                    });
                }
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
<style scoped>
    h1,
    h2 {
        color:#ffff;
    }
    .response-brawlstartpage {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 30px;
        padding-inline-start: 40px;
    }
    .response-brawlstartpage  button {
        background-color: #ffc013;
        border-color: #ffc013;
        border-radius: .25rem;
        border: 1px solid transparent;
        box-shadow: 0 3px 2px 2px #00000033;
        color: #fff;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 10px;
        padding: 5px 0;
        text-align: center;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        user-select: none;
        vertical-align: middle;
        white-space: nowrap;
        width: 250px;
    }
</style>