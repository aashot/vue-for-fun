<template>
  <div class="home">
    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-1">instagram</div>
          <v-list-item-title clasd="headline mb-1">@lives_atreo</v-list-item-title>
          <v-list-item-subtitle>Ashot Hovhannisyan</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar color="grey darken-3">
          <v-img class="elevation-6"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn text>View</v-btn>
        <v-btn text>Edit</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LinkCardItem",
  components: {}
};
</script>
