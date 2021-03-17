import { ref } from "vue";

const useCountries = () => {
    const countries = ref([]);
    const error = ref(null);
    const isLoaded = ref(false);

    const getCountriesNames = async () => {
      try {
        const res = await fetch(
          "https://restcountries.eu/rest/v2/all?fields=name"
        );
        if (res.status !== 200) {
          throw new Error("No Data, countries names");
        }
        const rawData = await res.json();
        countries.value = rawData.filter(country => country.name).map(country => country.name);
        if (countries.value.length === 0) {
          throw new Error("No countries to display");
        }
        isLoaded.value = true;
      } catch (e) {
        error.value = e.message;
        isLoaded.value = true;
      }
    };

    getCountriesNames();
    return {
        countries,
        error,
        isLoaded
    }
}

export default useCountries