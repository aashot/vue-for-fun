<template>
  <v-row justify="center">
    <v-dialog
      v-model="intDialogVisible"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="$emit('close')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ modalTitle }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-divider></v-divider>
        <div class="base-modal-content">
          <slot :name="modalType" v-for="modalType in modalTypes"></slot>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    modalVisible: {
      type: Boolean,
      required: true
    },
    modalTitle: {
      type: String,
      default: "Modal Title"
    },
    modalTypes: {
      type: Array,
      default: function() {
        return ["modalContent"];
      }
    }
  },

  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    };
  },

  computed: {
    intDialogVisible: {
      get() {
        return this.modalVisible;
      },

      set() {
        this.$emit("close");
      }
    }
  }
};
</script>