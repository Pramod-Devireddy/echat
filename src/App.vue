<template>
  <v-app>
    <EChatHeader />
    <EChatBody />
    <EChatInput />
  </v-app>
</template>

<script>
import EChatHeader from "@/views/EChatHeader.vue";
import EChatBody from "@/views/EChatBody.vue";
import EChatInput from "@/views/EChatInput.vue";
export default {
  name: "App",

  components: {
    EChatHeader,
    EChatBody,
    EChatInput
  },

  data: () => ({
    //
  }),
};
</script>
