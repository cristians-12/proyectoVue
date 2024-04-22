<script setup>
import image from "../assets/img/logo.png";
import facebook from "../assets/img/img1.png";
import insta from "../assets/img/img2.png";
import yt from "../assets/img/img3.png";
</script>
<template>
  <div
    class="fixed top-16 sm:top-20 right-0 z-20 w-44 pt-5 px-3 pb-3 bg-[black] rounded-lg text-white font-bold flex flex-col justify-center"
  >
    <div class="flex items-center gap-5">
      <figure
        class="rounded-full border w-fit px-2 py-1 border-[#84754E] md:px-2 md:py-1 lg:px-3 lg:py-2"
      >
        <img :src="facebook" alt="facebook logo" />
      </figure>
      <figcaption>Facebook</figcaption>
    </div>
    <div class="flex items-center gap-5 mt-2">
      <figure
        class="rounded-full border w-fit px-1 py-1 border-[#84754E] md:px-2 md:py-1 lg:px-3 lg:py-2"
      >
        <img :src="insta" alt="instagram logo" />
      </figure>
      <figcaption>Instagram</figcaption>
    </div>
    <div class="flex items-center gap-5 mt-2">
      <figure
        class="rounded-full border w-fit px-1 py-1 border-[#84754E] md:px-2 md:py-1 lg:px-3 lg:py-2"
      >
        <img :src="yt" alt="Youtube logo" />
      </figure>
      <figcaption>YouTube</figcaption>
    </div>
    <router-link to="/" class="w-[100%] text-center mt-2">REGISTRATE</router-link>
  </div>
</template>