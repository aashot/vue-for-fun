<template>
  <div class="brews">
    <h2>Brew Search</h2>
    <section>
      <form @submit.prevent="submitted">
        <input type="text" v-model="val" />
        <button>Submit</button>
      </form>
    </section>

    <div v-if="fetching"><h3>Fetching</h3></div>
    <div v-if="error"><h3>{{ error }}</h3></div>
    <div class="search-results" v-for="brewery of list" :key="brewery.id">
      <ul>
        <li>
          <span class="title">Name:</span>
          <span class="brew">{{ brewery.name }}</span>
        </li>

        <li>
          <span class="title">Street:</span>
          <span class="brew">{{ brewery.street }}</span>
        </li>

        <li>
          <span class="title">City:</span>
          <span class="brew">{{ brewery.city }}</span>
        </li>

        <li>
          <span class="title">City:</span>
          <span class="brew">{{ brewery.postal_code }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import useBrewsList from "../composables/use-brew-list";
export default {
  setup() {
    const { val, list, submitted, error, fetching } = useBrewsList();
    return { val, list, submitted, error, fetching };
  }

  // data() {
  //   return {
  //     val: null,
  //     breweries: []
  //   };
  // },

  // methods: {
  //   async submitted() {
  //     const response = await fetch(
  //       `https://api.openbrewerydb.org/breweries/?by_name=${this.val}`
  //     );
  //     const json = await response.json();

  //     this.breweries = json;
  //   }
  // }
};
</script>

<style scoped>
.search-results {
  display: flex;
  width: 600px;
  text-align: left;
}
.brews {
  max-width: 1024px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
}
ul {
  list-style-type: none;
  width: 100%;
}
li {
  display: flex;
  justify-content: space-between;
}
.brew {
  font-weight: bold;
}
</style>
