<template>
  <div class="contact">
    <div class="main">
      <h1>تماس با ما</h1>
      <div class="content">
        <div class="form">
          <label for="name">نام و نام خانوادگی</label>
          <input type="text" name="name" id="name" />
          <label for="email">ایمیل</label>
          <input type="text" name="email" id="email" />
          <label for="context">متن پیام</label>
          <textarea name="context" id="context"></textarea>
          <button>ارسال</button>
        </div>
        <div class="information">
          <div class="header">اطلاعات تماس</div>
          <div class="body">
            <ul>
              <li class="address">
                <a>آدرس : {{ info.address }}</a>
              </li>
              <li class="phone">
                <a>تلفن : {{ info.number }}</a>
              </li>
              <li class="email">
                <a>ایمیل : {{ info.email }}</a>
              </li>
            </ul>
          </div>
          <div class="footer">
            <div class="social">
              <a> شبکه های اجتماعی:</a>
              <div class="social">
                <a
                  :href="
                    info.twitter.includes('http')
                      ? info.twitter
                      : `https://twitter.com/${info.twitter}`
                  "
                  target="_blank"
                  ><img src="../../assets/icons/Twitter.svg" alt="Twitter"
                /></a>
                <a
                  :href="
                    info.telegram.includes('http')
                      ? info.telegram
                      : `https://telegram.org/${info.telegram}`
                  "
                  target="_blank"
                  ><img src="../../assets/icons/Telegram.svg" alt="Telegram"
                /></a>
                <a
                  :href="
                    info.linkedin.includes('http')
                      ? info.linkedin
                      : `https://linkedin.com/${info.linkedin}`
                  "
                  target="_blank"
                  ><img src="../../assets/icons/LinkedIn.svg" alt="LinkedIn"
                /></a>
                <a
                  :href="
                    info.instagram.includes('http')
                      ? info.instagram
                      : `https://instagram.com/${info.instagram}`
                  "
                  target="_blank"
                  ><img src="../../assets/icons/Instagram.svg" alt="Instagram"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: {
        address: "",
        appAndroid: "",
        appIOS: "",
        email: "",
        instagram: "",
        linkedin: "",
        number: "",
        telegram: "",
        twitter: "",
      },
    };
  },
};
</script>
<style scoped>
.contact {
  min-height: 80vh;
  height: fit-content;
  padding: 60px 0 0 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fdfdfd;
  background: #efe2f8;
  padding: 80px 60px;
  font-size: 0.8em;
}
.main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-radius: 5px;
  background-image: url("../../assets/home/banner.png"),
    linear-gradient(
      180deg,
      rgba(6, 31, 97, 0.6) 0%,
      rgba(22, 47, 54, 0.6) 99.45%
    );
  background-blend-mode: saturation;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  padding: 10px;
}
.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: right;
  padding: 0 0 30px 0;
  color: #fdfdfd;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  background: rgba(4, 25, 45, 0.43);
  border-radius: 6px;
}
.form input {
  border: 1px solid #efe2f8;
  border-radius: 3px;
  width: 70%;
  color: #efe2f8;
  height: 40px;
}
.form label {
  width: 70%;
  text-align: right;
  margin-top: 10px;
  font-size: 16px;
}
.form textarea {
  border: 1px solid #efe2f8;
  border-radius: 3px;
  width: 70%;
  color: #efe2f8;
  height: 100px;
  resize: none;
}
.form button {
  background: #04192d;
  box-shadow: 0px 4px 4px rgba(44, 43, 43, 0.71);
  border-radius: 3px;
  width: 70%;
  height: 40px;
  margin: 10px 0;
  color: #efe2f8;
  cursor: pointer;
}
.information {
  width: 30%;
  display: flex;
  flex-direction: column;
}
.information .header {
  background: #04192d;
  padding: 5px 10px;
  border-radius: 6px 6px 0px 0px;
}
.information .body {
  padding: 5px 10px;
  background: #384459;
}
.information .footer {
  border-top: 1px solid #dfdfdf;
  padding: 20px 10px;
  background: #384459;
  border-radius: 0px 0px 6px 6px;
}
ul {
  margin-top: 20px;
}

li {
  list-style: none;
  line-height: 1.79;
  margin-bottom: 15px;
}

li a {
  color: #fdfdfd;
  font-size: 14px !important;
  font-weight: 500;
  opacity: 0.8;
  cursor: pointer !important;
}

li a:hover {
  color: var(--main-color);
}

.footer-list:last-of-type li a:hover {
  color: var(--main-color);
  cursor: text !important;
}

.footer-social {
  width: 100%;
  max-width: 1180px;
  opacity: 0.8;
  font-family: IRANSans, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: var(--font-dark);
  /*color: var(--font-light);*/
  justify-content: center;
}

.social {
  display: flex;
}
.social .social {
  width: 50%;
  justify-content: space-between;
}
.social a {
  color: var(--font-dark);
  /*color: var(--font-light);*/
  cursor: default;
  vertical-align: super;
}

.social img {
  cursor: pointer;
  transition: 0.5s;
  /*filter:invert(100%)*/
}

.social img:hover {
  filter: invert(10%) sepia(16%) saturate(5963%) hue-rotate(353deg)
    brightness(100%) contrast(104%);
  transform: rotate(360deg);
}
li.address {
  background-image: url("../../assets/home/address.svg");
  background-position-x: right;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 15px;
  padding-right: 25px;
  width: 100%;
}
li.phone {
  background-image: url("../../assets/home/phone.svg");
  background-position-x: right;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 15px;
  padding-right: 25px;
}
li.email {
  background-image: url("../../assets/home/email.svg");
  background-position-x: right;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 15px;
  padding-right: 25px;
}
@media screen and (max-width: 768px) {
  .contact {
    padding: 15px 10px;
  }
  .content {
    flex-direction: column;
  }
  .form,
  .information {
    width: 100%;
    margin-bottom: 30px;
  }
}
</style>