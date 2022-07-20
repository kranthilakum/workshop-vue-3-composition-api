import { ref, computed } from "vue";
import axios from "axios";
import orderBy from "lodash/orderby";

export const useFetchAllCharacters = (url) => {
  const characters = ref([]);
  const loadingState = ref(false);
  const orderKey = ref("name");
  const error = ref(null);

  const charactersOrdered = computed(() => {
    return orderBy(characters.value, orderKey.value);
  });
  const setOrderKey = (key) => {
    orderKey.value = key;
  };

  const fetchAllCharacters = async () => {
    loadingState.value = "loading";
    try {
      const response = await axios.get(url);
      characters.value = response.data.results;
      //   const response = await fetch(
      //     "https://rickandmortyapi.com/api/character/"
      //   );
      //   const data = await response.json();
      //   characters.value = data.results;
    } catch (err) {
      error.value = err;
    }
    loadingState.value = "success";
  };

  const filteredCharacters = computed(() => {
    return characters.value.filter((character) => character.name.includes("a"));
  }).value;

  return {
    characters,
    loadingState,
    error,
    fetchAllCharacters,
    filteredCharacters,
    charactersOrdered,
    setOrderKey,
  };
};
export default useFetchAllCharacters;
