<template>
  <footer class="footer">
    <div class="footer__social-links">
      <div class="email-content">
        <a href="mailto:info@yorso.com">
          <span class="mail">info@yorso.com</span>
          <img src="../../assets/images/envelope.svg" alt="" class="email-img">
          <span class="subscribe">Subscribe for updates</span>
        </a>
      </div>
      <div class="messengers-content">
        <span class="telegram messenger-text">Telegram</span>
        <span class="viber messenger-text">Viber</span>
        <span class="whatsApp messenger-text">WhatsApp</span>
      </div>
      <div class="media-content">
        <a href="#"><img src="../../assets/images/G+.svg" alt="" class="media-content__link"></a>
        <a href="#"><img src="../../assets/images/in.svg" alt="" class="media-content__link"></a>
        <a href="#"><img src="../../assets/images/Twitter.svg" alt="" class="media-content__link"></a>
        <a href="#"><img src="../../assets/images/FB.svg" alt="" class="media-content__link"></a>
        <a href="#"><img src="../../assets/images/VK.svg" alt="" class="media-content__link"></a>
      </div>
    </div>
    <div class="footer__main-content">
      <div class="pages-list-block">
        <ul class="pages-list-wrapper">
          <li class="pages-list-item footer__default-text">
            <router-link to="/news" class="pages-list-item-text">
              {{ 'News' | localize }}
            </router-link>
          </li>
          <li class="pages-list-item footer__default-text">
            <router-link to="/forNewWorkers" class="black-text pages-list-item-text">
              {{ 'For_new_workers' | localize }}
            </router-link>
          </li>
          <li class="pages-list-item footer__default-text">
            <router-link to="/Activities" class="black-text pages-list-item-text">
              {{ 'Activities' | localize }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="company-numbers">
        <div class="russia-block numbers-block">
          <span class="block-heading footer__default-text">Russia</span>
          <span class="block-heading"><a href="tel:+7 (499) 703-32-24"
                                         class="footer__default-text">+7 (499) 703-32-24</a></span>
          <span class="block-heading"><a href="tel:+7 (926) 826-85-39"
                                         class="footer__default-text">+7 (926) 826-85-39</a></span>
        </div>
        <div class="kazakhstan-block numbers-block">
          <span class="footer__default-text">Kazakhstan</span>
          <span><a href="tel:+7 (77) 273 12 34 78" class="footer__default-text">+7 (77) 273 12 34 78</a></span>
        </div>
        <div class="eu-block numbers-block">
          <span class="footer__default-text">European Union</span>
          <span><a href="tel:7 (499) 703-32-24" class="footer__default-text">+7 (499) 703-32-24</a></span>
        </div>
      </div>
      <div class="company-innosoft-details">
        <span class="block-heading footer__default-text">{{ 'Company_details' | localize }}</span>
        <span class="footer__default-text">Innosoft LLC</span>
        <span class="footer__default-text">INN 1615012919</span>
        <span class="footer__default-text">OGRN 1161690132966</span>
      </div>
      <div class="company-yorso-details">
        <span class="footer__default-text">{{ 'Company_details' | localize }}</span>
        <span class="footer__default-text">Yorso Europe OÜ</span>
        <span class="footer__default-text">Registry code 14451226</span>
        <span class="footer__default-text">Universitetskaya str., 7,</span>
        <span class="footer__default-text">Innopolis city, Verkhneuslonskiy rayon,</span>
        <span class="footer__default-text">Tatarstan republic, Russia. 420500</span>
        <span class="footer__default-text">Tallinn, Kesklinna linnaosa,</span>
        <span class="footer__default-text">Kiriku tn 6, 10130</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="footer-copyright">
      <router-link to="/">
        <svg role="img" class="img-responsive" width="149" height="32" viewBox="0 0 107 23" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M33.9146 2.89442H27.76C25.8357 2.89367 23.9898 3.64362 22.6285 4.97933C21.2672 6.31503 20.5018 8.12709 20.5007 10.017V15.8712C20.5016 17.7612 21.267 19.5735 22.6283 20.9093C23.9897 22.2451 25.8356 22.9951 27.76 22.9944H33.9146C34.8676 22.9948 35.8112 22.8109 36.6919 22.4532C37.5724 22.0955 38.3726 21.5708 39.0467 20.9095C39.7209 20.248 40.2558 19.4626 40.6208 18.5981C40.9859 17.7337 41.1741 16.8071 41.1745 15.8712V10.017C41.1734 8.12699 40.408 6.31485 39.0465 4.97913C37.6851 3.64341 35.8391 2.89352 33.9146 2.89442ZM37.9131 15.8712C37.9125 16.9122 37.491 17.9103 36.7412 18.6461C35.9914 19.3819 34.9747 19.7951 33.9146 19.7948H27.76C26.7 19.7951 25.6833 19.3819 24.9335 18.6461C24.1837 17.9103 23.7621 16.9122 23.7615 15.8712V10.017C23.7621 8.97597 24.1837 7.97785 24.9335 7.24208C25.6833 6.50632 26.7 6.09316 27.76 6.09345H33.9146C34.9747 6.09316 35.9914 6.50632 36.7412 7.24208C37.491 7.97785 37.9125 8.97597 37.9131 10.017V15.8712ZM99.7407 2.89442H93.5854C91.6611 2.89367 89.8153 3.64362 88.454 4.97933C87.0926 6.31503 86.3272 8.12709 86.3262 10.017V15.8712C86.3271 17.7612 87.0924 19.5735 88.4538 20.9093C89.815 22.2451 91.661 22.9951 93.5854 22.9944H99.7407C101.665 22.9951 103.511 22.2451 104.872 20.9093C106.234 19.5735 106.999 17.7612 107 15.8712V10.017C106.999 8.12709 106.234 6.31503 104.872 4.97933C103.511 3.64362 101.665 2.89367 99.7407 2.89442ZM103.739 15.8712C103.738 16.9122 103.316 17.9102 102.566 18.6459C101.817 19.3817 100.8 19.7949 99.7401 19.7948H93.5854C92.5256 19.7949 91.509 19.3817 90.7594 18.6459C90.0096 17.9102 89.5881 16.9121 89.5875 15.8712V10.017C89.5881 8.97608 90.0096 7.97803 90.7594 7.24228C91.509 6.50654 92.5256 6.0933 93.5854 6.09345H99.7407C100.801 6.09345 101.817 6.50673 102.567 7.24245C103.316 7.97817 103.738 8.97612 103.739 10.017V15.8712ZM56.0621 2.89442H42.6498V22.9606H46.1462V18.1679H50.9271V18.1719H56.0506C58.2584 18.1719 60.0491 19.6057 60.0491 21.7745V23H63.3098V21.7717C63.3197 20.7572 63.0909 19.7542 62.6413 18.8408C62.1918 17.9275 61.5335 17.1283 60.7179 16.5056C61.5333 15.8389 62.1892 15.004 62.6393 14.0604C63.0893 13.1167 63.3223 12.0874 63.3219 11.0454V10.017C63.3208 8.12699 62.5554 6.31485 61.194 4.97913C59.8325 3.64341 57.9865 2.89352 56.0621 2.89442ZM46.1462 12.9278V6.09458H56.0621C56.587 6.09414 57.1069 6.19524 57.592 6.39211C58.0772 6.58899 58.5181 6.87779 58.8896 7.24202C59.2611 7.60624 59.5559 8.03877 59.7572 8.51489C59.9585 8.99102 60.0624 9.50142 60.0628 10.017V11.0431C60.0622 12.084 59.6407 13.0821 58.891 13.8178C58.1414 14.5536 57.1248 14.9668 56.065 14.9667H46.1491V12.9278H46.1462ZM85.1609 16.4741H85.1523C85.1431 15.7879 84.9956 15.1103 84.7185 14.4803C84.4414 13.8503 84.0401 13.2804 83.5376 12.8034C83.0351 12.3264 82.4416 11.9519 81.791 11.7012C81.1405 11.4506 80.4459 11.3289 79.7472 11.3432H75.9334H72.041H70.1953C69.6249 11.3424 69.078 11.1197 68.6745 10.7237C68.271 10.3277 68.0437 9.7908 68.0426 9.23057V8.20606C68.0439 7.64589 68.2712 7.10906 68.6747 6.7131C69.0782 6.31715 69.625 6.09435 70.1953 6.09345H72.041H83.9309V2.89442H72.041H70.1953C69.4808 2.87995 68.7705 3.00745 68.1073 3.26927C67.4441 3.53108 66.8416 3.92182 66.336 4.41801C65.8303 4.91422 65.432 5.50563 65.165 6.15677C64.8979 6.80791 64.7676 7.50534 64.7818 8.20719V9.41464H64.7904C64.7995 10.1009 64.9469 10.7786 65.224 11.4087C65.5011 12.0387 65.9024 12.6087 66.4049 13.0857C66.9072 13.5628 67.5009 13.9374 68.1515 14.188C68.8021 14.4387 69.4967 14.5604 70.1953 14.5462H74.0093H77.9016H79.7472C80.3168 14.5469 80.863 14.769 81.2663 15.1639C81.6696 15.5587 81.8976 16.0943 81.9001 16.6537V17.6861C81.8987 18.2463 81.6713 18.7833 81.2678 19.1792C80.8641 19.5752 80.3172 19.7979 79.7467 19.7987H77.9011H66.0118V22.9989H77.9011H79.7467C80.4613 23.0133 81.1716 22.8858 81.8348 22.6241C82.4979 22.3623 83.1005 21.9716 83.6061 21.4755C84.1117 20.9793 84.5101 20.388 84.7773 19.737C85.0445 19.0858 85.175 18.3885 85.1609 17.6867V16.6593V16.4763V16.4741Z"
                fill="#31365E"></path>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M20.4737 5.53616L18.1209 3.21753L10.2369 10.9936L2.35287 3.21753L0 5.53616L8.5162 13.936V22.674H11.8406V14.0502L20.4737 5.53616Z"
                fill="#FF7800"></path>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M13.4288 4.37605C13.3027 4.78003 13.095 5.15493 12.8182 5.47837C12.5413 5.8018 12.201 6.06716 11.8174 6.2586C11.4339 6.45004 11.015 6.56364 10.5858 6.59262C10.1566 6.62161 9.72578 6.56538 9.31917 6.4273C8.49543 6.1183 7.82594 5.50739 7.45174 4.72324C7.07753 3.93908 7.02782 3.04291 7.31306 2.22347C7.43916 1.81956 7.64682 1.44473 7.92364 1.12136C8.20046 0.797984 8.54076 0.532689 8.92426 0.3413C9.30775 0.149911 9.72658 0.0363501 10.1557 0.00739621C10.5849 -0.0215576 11.0156 0.0346881 11.4221 0.172776C12.2459 0.481664 12.9154 1.09244 13.2897 1.87647C13.664 2.66052 13.7139 3.5566 13.4288 4.37605Z"
                fill="#31365E"></path>
        </svg>
      </router-link>
      <span class="copyright-text">© 2013-2022 Yorso - marketplace for fish and seafood market</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "CustomFooter"
}
</script>

<style scoped>
.pages-list-item-text {
  transition: all ease .3s !important;
}

.pages-list-item-text:hover {
  color: #FF7800 !important;
}

li {
  list-style: none;
  text-decoration: none;
}

.footer {
  margin-top: 40px;
}

.footer__default-text {
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  color: #232323;
  transition: all ease .3s;
}

.footer__main-content {
  display: flex;
  flex-direction: row;
  background: #F7F7F7;
  padding: 25px 115px;
  justify-content: space-between;
}

.footer__social-links {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 945px;
  margin: 0 auto;
  justify-content: space-between;
  margin-bottom: 20px;
}

.mail {
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  color: #FF7800;
}

.subscribe {
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  text-decoration-line: underline;
  color: #3D4373;
}

.email-img {
  margin: 0 15px;
}

.messenger-text {
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  color: #232323;
  padding: 10px 20px;
}

.viber {
  border-right: 1px solid black;
  border-left: 1px solid black;
}

.media-content__link {
  margin-right: 15px;
}

.company-numbers {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  padding-left: 50px;
  border-left: 2px solid black;
  min-height: 210px;
  justify-content: space-between;
}

.numbers-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 50px;
}

.pages-list-wrapper {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-width: 365px;
  max-height: 165px;
}

.pages-list-block {
  display: flex;
  justify-content: center;
  align-items: center;
}

.russia-block {
  min-height: 80px;
}

a {
  text-decoration: none;
  color: #232323;
}

a:hover {
  color: #FF7800;
}

.company-innosoft-details {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  justify-content: space-between;
}

.company-yorso-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer-copyright {
  background: #f7f7f7;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 35px 115px;
  justify-content: space-evenly;
}

.line {
  width: 100%;
  height: 2px;
  background: #FFFFFF;
  align-self: center;
}

@media (max-width: 1600px) {
  .pages-list-wrapper {
    min-width: 165px;
  }

  .company-yorso-details {
    display: none;
  }

  .email-content {
    display: none;
  }

  .footer__main-content {
    padding: 25px 30px;
  }

  .footer-copyright {
    padding: 35px 30px;
  }

  .footer__social-links {
    max-width: none;
    padding: 0 30px;
    width: 100vw;
    box-sizing: border-box;
  }
}

@media (max-width: 768px) {
  .footer-copyright {
    justify-content: space-between;
  }

  .copyright-text {
    font-size: 14px;
  }
}

@media (max-width: 570px) {
  .copyright-text {
    font-size: 12px;
  }

  .img-responsive {
    width: 100px;
  }

  .footer__default-text {
    font-size: 12px;
  }

  .company-numbers {
    padding-left: 20px;
  }

  .pages-list-wrapper {
    min-width: 0;
    width: 100px;
  }

  .footer-copyright {
    flex-direction: column;
  }

  .footer__social-links {
    padding: 0 10px;
  }

  .footer__main-content {
    padding: 25px 10px;
  }

  .messenger-text {
    font-size: 12px;
    padding: 5px;
  }
}
</style>