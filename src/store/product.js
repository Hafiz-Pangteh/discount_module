import { defineStore } from "pinia";
import { ref, computed } from 'vue';
import axios from "axios";

export const useProductStore = defineStore('useProductStore', () => {
    const products = ref([]);

    const list_product = computed(() => products.value)

    const fetch_product = async () => {
        await axios.get(`${import.meta.env.VITE_API}`)
            .then((response) => {
                products.value = response.data;
            }).catch((error) => { console.log(error) })
    }
    return { fetch_product, list_product, products }
})

