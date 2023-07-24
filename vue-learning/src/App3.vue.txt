<template>
  <div id="tugas">
    <h2>Formulir</h2>
    <form @submit.prevent="submitForm">
      <label for="nama">Nama : </label>
      <input class="{'is-invalid':is}" type="text" id="nama" v-model="info.nama" required/>
      <br>
      <label for="kelas">Kelas :</label>
      <input type="kelas" id="kelas" v-model="info.kelas" required />
      <br>
      <label for="alamat">Alamat :</label>
      <textarea name="alamat" id="alamat" cols="30" rows="3" v-model="info.alamat"></textarea>
      <br>
      <label for="mtk">Nilai MTK</label>
      <input type="number" id="mtk" v-model="info.mtk" required>
      <br>
      <label for="ipa">Nilai IPA</label>
      <input type="number" id="ipa" v-model="info.ipa" required>
      <br>
      <label for="mtk">Nilai B.Indo</label>
      <input type="number" id="indo" v-model="info.indo" required>
      <br>
      <button type="submit">Kirim</button>
    </form>
    <br>
    <div v-if="showResult">
      Nama : {{ nama }} <br>
      Kelas : {{ kelas }} <br>
      Alamat : {{ alamat }} <br>
      Nilai MTK : {{ mtk }} <br>
      Nilai IPA : {{ ipa }} <br>
      Nilai B.Indo : {{ indo }} <br>
      Total : {{ mtk + ipa + indo }} <br>
      Status :  {{ (mtk + ipa + indo) >= 260 ? 'Lulus' : 'Gagal' }}
    </div>
</div>  
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      info: {
        nama: ref(''),
        kelas: ref(''),
        alamat: ref(''),
        mtk: ref(),
        ipa: ref(),
        indo: ref(),
      },
      showResult: ref(false),
      nama: ref(''),
      kelas: ref(''),
      alamat: ref(''),
      mtk: ref(),
      ipa: ref(),
      indo: ref()
    };

  },
  methods: {
    submitForm() {
      this.nama = this.info.nama;
      this.kelas = this.info.kelas;
      this.alamat = this.info.alamat;
      this.mtk = this.info.mtk;
      this.ipa = this.info.ipa;
      this.indo = this.info.indo;
      this.showResult = true;
    },
  },
};
</script>

<style>
h1 {
  color: blue;
}

.error-message {
  color: red
}
</style>
