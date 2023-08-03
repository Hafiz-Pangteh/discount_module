import { defineStore } from "pinia";
import { computed, ref } from "vue";
import discountData from "../data/discount";

export const useDiscountStore = defineStore('useDiscount', () => {
    const discounts = ref([])

    const add_discount = (id) => {

        const findId = discountData.find(value => value.id === parseInt(id))
        if (findId) {
            //clear local storage
            discounts.value.splice(0)
            saveDiscountLocalStorage(findId.category)

            //save local storage
            discounts.value.push(findId);
            saveDiscountLocalStorage(findId.category)
        } else {
            //clear local storage
            discounts.value.splice(0)
            saveDiscountLocalStorage(findId.category)
        }
    }
    const saveDiscountLocalStorage = (category) => {
        localStorage.setItem(`${category}`, JSON.stringify(discounts.value))
    }
    const loadDiscountLocalStorage = (category) => {
        if (localStorage.getItem(`${category}`)) {
            discounts.value = JSON.parse(localStorage.getItem(`${category}`))
            return discounts.value.map((value, index) => {
                return value
            })
        }
    }
    const remove_discount = (category) => {
        discounts.value.splice(0)
        saveDiscountLocalStorage(category)
    }

    return { add_discount, loadDiscountLocalStorage, remove_discount }
})