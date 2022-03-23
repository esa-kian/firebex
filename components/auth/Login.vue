<template>
  <div class="login">
    <div class="content">
      <div class="form">
        <div class="header">ورود به حساب کاربری</div>
        <div class="inputs">
          <div class="email">
            <input type="email" placeholder="ایمیل" name="" id="email" />
            <span class="email"></span>
          </div>
          <div class="password">
            <input
              type="password"
              minlength="8"
              placeholder="گذرواژه"
              name=""
              id="password"
            />
            <span class="password"></span>
          </div>
          <div class="footer">
            <div class="remeber">
              <input type="checkbox" name="remember" id="remember" />
              <label for="remember">مرا به خاطر بسپار</label>
            </div>
            <div class="forget">
              <router-link :to="'forgot-password'">
                فراموشی گذرواژه؟
              </router-link>
            </div>
          </div>
        </div>
        <div class="actions">
          <div class="recaptcha">I'm not robot</div>
          <button @click="login()" class="submit">ورود</button>

          <button @click="login()" class="google">
            <div class="google"></div>
            ورود با گوگل
          </button>
        </div>
      </div>
      <div class="sidebar">
        <div class="action">
          <button @click.prevent="$router.push('/register')">
            ثبت نام
            <div class="icon"></div>
          </button>
        </div>
        <div class="news">
          <div class="title">آخرین اخبار:</div>
          <div class="body">
            {{ latest_news }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    login() {
      this.$router.push("/dashboard");
    },
  },
  data() {
    return {
      latest_news:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله ",
    };
  },
};
</script>
<style scoped>
.login {
  background-color: #50788f;
  height: 100vh;
  padding: 20px 0 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login .content {
  margin-top: 120px;
  height: 500px;
  width: 70%;
  display: flex;
  /* align-items: center; */
}
.sidebar {
  width: 60%;
  height: 100%;
  background-image: url("../../assets/auth/wallpaper.png");
  background-blend-mode: screen;
  background-color: rgba(15, 67, 97, 0.59);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px 38px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sidebar .action {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
}
.sidebar .action button {
  background: rgba(193, 191, 191, 0.27);
  border-radius: 3px;
  border: none;
  outline: none;
  color: #e2e2e2;
  padding: 10px;
  font-size: 16px;
  text-align: right;
  width: 100px;
  display: flex;
  align-items: center;
  transition: 0.3s ease;
}
.sidebar .action button:hover {
  cursor: pointer;
  background: rgba(193, 191, 191, 0.089);
  transition: 0.3s ease;
}
button .icon {
  background-image: url("../../assets/auth/arrow-right.svg");
  background-position-x: left;
  background-position-y: center;
  background-size: 25px;
  width: 25px;
  height: 25px;
  background-repeat: no-repeat;
}
.form {
  width: 40%;
  height: 100%;
  border-radius: 0 5px 5px 0;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
}
.header {
  height: 100px;
}
.footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 13px;
}
.inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
}
.inputs input[type="password"],
.inputs input[type="email"] {
  width: 100%;
  border: 1px solid #514e4e;
  box-sizing: border-box;
  border-radius: 3px;
  outline: none;
  padding: 10px 40px;
  background-color: transparent;
  margin-bottom: 10px;
  color: #514e4e;
}
.inputs input:valid {
  border: 1px solid #c56154;
}
div.email,
div.password {
  width: 100%;
  position: relative;
}
span.email {
  background-image: url("../../assets/auth/email.svg");
  background-position-x: right;
  background-position-y: center;
  background-size: 20px;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 4%;
  top: 18%;
}
/* .inputs input#email:valid ~ span.email {
  background-image: url("../../assets/auth/email_on.svg");
} */
span.password {
  background-image: url("../../assets/auth/pass.svg");
  background-position-x: right;
  background-position-y: center;
  background-size: 20px;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 4%;
  top: 18%;
}
/* .inputs input#password:valid {
  background-image: url("../../assets/auth/pass_on.svg");
} */
.remeber {
  display: flex;
  align-items: flex-end;
  width: 55%;
  color: #514e4e;
}
.forget a {
  color: #514e4e;
}

.actions {
  display: flex;
  flex-direction: column;
  width: 100%;
}
button.submit {
  background: #56786f;
  opacity: 0.59;
  border-radius: 3px;
  width: 100%;
  border: none;
  outline: none;
  padding: 8px;
  font-size: 17px;
  color: #f7f5f5;
  margin: 10px 0;
  cursor: pointer;
}
.recaptcha {
  background: #c4c4c4;
  border-radius: 2px;
  height: 30px;
  padding: 10px;
  text-align: left;
}
button.google {
  border: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    91.37deg,
    #ff0000 0%,
    #fd5a00 15.42%,
    rgba(252, 139, 0, 0.851042) 23.75%,
    #faff00 44.06%,
    #05ff00 65.42%,
    #0dc075 83.65%,
    #00a2fd 100%
  );
  border-radius: 3px;
  width: 100%;
  outline: none;
  padding: 8px;
  font-size: 17px;
  color: #04192d;
  margin: 10px 0;
  cursor: pointer;
  background: rgba(193, 191, 191, 0.27);
  display: flex;
  align-items: center;
  transition: 0.3s ease;
}
button.google .google {
  background-image: url("../../assets/auth/google.svg");
  background-position-x: left;
  background-position-y: center;
  background-size: 25px;
  width: 38%;
  height: 25px;
  background-repeat: no-repeat;
  margin-left: 10px;
}
.news {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #e2e2e2;
}
.news .body {
  background: rgba(43, 41, 41, 0.72);
  border: 3px solid #3f3f3f;
  box-sizing: border-box;
  border-radius: 9px;
  padding: 10px;
  height: fit-content;
}
@media screen and (max-width: 768px) {
  .login {
    padding: 15px 0 250px;
    height: fit-content;
  }
  .content {
    margin-top: 0px !important;
    width: 90% !important;
    flex-direction: column;
  }
  .form,
  .sidebar {
    width: 100%;
  }
}
</style>
