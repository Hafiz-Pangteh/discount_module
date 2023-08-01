<template >
    <table class="table">
        <thead>
            <tr>
                <th scope="col fs-1">Discount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <h6>Coupon Discount</h6>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Coupon Discount
                    </button>
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Coupon Discount</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="form-check ms-3 mt-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1" value=1 v-model="picked">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {{ FixedDiscount.campaign }}
                                        <p class="ms-2">Description: {{ FixedDiscount.description }} </p>
                                    </label>
                                </div>
                                <div class="form-check ms-3 mb-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault2" value=2 v-model="picked">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        {{ PercenTageDiscount.campaign }}
                                        <p class="ms-2">Description: {{ PercenTageDiscount.description }}</p>
                                    </label>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary"
                                        @click="discount_store.add_discount(picked)">Save
                                        changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <h6>On Top Discount</h6>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#onTopModal">
                        On Top Discount
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="onTopModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Coupon Discount</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="form-check ms-3 mt-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1" value=3 v-model="picked">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {{ CategoryDiscount.campaign }}
                                        <p class="ms-2">Description: {{ CategoryDiscount.description }}</p>
                                    </label>
                                </div>
                                <div class="form-check ms-3 mb-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault2" value=4 v-model="picked">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        {{ PointDiscount.campaign }}
                                        <p class="ms-2">Description: {{ PointDiscount.description }}</p>
                                    </label>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary"
                                        @click="discount_store.add_discount(picked)">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <h6>Seasonal Discount</h6>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#seasonanlModal">
                        Seasonal Discount
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="seasonanlModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Seasonal Discount</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="form-check ms-3 mt-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1" value=5 v-model="picked">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {{ SeasonalDiscount.campaign }}
                                        <p class="ms-2">Description: {{ SeasonalDiscount.description }}</p>
                                    </label>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary"
                                        @click="discount_store.add_discount(picked)">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
import discountData from './../data/discount';
import { useDiscountStore } from '../store/discount_store';
import { computed, ref } from 'vue';

const picked = ref(0);
const discount_store = useDiscountStore();
const discounts = computed(() => discounts)

const FixedDiscount = findDiscount(1)
const PercenTageDiscount = findDiscount(2)
const CategoryDiscount = findDiscount(3)
const PointDiscount = findDiscount(4)
const SeasonalDiscount = findDiscount(5)

function findDiscount(id) {
    return discountData.find(value => value.id === id)
}

</script>
<style lang="scss" scoped></style>