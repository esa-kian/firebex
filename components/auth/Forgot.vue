<template>
  <div class="login">
    <div class="content">
      <div class="form">
        <div class="header">بازیابی گذرواژه</div>
        <div class="inputs">
          <div class="email">
            <input type="email" placeholder="ایمیل" name="email" id="email" />
            <span class="email"></span>
          </div>
          <div class="actions">
            <div class="recaptcha">I'm not robot</div>
            <button class="submit">ارسال ایمیل بازیابی</button>
          </div>
        </div>
      </div>
      <div class="sidebar">
        <div class="action">
          <button @click.prevent="$router.push('/register')">
            بازگشت
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
  justify-content: space-between;
}
.inputs input {
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
div.email {
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
/* .inputs input#email:valid {
  background-image: url("../../assets/auth/email_on.svg");
} */

.inputs .actions {
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
    padding: 15px 0 130px;
    height: fit-content;
  }
  .content {
    flex-direction: column !important;
    margin-top: 0px !important;
    width: 90% !important;
  }
  .form,
  .sidebar {
    width: 100%;
  }
}
</style>
