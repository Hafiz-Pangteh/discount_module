import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useDiscountStore } from "./discount_store";
import { useCartStore } from "./cart";
import discountData from "../data/discount";

export const usePriceStore = defineStore('usePriceStore', () => {
    const price = ref();

    const discount_store = useDiscountStore();
    const cart_store = useCartStore();
    const carts = computed(() => cart_store.cart_preview)
    //const couponDiscountPrice = getCouponDiscountPrice('coupon');


    const getCouponDiscountPrice = (category) => {
        const getDiscount = discount_store.loadDiscountLocalStorage(category);
        const findDiscount = discountData.find(value => value.id === getDiscount[0].id)

        if (findDiscount.id === 1) {
            return findDiscount.amount.toFixed(2);
        } else if (findDiscount.id === 2) {
            const percentageDiscount = (cart_store.totalPrice * findDiscount.amount) / 100;
            return percentageDiscount.toFixed(2)
        }
    }
    const getonTopDiscountPrice = (category) => {
        const getDiscount = discount_store.loadDiscountLocalStorage(category);
        const findDiscount = discountData.find(value => value.id === getDiscount[0].id);
        const getShoppingCart = cart_store.loadFromLocalStorage();
        const point = cart_store.point();
        let price = 0;
        if (findDiscount.id === 3) {
            const jeweryProduct = getShoppingCart.map(value => value)
            const jeweryPrice = jeweryProduct.forEach(value => {
                if (value.category === 'jewelery') {
                    price += (value.price * value.quantity)
                }

            })
            const categoryDiscount = (price * findDiscount.amount) / 100;
            return categoryDiscount.toFixed(2)
        } else if (findDiscount.id === 4) {

            const pointDiscount = point * findDiscount.amount;
            return pointDiscount.toFixed(2)
        }
    }

    const getSeasonalDiscountPrice = (category) => {
        const getDiscount = discount_store.loadDiscountLocalStorage(category);
        const findDiscount = discountData.find(value => value.id === getDiscount[0].id)
        let getPrice = cart_store.totalPrice;
        let discount = 0;
        while (getPrice >= 200) {
            discount += findDiscount.amount;
            getPrice -= 200;

        }
        return discount.toFixed(2);

    }



    return { getCouponDiscountPrice, getonTopDiscountPrice, getSeasonalDiscountPrice }
})