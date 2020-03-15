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
      <div class="input-field">
        <input id="name" type="text" v-model.trim="name" :class="{ invalid: isNameRequired }" />
        <label for="name">Имя</label>
        <small class="helper-text invalid" v-if="isNameRequired">Введите ваше имя</small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link :to="{ name: 'login' }">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Register",

  data() {
    return {
      email: "",
      password: "",
      name: "",
      agree: false
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
    },

    isNameRequired() {
      return this.$v.name.$dirty && !this.$v.name.required;
    }
  },

  validations: {
    email: { email, required },
    password: { required, minLength: minLength(8) },
    name: { required },
    agree: { checked: v => v }
  },

  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      };

      console.log(formData);

      this.$router.push({ name: "home" });
    }
  }
};
</script>
