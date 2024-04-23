import { ref, watchEffect } from "vue";

export const useMedia = (query) => {
   const matches = ref(false);

   watchEffect((onInvalidate) => {
      const media = window.matchMedia(query);

      if(media.matches !== matches.value) {
         matches.value = media.matches;
      }
//Si el media manches es diferente  se iguala el valor
      const onChange = () => {
         matches.value = media.matches;
      }

      media.addEventListener("change", onChange);

      onInvalidate(() => {
         media.removeEventListener("change", onChange);
      });
   });

   return matches
}