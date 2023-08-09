<template>
  <div class="flex flex-row justify-center">
    <div class="basis-1/2">
      <div class="w-full max-w-xl ml-10 mt-10">
        <form class="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
          <h1 class="text-4xl font-bold mb-5">Form</h1>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Fullname :
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Email :
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id=""
              type="email"
              placeholder="Email"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Subject
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Subject"
            />
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Message
            </label>
            <textarea
              name=""
              id=""
              cols="10"
              rows="6"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div class="mb-6"></div>
          <div class="flex items-center justify-between">
            <button
              class="bg-[#1A56DB] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="basis-1/2">
      <div class="mt-16">
        <h1 class="text-4xl font-bold">Contact Me</h1>
        <p class="text-xl mt-3">
          Silahkan kontak saya jika anda membutuhkan 
        </p>
        <p class="text-xl">
            atau jika ada pertanyaan untuk saya
        </p>
        <div class="flex flex-row mt-3">
            <div>
                <i class="fa-brands fa-whatsapp text-4xl"></i>
            </div>
            <div class="ml-3 mt-4" >
                <p class="text-1xl font-bold">0838-2102-1360</p>
            </div>
        </div>
        <div class="flex flex-row mt-3">
            <div>
                <i class="fa-regular fa-envelope text-4xl"></i>
            </div>
            <div class="ml-3 mt-3" >
                <p class="text-1xl font-bold">hafidalazhar5@gmail.com</p>
            </div>
        </div>
        <div class="flex flex-row mt-3">
            <div>
                <i class="fa-solid fa-location-dot text-4xl"></i>
            </div>
            <div class="ml-3 mt-4" >
                <p class="text-1xl font-bold">Rancamanyar</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
