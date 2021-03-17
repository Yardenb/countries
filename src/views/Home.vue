<template>
  <div v-if="isLoaded">
    <div v-if="error">Error: {{ error }}</div>
    <div v-else>
      <input type="text" v-model="userInput">
      <div v-for="country in countriesToDisplay" :key="country">
        {{ country }}
      </div>
    </div>
  </div>
  <div v-else class="spinner-container">
    <div class="spinner"></div>
  </div>
</template>

<script>
import useCountries from "../composables/useCountries";
import useFilterCountries from '../composables/useFilterCountries'

export default {
  name: "Home",
  components: {},
  setup() {
    const { countries, error, isLoaded } = useCountries();
    const { userInput, countriesToDisplay} = useFilterCountries(countries)
    
    

    return {
      countries,
      error,
      isLoaded,
      userInput,
      countriesToDisplay
    };
  },
};
</script>
<style>
.spinner{
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid rgb(155, 154, 154);
  border-top: 10px solid rgb(4, 221, 4);
  animation: spin 2s forwards infinite;
}
.spinner-container{
  margin: 3rem auto;
}
@keyframes spin {
  0%{
    transform: rotate(s0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>
