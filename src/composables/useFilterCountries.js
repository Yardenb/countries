import { ref, computed } from "vue"

const useFilterCountries = (countries = []) => {
    const userInput = ref('');
    const countriesToDisplay = computed(() => {
        if (!userInput.value) {
            return []
        }
        return countries.value.filter(country => country.includes(userInput.value))
    })
    return {
        countriesToDisplay,
        userInput
    }
}

export default useFilterCountries