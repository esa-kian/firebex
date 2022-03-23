<template>
  <div class="profile">
    <div class="personal">
      <div class="header">
        <div class="steps">
          <div class="auth">احراز هویت</div>
          <div class="step1">
            <div class="circle">۱</div>
            <div class="title">اطلاعات شخصی</div>
          </div>
          <div class="step2">
            <div class="circle">۲</div>
            <div class="title">اطلاعات تماس</div>
          </div>
          <div class="step3">
            <div class="circle">۳</div>
            <div class="title">اطلاعات بانکی</div>
          </div>
          <div class="step4">
            <div class="circle">۴</div>
            <div class="title">آپلود مدارک</div>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="info">
          <h4>اطلاعات شخصی</h4>
          <div class="inputs">
            <div class="name">
              <label for="name">نام و نام خانوادگی:</label>
              <input type="text" name="name" id="name" />
            </div>
            <div class="national">
              <label for="national">کد ملی:</label>
              <input type="text" name="national" id="national" />
            </div>
            <div class="birth">
              <label for="birth">تاریخ تولد:</label>
              <input type="text" name="birth" id="birth" />
            </div>
            <button class="submit">ثبت</button>
          </div>
        </div>
        <div class="contact">
          <h4>اطلاعات تماس</h4>
          <div class="inputs">
            <div class="mobile">
              <label for="mobile">شماره تلفن همراه:</label>
              <input type="text" name="mobile" id="mobile" />
            </div>
            <div class="email">
              <label for="email">ایمیل:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div class="telephone">
              <label for="telephone">تلفن ثابت:</label>
              <input type="text" name="telephone" id="telephone" />
            </div>
            <button class="submit">ثبت</button>
          </div>
        </div>
        <div class="bank">
          <h4>اطلاعات بانکی</h4>
          <div class="inputs">
            <div class="card">
              <label for="card">شماره کارت:</label>
              <input v-model="card" type="text" name="card" id="card" />
            </div>
            <div class="iban">
              <label for="iban">شماره شبا:</label>
              <input v-model="iban" type="text" name="iban" id="iban" />
            </div>
            <div class="number">
              <label for="number">شماره حساب:</label>
              <input v-model="number" type="text" name="number" id="number" />
            </div>
            <button @click="submitBank" class="submit">ثبت کارت</button>
          </div>

          <div class="banks" v-if="banks.length">
            <table>
              <tr v-for="bank in banks" :key="bank.id">
                <td>
                  <img src="../../assets/icons/parsian.png" alt="" />
                </td>
                <td>
                  {{ bank.bank }}
                </td>
                <td>
                  {{ bank.card }}
                </td>
                <td>
                  {{ bank.iban }}
                </td>
                <td>
                  {{ bank.number }}
                </td>
                <td>
                  <button class="delete" @click="deleteBank(bank)"></button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="docs">
          <h4>آپلود مدارک</h4>
          <div class="files">
            <div class="selfi">
              <div class="input">
                <label for="selfi"></label>
                <input hidden type="file" name="selfi" id="selfi" />
              </div>
              <div class="footer">تصویر سلفی</div>
            </div>
            <div class="nat-card">
              <div class="input">
                <label for="nat-card"></label>
                <input hidden type="file" name="nat-card" id="nat-card" />
              </div>
              <div class="footer">تصویر کارت ملی</div>
            </div>
            <div class="bank-pic">
              <div class="input">
                <label for="bank-pic"></label>
                <input hidden type="file" name="bank-pic" id="bank-pic" />
              </div>
              <div class="footer">تصویر کارت بانکی</div>
            </div>
          </div>
        </div>
      </div>
      <div class="send">
        <button class="submit">ثبت و ارسال اطلاعات</button>
      </div>
    </div>
    <div class="desc">
      <div class="header">توضیحات</div>
      <div class="body">
        مجموعه بندهای قوانین و مقررات نگارش شده در این بخش به منظور ارتباط تجاری
        هر چه بهتر شرکت تجارت بین الملل رابین (دیکوینکس) با شخصیت های حقوقی و
        حقیقی می‏‌باشد. با خواندن دقیق هر بخش، از قوانین و مقررات خرید و فروش
        رمزارز در دیکوینکس اطلاع و آنرا تایید می فرمایید. کاربران ماده 10 قانون
        آیین مدنی (( قراردادهای خصوصی نسبت به کسانی که ان را منعقد نموده اند در
        صورتی که مخالف صریح قانون نباشد نافذ است )) را می پذیرند. ماده ۱ –
        تعاریف و اصطلاحات اصطلاحاتی که در این قوانین و مقررات به کار رفته است
        دارای معانی مشروح زیر است: ۱-۱- شرکت: شرکت تجارت بین الملل رابین که نسبت
        به ارائه خدمات دیکوینکس اقدام می‌کند. ۱-۲- دیکوینکس: خدماتی نرم‌ افزاری
        که توسط شرکت به منظور خرید و فروش رمزارزها مطابق با تصویب نامه شماره
        58144/ت55637 هـ مورخ 13/05/1398 هیت وزیران
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banks: [],
      card: "",
      iban: "",
      number: "",
    };
  },
  methods: {
    submitBank() {
      if (this.card.length && this.iban.length) {
        let bank = {
          id: this.banks.length,
          card: this.card,
          iban: this.iban,
          number: this.number,
          bank: "پارسیان",
        };
        this.card = "";
        this.iban = "";
        this.number = "";
        this.banks.push(bank);
      }
    },
    deleteBank(bank) {
      this.banks.forEach((element) => {
        if (element.id == bank.id) {
          this.banks.splice(this.banks.indexOf(element), 1);
        }
      });
    },
  },
};
</script>
<style scoped>
.profile {
  background-color: #efe2f8;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow-y: scroll;
  display: flex;
  align-items: flex-start;
  padding: 80px 160px 10px 20px;
}
.personal {
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.personal .header {
  background: #25505d;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.auth {
  color: #efe2f8;
}
.personal .header .steps {
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: rgba(148, 151, 152, 0.34);
  border-radius: 8px;
  height: 55px;
  align-items: center;
  padding: 10px;
}
.steps .title {
  height: 35px;
  display: flex;
  align-items: center;
  width: 70%;
}
.desc {
  width: 15%;
}

.desc .header {
  background: #25505d;
  border-radius: 8px;
  display: flex;
  width: 90%;
  justify-content: center;
  height: 75px;
  align-items: center;
  margin: auto;
  color: #efe2f8;
}
.desc .body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
  background-color: #efefef;
  border-radius: 8px;
  width: 90%;
  margin: auto;
  font-size: 12px;
  margin-top: 20px;
}
.circle {
  width: 33px;
  height: 33px;
  border-radius: 50%;
  color: #6c6c6c;
  background-color: #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step1 {
  display: flex;
  justify-content: space-between;
  width: 20%;
}

.step2 {
  display: flex;
  justify-content: space-between;
  width: 20%;
}

.step3 {
  display: flex;
  justify-content: space-between;
  width: 20%;
  color: #272525;
}

.step4 {
  display: flex;
  justify-content: space-between;
  width: 20%;
  color: #272525;
}
.step1 {
  color: #ffffff;
}

.step2 {
  color: #ffffff;
}

.step1 .circle {
  background-color: #fe9400;
  color: #ffffff;
}

.step2 .circle {
  background-color: #fe9400;
  color: #ffffff;
}
.body {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
}
.info,
.contact,
.bank,
.docs {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 10px;
  background-color: #efefef;
  border-radius: 8px;
  width: 100%;
  margin-top: 20px;
}
.inputs {
  display: flex;
  align-items: flex-end;
  width: 100%;
  justify-content: space-between;
}
.inputs div {
  width: 24.5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
input[type="text"],
input[type="email"] {
  border: 1px solid #04192d;
  height: 45px;
  width: 200px;
  transition: 0.3s ease;
  border-radius: 5px;
  padding: 0 10px;
}
input[type="text"]:focus,
input[type="email"]:focus {
  box-shadow: 0px 5px 13px rgba(16, 16, 16, 0.41);
  transition: 0.3s ease;
}

button.submit {
  height: 45px;
  text-align: center;
  color: #ebebeb;
  width: 200px;
  transition: 0.3s ease;
  background: #1b5344;
  border-radius: 5px;
  cursor: pointer;
}
button.submit:hover {
  box-shadow: 0px 5px 13px rgba(16, 16, 16, 0.41);
  transition: 0.3s ease;
}
h4 {
  margin: 0 0 10px 0;
}
.files {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.selfi,
.nat-card,
.bank-pic {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.selfi .input,
.nat-card .input,
.bank-pic .input {
  background: rgba(19, 52, 83, 0.64);
  border-radius: 5px;
  width: 257px;
  height: 163px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
}
.selfi label,
.nat-card label,
.bank-pic label {
  border: 2px dashed #dddddd;
  width: 190px;
  height: 116px;
  cursor: pointer;
}
.selfi .input:hover,
.nat-card .input:hover,
.bank-pic .input:hover {
  transition: 0.3s ease;
  opacity: 0.6;
}
.send {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.send button {
  width: 50%;
}
.banks {
  width: 100%;
  background-color: rgba(53, 94, 118, 1);
  color: rgba(255, 254, 254, 1);
  margin-top: 16px;
  border-radius: 5px;
  padding: 10px;
}

.banks table {
  width: 100%;
}
.banks table img {
  border-radius: 50%;
  width: 33px;
  height: 33px;
}
button.delete {
  width: 28px;
  height: 28px;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgba(4, 25, 45, 0.58);
  background-image: url("../../assets/icons/trash.svg");
  background-position: center;
  background-size: 20px;
  background-repeat: no-repeat;
}
@media screen and (max-width: 768px) {
  .profile {
    padding: 15px 20px 60px 20px;
    flex-direction: column;
  }
  .personal,
  .desc {
    width: 100%;
  }
  .personal .header .steps {
    height: auto;
    flex-direction: column;
  }
  .step1,
  .step2,
  .step3,
  .step4 {
    width: 100%;
    height: 40px;
  }
  .inputs {
    flex-direction: column;
  }
  .inputs div {
    width: 100%;
  }

  input[type="text"],
  input[type="email"] {
    width: 100%;
  }
  button.submit {
    width: 100%;
    margin-top: 20px;
  }

  .files {
    flex-direction: column;
  }
  .send {
    padding: 20px 0;
  }
  .desc .header {
    width: 100%;
  }
  .desc .body {
    width: 100%;
  }
}
</style>