<template>
   <div class="options-container">
      <ul>
         <li class="name-brawl" v-for="brawl in brawls"
         ref="list" 
         :key="brawl.id" 
         @click="$emit('selectionBrawlStart', brawl.id)">
            {{ brawl.name }}
         </li>
      </ul>
   </div>
</template>

<script>
   export default {
      props: {
         brawls: {
            type: Array,
            required: true
         },
      },
   
   }
</script>

<style scoped>
   ul {
      list-style-type: none;
   }

   li {
      background-color: #666363;
      border-radius: 5px;
      color: #ffffff;
      border: 1px solid #666363;
      box-shadow: 0 3px 2px 2px #00000033;
      cursor: pointer;
      margin-bottom: 10px;
      padding: 5px 0;
      width: 250px;
   }



   .options-container {
      display: flex;
      justify-content: center;
   }

   li.success {
      background-color: #06af0c;
      border: 1px solid #06af0c;
      animation-iteration-count: infinite;
      animation-name: pulse;
      animation-duration: 1s;
      animation-delay: .1s;
   }

   li.fail {
      border: 1px solid #f3302e;
      background-color:#f3302e;
      animation-name: shakeX;
      animation-duration: 1s;
      animation-delay: .1s;
   }
   li.fail,
   li.success,
   li.disabled {
      pointer-events: none;
      cursor: none;
   }


</style>