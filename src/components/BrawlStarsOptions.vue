<template>
   <div class="options-container">
      <ul>
         <li class="name-brawl" v-for="brawl in brawls" 
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
      background-color: white;
      border-radius: 5px;
      color: #fcd34d;
      border: 1px solid #fcd34d;
      cursor: pointer;
      margin-bottom: 10px;
      padding: 5px 0;
      width: 250px;
   }

   li:hover {
      box-shadow: 0 3px 2px 2px #00000033;
   }

   .options-container {
      display: flex;
      justify-content: center;
   }

   li.success {
      border: 1px solid #2bb673;
      color: #2bb673;
      animation-iteration-count: infinite;
      animation-name: pulse;
      animation-duration: 1s;
      animation-delay: .1s;
   }

   li.fail {
      border: 1px solid red;
      color: red;
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