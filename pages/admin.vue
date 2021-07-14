<template>
  <div>
    <div class="w-full text-center text-white text-3xl my-5 uppercase">admin page</div>
    <input type="text" class="text-black" v-model="stock.ticker" placeholder="ticker">
    <input type="text" class="text-black" v-model="stock.color" placeholder="color">

    <div class="flex mt-5" @click="addStock">
        <div class="p-4 text-white border-2 rounded-lg border-base-green">Send</div>
    </div>

    <div v-for="doc in docs" :key="doc.id">
        <input type="text" v-model="doc.ticker" placeholder="ticker">
        <input type="text" v-model="doc.color" placeholder="color">
        <div class="flex space-x-5">
            <div class="text-white cursor-pointer hover:text-base-green" @click="updateStock(doc.id, doc.ticker, doc.color)">update</div>
            <div class="text-white cursor-pointer hover:text-base-red" @click="deleteStock(doc.id)">delete</div>
        </div>
    </div>
  </div>
</template>

<script>
import { db, auth } from '../plugins/fireConf'
export default {
    data() {
        return {
            stock: {
                ticker: '',
                color: '',
            },
            docs: [],
        }
    },
    methods: {
        addStock: function() {
            db.collection("stocks").add({
                ticker: this.stock.ticker,
                color: this.stock.color,
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        },
        updateStock: function(id, ticker, color) {
            db.collection("stocks").doc(id).update({
                ticker: ticker,
                color: color,
            })
        },
        deleteStock: function(id) {
            db.collection("stocks").doc(id).delete().then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        },
    },
    mounted() {
        const getStocks = async () => {
            db.collection("stocks").onSnapshot(item => {
                this.docs = item.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })
            })
        }
        getStocks()
    }
}
</script>

<style>

</style>