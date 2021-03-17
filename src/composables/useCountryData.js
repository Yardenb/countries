import { ref } from 'vue'
const useCountryData = () => {
  const countryData = ref(null);
  const isLoaded = ref(false)
  const error = ref(null)
  const getCountryData = async () => {
    try {
      const res = await fetch('https://restcountries.eu/rest/v2/alpha/col');
      if (res.status !== 200) {
        throw new Error('Bad request, can not get country data')
      }
      countryData.value = await res.json();
      isLoaded.value = true
    } catch (e) {
      error.value = e.message;
    }
  }
  getCountryData()
  return {
    countryData,
    isLoaded,
    error
  }
}

export default useCountryData