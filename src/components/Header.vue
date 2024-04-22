<script setup>
import image from "../assets/img/logo.png";
import facebook from "../assets/img/img1.png";
import insta from "../assets/img/img2.png";
import yt from "../assets/img/img3.png";

import popUpMobile from "./popUpMobile.vue";
import { ref } from "vue";

const hide = ref(false);

const toggle = ()=>{
  hide.value = !hide.value;
}
</script>

<template>
  <header
    class="bg-black sm:px-20 px-5 py-5 text-white flex items-center justify-between fixed top-0 w-screen z-30"
  >
    <figure class="w-[40%]">
      <img :src="image" alt="logo" />
    </figure>
    <div class="font-bold lg:gap-44 md:gap-10 items-center hidden md:flex">
      <a href="#registrate"> REGISTRATE </a>
      <div class="flex gap-2 items-center">
        <figure
          class="rounded-full border border-[#84754E] md:px-2 md:py-1 lg:px-3 lg:py-2"
        >
          <img :src="facebook" alt="facebook logo" />
        </figure>
        <figure
          class="rounded-full border border-[#84754E] md:px-1 md:py-1 lg:px-2 lg:py-2"
        >
          <img :src="insta" alt="instagram logo" />
        </figure>
        <figure
          class="rounded-full border border-[#84754E] md:px-1 md:py-2 lg:px-2 lg:py-3"
        >
          <img :src="yt" alt="youtube logo" />
        </figure>
      </div>
    </div>
    <figure class="md:hidden text-white block">
      <svg @click="toggle" class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          fill="#ffffff"
          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        />
      </svg>
    </figure>
  </header>
  <popUpMobile v-show="hide" />
</template>