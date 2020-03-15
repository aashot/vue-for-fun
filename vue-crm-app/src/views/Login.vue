<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input id="email" type="text" v-model.trim="email" :class="{ invalid: isEmailInvalid }" />
        <label for="email">Email</label>
        <small v-if="isEmailRequired" class="helper-text invalid">Поле Email не должно быть пустым</small>
        <small v-else-if="isEmailIncorrect" class="helper-text invalid">Введите корректный Email</small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          class="validate"
          v-model.trim="password"
          :class="{ invalid: isPasswordInvalid }"
        />
        <label for="password">Пароль</label>
        <small class="helper-text invalid" v-if="isPasswordRequired">Введите пароль</small>
        <small
          class="helper-text invalid"
          v-else-if="isPasswordValidated"
        >Пароль должен быть {{ $v.password.$params.minLength.min }} символов. Сейчас он {{ password.length }}</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link :to="{ name: 'register' }">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import messages from "@/utils/messages";

export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: ""
    };
  },

  computed: {
    //TODO: There is a better way to validate fields using methods with arguments

    isEmailInvalid() {
      return (
        (this.$v.email.$dirty && !this.$v.email.required) ||
        (this.$v.email.$dirty && !this.$v.email.email)
      );
    },

    isEmailRequired() {
      return this.$v.email.$dirty && !this.$v.email.required;
    },

    isEmailIncorrect() {
      return this.$v.email.$dirty && !this.$v.email.email;
    },

    isPasswordInvalid() {
      return (
        (this.$v.password.$dirty && !this.$v.password.required) ||
        (this.$v.password.$dirty && !this.$v.password.minLength)
      );
    },

    isPasswordRequired() {
      return this.$v.password.$dirty && !this.$v.password.required;
    },

    isPasswordValidated() {
      return this.$v.password.$dirty && !this.$v.password.minLength;
    }
  },

  validations: {
    email: { email, required },
    password: { required, minLength: minLength(8) }
  },

  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }
  },

  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password
      };

      console.log(formData);

      this.$router.push({ name: "home" });
    }
  }
};
</script>
