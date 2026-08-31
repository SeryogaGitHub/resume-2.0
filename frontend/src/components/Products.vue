<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/products';

const products = ref([]);

const form = ref({
  name: '',
  price: ''
});

const editingId = ref(null);

const editForm = ref({
  name: '',
  price: ''
});

const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);

    products.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

const createProduct = async () => {
  try {
    const response = await axios.post(API_URL, {
      name: form.value.name,
      price: Number(form.value.price)
    });

    products.value.push(response.data);

    form.value = {
      name: '',
      price: ''
    };
  } catch (error) {
    console.error(error);
  }
};

const startEdit = (product) => {
  editingId.value = product.id;

  editForm.value = {
    name: product.name,
    price: product.price
  };
};

const updateProduct = async () => {
  try {
    const response = await axios.put(
        `${API_URL}/${editingId.value}`,
        {
          name: editForm.value.name,
          price: Number(editForm.value.price)
        }
    );

    const index = products.value.findIndex(
        product => product.id === editingId.value
    );

    if (index !== -1) {
      products.value[index] = response.data;
    }

    cancelEdit();
  } catch (error) {
    console.error(error);
  }
};

const cancelEdit = () => {
  editingId.value = null;

  editForm.value = {
    name: '',
    price: ''
  };
};

const deleteProduct = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);

    products.value = products.value.filter(
        product => product.id !== id
    );
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getProducts();
});
</script>

<template>
  <div class="products">

    <h1>Products</h1>

    <!-- CREATE -->

    <form @submit.prevent="createProduct">
      <input
          v-model="form.name"
          type="text"
          placeholder="Product name"
      />

      <input
          v-model="form.price"
          type="number"
          placeholder="Price"
      />

      <button type="submit">
        Add product
      </button>
    </form>

    <!-- READ -->

    <div
        v-for="product in products"
        :key="product.id"
        class="product"
    >

      <template v-if="editingId !== product.id">

        <h2>
          {{ product.name }}
        </h2>

        <p>
          {{ product.price }} грн
        </p>

        <!-- UPDATE -->

        <button @click="startEdit(product)">
          Edit
        </button>

        <!-- DELETE -->

        <button @click="deleteProduct(product.id)">
          Delete
        </button>

      </template>

      <!-- EDIT -->

      <template v-else>

        <input
            v-model="editForm.name"
            type="text"
        />

        <input
            v-model="editForm.price"
            type="number"
        />

        <button @click="updateProduct">
          Save
        </button>

        <button @click="cancelEdit">
          Cancel
        </button>

      </template>

    </div>

  </div>
</template>