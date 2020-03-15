<template>
  <v-app>
    <the-navigation-bar />
    <v-content>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer app>
      <footer-element />
    </v-footer>
  </v-app>
</template>

<script>
import TheNavigationBar from "@/components/TheNavigationBar.vue";
import FooterElement from "@/components/FooterElement.vue";
export default {
  name: "App",

  components: {
    TheNavigationBar,
    FooterElement
  },

  data: () => ({
    //
  })
};
</script>
