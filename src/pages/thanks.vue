<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import bg from "../assets/img/bg.png";

// figuras

import figura from "../assets/img/fig3.png";
import figura1 from "../assets/img/img5.png";
import text from "../assets/img/text3.png";
</script>

<template>
  <Header />
  <main>
    <div class="relative flex justify-center items-center h-screen md:h-auto">
      <div>
        <img :src="bg" class="w-screen h-screen md:h-[100%]  object-fill" alt="" />
      </div>
      <div
        class="text-white absolute top-56 z-10 text-center flex flex-col items-center"
      >
        <h3 class="text-5xl font-bold">¡Gracias por registrarte!</h3>
        <p class="mt-5">
          Puedes reclamar tu premio en Bogotá PracoDidacol sede Calle 80.
          Dirección: Calle 80 Autopista Medellín, Km 1.2 vía Siberia Costado
          Sur.
        </p>
        <div class="h-[3px] bg-white w-[70%] mt-5"></div>
        <div class="mt-5 flex items-center justify-center gap-1 md:gap-5">
          <img :src="figura" alt="" />
          <h3 class="text-4xl font-bold w-[60%]">¡Quiero ir por mi premio!</h3>
          <img :src="figura1" alt="" />
        </div>
        <div class="h-[3px] bg-white w-[70%] mt-5"></div>

        <article class="bg-[#d30507] overflow-auto py-5 px-10 w-[70%] mt-5">
          No olvides que para reclamar tu premio debes ser el dueño del camión
          MACK y debes presentar la tarjeta de propiedad de tu vehículo MACK. Si
          por algún motivo no puedes reclamar el premio personalmente, debes
          enviar un correo autorizando a la persona que va a reclamarlo.
        </article>
        <img class="mt-20 w-[30%]" :src="text" alt="" />
      </div>
    </div>
    <div
      class="absolute h-[80vh] inset-0 bg-gradient-to-b from-black to-transparent"
    ></div>
  </main>
  <Footer />
</template>