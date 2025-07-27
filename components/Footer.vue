<script setup></script>

<template>
  <footer>
    <div class="flex space-x-2 justify-center mb-8 items-center">
      <a
        href="https://www.commonhealth.com.tw/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/img/logo.svg" alt="康健雜誌" class="w-20" />
      </a>
      <img src="/assets/img/x.svg" alt="x" class="w-6 xs:w-8" />
      <a
        href="https://www.boehringer-ingelheim.com/tw"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/img/logo2.svg" alt="康健雜誌" class="w-36" />
      </a>
    </div>

    <ul>
      <li>
        <a href="https://www.commonhealth.com.tw/" target="_blank">康健官網</a>
      </li>
      <li>
        <a href="https://www.commonhealth.com.tw/" target="_blank">康健雜誌</a>
      </li>
      <li>
        <a
          href="https://www.commonhealth.com.tw/book/index.action"
          target="_blank"
          >康健出版</a
        >
      </li>
      <li>
        <a href="https://www.youtube.com/user/CommonHealthTV" target="_blank"
          >康健影音</a
        >
      </li>
      <li>
        <a href="https://kb.commonhealth.com.tw/" target="_blank">康健知識庫</a>
      </li>
      <li>
        <a href="https://club.commonhealth.com.tw/" target="_blank">大人社團</a>
      </li>
      <li>
        <a href="https://cancer.commonhealth.com.tw/" target="_blank"
          >癌症問康健</a
        >
      </li>
    </ul>
    <p>
      Copyright © 2025 康健雜誌（天下生活出版股份有限公司）All rights reserved.
    </p>
    <ul>
      <li>
        <a href="https://member.cwg.tw/privacy-policy" target="_blank"
          >隱私權政策</a
        >
      </li>
      <li>
        <a href="https://member.cwg.tw/register-rule" target="_blank"
          >會員服務條款</a
        >
      </li>
    </ul>
  </footer>
</template>

<style>
footer {
  width: 100%;
  padding: 30px;
  color: #ffffff;
  background: #3f514e;
}

footer a {
  transition: 0.3s;
  text-decoration: none;
}

footer ul {
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

footer ul li {
  font-size: 15px;
  line-height: 15px;
  border-right: 1px solid #ffffff;
  padding: 0 10px 0 0;
  margin: 0 10px 10px 0;
}

footer ul li:last-child {
  border: none;
  padding: 0;
  margin: 0;
}

footer ul li a {
  color: #ffffff;
  line-height: 15px;
}

footer ul:last-child {
  margin: 0;
}

footer p {
  color: #ffffff;
  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  footer ul {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  footer ul li {
    padding: 0 5px 0 0;
    margin: 0 5px 10px 0;
  }
}
</style>
