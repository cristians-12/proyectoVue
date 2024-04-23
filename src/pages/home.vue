<script setup>
// importaciones de componentes
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

// importar imagenes
import img from "../assets/img/img.jpg";
import text from "../assets/img/text.png";
import cap from "../assets/img/img4.png";
import text2 from "../assets/img/text2.png";

// importas figuras
import figuras from "../assets/img/figuras.png";
import figuras1 from "../assets/img/Group.png";
import figuras2 from "../assets/img/figura2.png";
import figuras3 from "../assets/img/fig.png";
import figura4 from "../assets/img/fig1.png";
import figura5 from "../assets/img/fig2.png";

import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const verify = ref(false);
const nombres = ref(null);
const apellidos = ref(null);
const numero = ref(null);
const cedula = ref(null);
const placa = ref(null);
const correo = ref(null);

const errorForm = ref(null);

const handleVerifyOk = () => {
  verify.value = true;
};
const handleVerifyFalse = () => {
  verify.value = false;
};

const handleClick = () => {
    if (verify.value && nombres.value !== null && apellidos.value !== null && numero.value !== null && cedula.value !== null && placa.value !== null && correo.value !== null) {
        router.push('/thanks');
    }else{
        errorForm.value = 'Debes llenar todos los campos.'
    }
    console.log(verify.value, nombres.value, apellidos.value)
};
</script>

<template>
  <Header />
  <main>
    <section class="overflow-hidden relative md:mt-0 mt-10">
      <div class="lg:h-[76vh] overflow-hidden">
        <img :src="img" alt="img" class="w-screen" />
      </div>
      <div
        class="absolute inset-0 bg-gradient-to-t lg:h-[76vh] h-[63vw] md:h-[63vw] from-black to-transparent"
      ></div>
      <div
        class="bg-black flex lg:flex-row flex-col px-5 md:px-36 lg:h-[30vh] items-center text-white md:mb-20"
      >
        <img
          class="absolute md:bottom-[38rem] bottom-[35rem] lg:bottom-[21rem] md:w-[45%] lg:w-[35%] w-[60%]"
          :src="text"
          alt="texto"
        />
        <p class="lg:mt-5 lg:w-[45%] text-xl text-justify self-center">
          Este año estamos rindiendo tributo a nuestra marca
          <b
            >Mack la cual lleva 100 años rodando por las carreteras de
            Colombia</b
          >
          y queremos hacerte parte de esta celebración. <br /><br />
          Si eres dueño de un camión Mack
          <b>¡YA GANASTE!, SOLO REGÍSTRATE Y RECLAMA TUS PREMIOS.</b>
        </p>
        <img
          class="lg:absolute block right-44 bottom-40 lg:w-[30%]"
          :src="cap"
          alt="img-cap"
        />
      </div>
    </section>

    <section class="bg-white lg:px-36 md:px-10 px-5 pb-10" id="registrate">
      <h2 class="text-center font-extrabold text-5xl pt-10">
        REGÍSTRATE Y GANA
      </h2>
      <p class="text-center mt-5 font-medium">
        Los datos registrados deben pertenecer a la persona que figura en la
        tarjeta de propiedad del vehículo MACK; si una persona tiene más de un
        (1) camión MACK a su nombre sólo se puede inscribir una vez.
      </p>
      <div class="md:flex gap-10">
        <div class="md:w-[50%]">
          <figure class="relative">
            <img :src="figuras" alt="figuras" class="w-[100%]" />
            <img
              :src="figuras1"
              alt="figura1"
              class="absolute top-10 w-[100%]"
            />
            <img
              :src="figuras2"
              alt="figura2"
              class=" sm:top-16 sm:w-[10%] w-[10%] sm:left-3 absolute md:top-14 top-14 left-5"
            />
            <p
              class="text-white sm:text-[4vw] md:text-[2vw] absolute md:top-14 top-14 left-20 md:w-[30vw] text-[4vw] lg:text-[1.45vw]"
            >
              LOS <b class="font-extrabold">PRIMEROS 100</b> INSCRITOS SERAN
              <b class="font-extrabold">GANADORES</b> DE
            </p>
          </figure>
          <article class="mt-5">
            <div class="flex gap-3 items-center">
              <img :src="figuras3" alt="" />
              <p>*Una gorra emblemática Mack.</p>
            </div>
            <div class="flex gap-3 mt-5">
              <figure class="md:w-[25%] xl:w-[10%] sm:w-[10%] w-[20%]"><img :src="figura4" alt="" /></figure>
              <p>
                **<b>25% de descuento en repuestos</b> instalados en taller el
                día que reclames tu premio o
                <b>15% de descuento en repuestos</b> comprados por mostrador el
                día que reclames tu premio.
              </p>
            </div>
            <div class="flex mt-5">
              <figure class="md:w-[20%] xl:w-[7%] sm:w-[7%] w-[15%]"><img :src="figura5" alt="" /></figure>
              <p>
                ***Una tarjeta de miembro Jauría Mack para acceder a descuentos
                especiales. (Aplica para el año 2023)
              </p>
            </div>
            <img class="mt-10 md:ms-15" :src="text2" alt="" />
            <p class="mt-5 pb-10">
              <b>Válido sólo para Colombia.</b> <br />
              Los premios no aplican para convenios de flotas.
            </p>
          </article>
        </div>

        <div class="md:w-[50%]">
          <div class="flex md:flex-row flex-col gap-4">
            <div class="md:w-[50%]">
              <label class="font-bold" for="nombres">Nombres*</label><br />
              <input
                class="border bg-[#eaeaea] border-[#84754E] w-[100%]"
                type="text"
                id="nombres"
                v-model="nombres"
              />
            </div>
            <div class="md:w-[50%]">
              <label class="font-bold" for="nombre">Apellidos*</label><br />
              <input
                class="border bg-[#eaeaea] w-[100%] border-[#84754E]"
                type="text"
                id="apellidos"
                v-model="apellidos"
              />
            </div>
          </div>
          <div class="flex gap-4 mt-3">
            <div class="w-[50%]">
              <label class="font-bold" for="numero">Numero de celular*</label
              ><br />
              <input
                class="border bg-[#eaeaea] border-[#84754E] w-[100%]"
                type="text"
                id="numero"
                v-model.number="numero"
              />
            </div>
            <div class="w-[50%]">
              <label class="font-bold" for="cedula">Cedula*</label><br />
              <input
                class="border bg-[#eaeaea] w-[100%] border-[#84754E]"
                type="text"
                id="cedula"
                v-model.number="cedula"
              />
            </div>
          </div>
          <div class="mt-3">
            <label class="font-bold mt-3" for="placa">Placa del camion*</label
            ><br />
            <input
              class="border bg-[#eaeaea] w-[100%] border-[#84754E]"
              type="text"
              id="placa"
              v-model.trim="placa"
            />
          </div>
          <div class="mt-3">
            <label class="font-bold" for="correo">Correo electronico*</label
            ><br />
            <input
              class="border bg-[#eaeaea] w-[100%] border-[#84754E]"
              type="text"
              id="correo"
              v-model="correo"
            />
          </div>

          <div class="mt-3">
            <label class="font-bold" for="taller"
              >¿En que taller desea reclamar su premio?*</label
            ><br />
            <select
              class="border bg-[#eaeaea] w-[100%] border-[#84754E]"
              name="taller"
              id="taller"
            >
              <option value="1">Valledupar, Cesar</option>
            </select>
          </div>
          <p class="font-bold mt-2">
            Autorización para el uso y tratamiento de datos e información
            personal
          </p>
          <div class="border bg-[#eaeaea] w-[100%] border-[#84754E]">
            Declaro que he sido informado por el grupo empresarial compuesto por
            las sociedades Praco Didacol S.A.S, Distribuidora Hino de Colombia
            S.A.S, Inmobiliaria Inchcape Colombia S.A.S y Matrase S.A.S,; en
            adelante Las Compañías, que serán el Responsable del Tratamiento de
            mis Datos Personales, por lo que autorizo de manera previa,
          </div>
          <div class="mt-3 flex gap-5">
            <div class="flex gap-3 items-center">
              <input
                type="radio"
                class="text-[#84754E] accent-[#84754E] caret-[#84754E]"
                name="accept"
                id="accept"
                @click="handleVerifyOk"
              />
              <label for="accept" class="font-bold text-[#84754E]"
                >Acepto</label
              >
            </div>

            <div class="flex gap-3 items-center">
              <input
                type="radio"
                class="text-[#84754E] accent-[#84754E] caret-[#84754E]"
                name="accept"
                id="accept"
                @click="handleVerifyFalse"
              />
              <label for="accept" class="font-bold text-[#84754E]"
                >No acepto</label
              >
            </div>
          </div>
          <button
            :class="{
              'bg-black text-white py-2 font-bold w-[100%] mt-10 shadow-lg':
                verify,
              'bg-gray-500 text-white py-2 font-bold w-[100%] mt-10 shadow-lg':
                !verify,
            }"
            @click="handleClick"
          >
            ENVIAR
          </button>
          <h4 class="text-center text-red-700 mt-5">{{  errorForm }}</h4>
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>