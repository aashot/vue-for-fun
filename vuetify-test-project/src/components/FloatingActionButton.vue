<template>
  <v-fab-transition>
    <v-btn
      @click="$emit('onClick')"
      :key="icon"
      :color="color"
      fixed
      fab
      dark
      bottom
      right
      class="v-btn--example"
    >
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
// @ is an alias to /src

export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  components: {}
};
</script>