<template>
  <div class="settings">
    <div class="privacy">
      <div class="security">
        <h4>تنظیمات امنیتی:</h4>
        <div>
          <input type="checkbox" name="sms" id="sms" />
          <label for="sms">ورود دو مرحله ای با پیامک</label>
        </div>
        <div>
          <input type="checkbox" name="email" id="email" />
          <label for="email">ورود دو مرحله ای با ایمیل</label>
        </div>
        <div>
          <input type="checkbox" name="google" id="google" />
          <label for="google">شناسایی دو عاملی گوگل</label>
        </div>
      </div>
      <div class="sms">
        <h4>تنظیمات پیامکی:</h4>
        <div>
          <input type="checkbox" name="sms1" id="sms1" />
          <label for="sms1"
            >ارسال پیامک خرید موفقیت آمیز ارز ، مقدار ارز ، نوع ارز ، مبلغ ریالی
            پرداخت شده
          </label>
        </div>
        <div>
          <input type="checkbox" name="sms2" id="sms2" />
          <label for="sms2"
            >ارسال پیامک خرید موفقیت آمیز ارز ، مقدار ارز ، نوع ارز ، مبلغ ریالی
            پرداخت شده
          </label>
        </div>
      </div>
    </div>
    <div class="password">
      <div class="header">
        <div class="title">تغییر رمز عبور</div>
        <div class="guide">
          رمز عبور باید شامل حداقل 8 کاراکتر انگلیسی شامل حداقل یک حرف بزرگ ، یک
          حرف کوچک و یک عدد باشد. در صورتی که قصد تغییر رمز عبور را ندارید ،
          فیلدهای زیر را تغییر ندهید.
        </div>
      </div>
      <div class="body">
        <div>
          <label for="current_password">رمز عبور فعلی</label>
          <input
            type="password"
            name="current_password"
            id="current_password"
          />
        </div>
        <div>
          <label for="new_password">رمز عبور جدید</label>
          <input type="password" name="new_password" id="new_password" />
        </div>
        <div>
          <label for="confirmation_password">تکرار رمز عبور جدید</label>
          <input
            type="password"
            name="confirmation_password"
            id="confirmation_password"
          />
        </div>
        <div>
          <button class="submit">ثبت تغییرات</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.settings {
  background-color: #efe2f8;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 160px 10px 20px;
}
.privacy {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.security {
  background-image: url("../../assets/dashboard/shield.svg");
  background-size: contain;
  background-blend-mode: screen;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
  background-color: #efefef;
  border-radius: 8px;
  height: 252px;
  width: 49%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sms {
  background-image: url("../../assets/dashboard/sms.svg");
  background-size: contain;
  background-blend-mode: screen;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
  background-color: #efefef;
  border-radius: 8px;
  height: 252px;
  width: 49%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.password {
  background-image: url("../../assets/dashboard/lock.svg");
  background-size: contain;
  background-blend-mode: screen;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
  background-color: #efefef;
  border-radius: 8px;
  height: 252px;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10px;
}
.security div,
.sms div {
  display: flex;
  align-items: center;
}
label {
  font-size: 14px;
  line-height: 40px;
}
h4 {
  text-align: right;
  margin: 10px 0;
}
input[type="password"] {
  border: 1px solid #04192d;
  height: 45px;
  width: 222px;
  transition: 0.3s ease;
  border-radius: 5px;
  padding: 0 10px;
}
input[type="password"]:focus {
  box-shadow: 0px 5px 13px rgba(16, 16, 16, 0.41);
  transition: 0.3s ease;
}
.body {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  height: 100px;
}
.body div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 24.5%;
}
button.submit {
  height: 45px;
  text-align: center;
  color: #ebebeb;
  width: 222px;
  transition: 0.3s ease;
  background: #1b5344;
  border-radius: 5px;
  cursor: pointer;
}
button.submit:hover {
  box-shadow: 0px 5px 13px rgba(16, 16, 16, 0.41);
  transition: 0.3s ease;
}
.header {
  display: flex;
  width: 100%;
  color: #04192d;
  justify-content: space-between;
  padding-bottom: 50px;
}
.header .title {
  width: 50%;
  text-align: right;
  padding-top: 20px;
}
.header .guide {
  font-size: 14px;
  line-height: 22px;
  text-align: right;
}

@media screen and (max-width: 768px) {
  .settings {
    padding: 15px 20px 60px 20px;
  }

  .privacy {
    flex-direction: column;
  }

  .security,
  .sms {
    width: 100%;
    margin-bottom: 10px;
  }
  .password {
    height: fit-content;
  }
  .body {
    flex-direction: column;
    height: fit-content;
  }
  .body div {
    width: 100%;
  }

  input[type="password"],
  button.submit {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>