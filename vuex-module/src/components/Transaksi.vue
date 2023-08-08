<template>
  <div class="block w-full overflow-auto scrolling-touch">
    <table
      class="w-full max-w-full mb-4 bg-transparent table-hover table-bordered"
    >
      <thead>
        <tr class="text-lg mb-4">
          <th>#</th>
          <th>Donatur</th>
          <th>Jenis Bantuan</th>
          <th>Jumlah</th>
        </tr>
      </thead>
      <tbody class="mb-5">
        <tr
          v-for="(row, index) in listTransaksi"
          :key="index"
          class="text-center"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ row.donatur }}</td>
          <td>{{ row.bantuan }}</td>
          <td>{{ row.jumlah }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('transaksi', {
      listTransaksi: (state) => state.listTransaksi,
    }),
  },
};
</script>
