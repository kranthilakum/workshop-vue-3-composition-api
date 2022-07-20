import { ref, computed } from "vue";
import axios from "axios";
import orderBy from "lodash/orderby";

export const useFetchResource = (characterUrl, locationUrl) => {
  const characters = ref([]);
  const locations = ref([]);
  const loadingState = ref(false);
  const loadingLocations = ref(false);
  const orderKey = ref("name");
  const error = ref(null);

  const charactersOrdered = computed(() => {
    return orderBy(characters.value, orderKey.value);
  });
  const setOrderKey = (key) => {
    orderKey.value = key;
  };

  const locationsOrdered = computed(() => {
    return orderBy(locations.value, orderKey.value);
  });

  const fetchAllCharacters = async () => {
    loadingState.value = "loading";
    try {
      const response = await axios.get(characterUrl);
      characters.value = response.data.results;
    } catch (err) {
      error.value = err;
    }
    loadingState.value = "success";
  };

  const fetchLocations = async () => {
    loadingLocations.value = "loading";
    try {
      const response = await axios.get(locationUrl);
      locations.value = response.data.results;
    } catch (err) {
      error.value = err;
    }
    loadingLocations.value = "success";
  };

  const filteredCharacters = computed(() => {
    return characters.value.filter((character) => character.name.includes("a"));
  }).value;

  return {
    characters,
    locations,
    loadingState,
    loadingLocations,
    locationsOrdered,
    error,
    fetchAllCharacters,
    filteredCharacters,
    fetchLocations,
    charactersOrdered,
    setOrderKey,
  };
};
export default useFetchResource;
