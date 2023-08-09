<template>
  <div class="container mx-auto sm:px-4">
    <h1 class="lg:prose-2xl text-center text-2xl mb-4 font-semibold">Daftar Nama Orang Random</h1>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">ID</th>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Email</th>
          <th class="px-4 py-2">Address</th>
          <th class="px-4 py-2">No. Phone</th>
          <th class="px-4 py-2">Website</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in getUsers" :key="user.id">
          <td class="border px-4 py-2">{{ user.id }}</td>
          <td class="border px-4 py-2">{{ user.name }}</td>
          <td class="border px-4 py-2">{{ user.email }}</td>
          <td class="border px-4 py-2">
            {{'St. ' +
              user.address.street +
              ', ' +
              user.address.suite +
              ', ' +
              user.address.city
            }}
          </td>
          <td class="border px-4 py-2">{{ user.phone }}</td>
          <td class="border px-4 py-2 hover:underline decoration-1 text-blue-600"><a :href=user.website >{{ user.website }}</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('users', ['getUsers']),
  },
  methods: {
    ...mapActions('users', ['fetchUsers']),
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style></style>
