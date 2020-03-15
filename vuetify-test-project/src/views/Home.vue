<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="links-row" v-for="row in 3" :key="row">
            <h3 class="links-row-title">Instagram</h3>
            <v-row>
              <v-col lg="4" v-for="card in 3" :key="card">
                <link-card-item />
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="add-new-card">
      <floating-action-button @onClick="addNewCard" icon="mdi-plus" color="primary" />
    </div>
    <base-modal :modalVisible="modalVisible" @close="modalVisible = false" :modalTypes="modalTypes">
      <template v-slot:addModalContent>
        <add-card-modal />
      </template>
    </base-modal>
  </div>
</template>

<script>
import FloatingActionButton from "@/components/FloatingActionButton.vue";
import LinkCardItem from "@/components/LinkCardItem.vue";
import BaseModal from "@/components/BaseModalSlot.vue";
import AddCardModal from "@/components/modals/AddCardModal.vue";

export default {
  name: "Home",

  components: {
    FloatingActionButton,
    LinkCardItem,
    BaseModal,
    AddCardModal
  },

  data: () => ({
    modalVisible: false,
    modalTypes: ["addModalContent", "editModalContent", "viewModalContent"]
  }),

  methods: {
    addNewCard() {
      this.modalVisible = true;
      console.log("!!!");
    }
  }
};
</script>
