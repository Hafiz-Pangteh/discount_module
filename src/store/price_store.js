import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useDiscountStore } from "./discount_store";
import { useCartStore } from "./cart";
import discountData from "../data/discount";

export const usePriceStore = defineStore('usePriceStore', () => {
    const price = ref();

    const discount_store = useDiscountStore();
    const cart_store = useCartStore();

    const findDiscountFromData = (id) => {
        return discountData.find(value => value.id === id)
    }

    const getCouponDiscountPrice = computed(() => {
        const getDiscount = discount_store.loadDiscountLocalStorage('coupon');
        let discounPrice = 0;
        if (getDiscount.length <1) {
            discounPrice = 0;
        } else {
            const findDiscount = findDiscountFromData(getDiscount[0].id)

            if (findDiscount.id === 1) {
                discounPrice = findDiscount.amount;
            } else if (findDiscount.id === 2) {
                const percentageDiscount = (cart_store.totalPrice * findDiscount.amount) / 100;
                discounPrice = percentageDiscount;
            }
        }
        return discounPrice.toFixed(2)
    })
    const getonTopDiscountPrice = computed(() => {
        let price = 0;
        let discountPrice = 0;
        const getDiscount = discount_store.loadDiscountLocalStorage('on Top');
        if (getDiscount.length < 1) {
            discountPrice = 0;
        } else {
            const findDiscount = findDiscountFromData(getDiscount[0].id)
            const getShoppingCart = cart_store.loadFromLocalStorage();
            const point = cart_store.point();

            if (findDiscount.id === 3) {
                const jeweryProduct = getShoppingCart.map(value => value)
                const jeweryPrice = jeweryProduct.forEach(value => {
                    if (value.category === 'jewelery') {
                        price += (value.price * value.quantity)
                    }
                })
                discountPrice = (price * findDiscount.amount) / 100;
            } else if (findDiscount.id === 4) {
                discountPrice = point * findDiscount.amount;
            }
        }
        return discountPrice.toFixed(2)

    })

    const getSeasonalDiscountPrice = computed(() => {
        let getPrice = cart_store.totalPrice;
        let discount = 0;
        const getDiscount = discount_store.loadDiscountLocalStorage('Seasonal');
        if (getDiscount.length < 1) {
            discount = 0
        } else {
            const findDiscount = findDiscountFromData(getDiscount[0].id)
            while (getPrice >= 200) {
                discount += findDiscount.amount;
                getPrice -= 200;
            }
        }
        return discount.toFixed(2);

    })

    return { getCouponDiscountPrice, getonTopDiscountPrice, getSeasonalDiscountPrice }
})