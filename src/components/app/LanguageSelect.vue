<template>
  <li>
    <ul>
      <li>
        <a href="#" class="dropdown-trigger black-text custom-dropdown" data-target="customDropdown"
           ref="customDropdown"><img
            :src="flags" alt="" class="flag"></a>
        <ul id="customDropdown" class="dropdown-content language-dropdown">
          <li @click="changeLanguage($refs.russianLanguage.getAttribute('data-language'))" data-language="Russian"
              ref="russianLanguage" class="flag-wrapper">
            Russian
            <img src="../../assets/images/rusFlag.jpg" alt="" class="flag">
          </li>
          <li @click="changeLanguage($refs.englishLanguage.getAttribute('data-language'))" data-language="English"
              ref="englishLanguage" class="flag-wrapper">
            English
            <img src="../../assets/images/UK-flag.png" alt="" class="flag">
          </li>
        </ul>
      </li>
    </ul>
  </li>
</template>

<script>

export default {
  name: "LanguageSelect",
  methods: {
    changeLanguage(data) {
      if (data === 'Russian') {
        this.$store.state.locale = 'ru'
      } else {
        this.$store.state.locale = 'en'
      }
    },
  },
  mounted() {
    this.customDropdown = M.Dropdown.init(this.$refs.customDropdown, {
      constrainWidth: true
    })
  },
  computed: {
    flags() {
      if (this.$store.state.locale === 'ru') {
        return '/img/rusFlag.1e65a6e8.jpg'
      } else {
        return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAACWCAMAAADABGUuAAAABGdBTUEAALGPC/' +
            'xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA' +
            'kFBMVEXYV2z43+P////N0+I5UooBIWnIEC4yTIbGzd3ut8DOK0bPMErKGDXjh5b99/j' +
            '+/v6irsgWM3USMHORn778/P332t/XUWfu8PVwgqoEJGsCImpfc6Dp7PL99fbJFjP88vTg' +
            'eYrJFDHNJkLJ0N81Tojr7vNmeaQDI2rKFzXVSWD11Nngd4j88fPrp7L//v7rqbQSlswpAAAAAWJ' +
            'LR0QCZgt8ZAAAAAd0SU1FB+YEFgc4KKte/jgAAAQpSURBVHja7d1pV9NQFIXhTVUUEZzngaEMzv7/f' +
            '+eyLUZpaO+5Z+9d0JNPrlVM8+S+pBmaAGxNrp5u3b7DmIYZbq+chp+jvO3dexez27m/9F67O9h+sLd/tf3ho' +
            '8c3lf7k6bPFzJ6/WHqnX2jMVsCKgX/56vVNpL95+24xq/d7H5beaJY6hn/qqvfT17Q+ewVDALrq3fS1rf9J11bvpTe0' +
            '/jddWb2V3tL6ZbqueiO9rfUluqx6G31o/eDwaEXrI3RR9S56c+ujdEn1Hnqg9Tn9eP3qSVfvoIdan9NXfwCMTNOT60' +
            'g/mUZan9Nb88hUL6dHW7+gB1ZUZ/Vieus+zBh9Eq4+tq3X0mPb9ct0cfVKelfrc/q0b5VNJqdn55unn5+d9rQ+21yj8xclVL2M3tv6bH' +
            'OFTDKt1YvoyQVHeuVtip7OFZzZ+On54QInHjedsbggrkYbnRMp2DM00EmDBHZGcjptISFZoTo6MU3oZq2gM4cGuqD4dO6iQbxqiXR2kHC8' +
            'CYVOHxA40iLQBb+GcGxQ0nTJxheOj5EsXfORC8fOQ46u2tGCY5cxQ9ftXsNxoJCgCw+q4Dg87KZLD6XX0hkrvpMuPoHSQM8vQh9dfdqshZ4Or4' +
            'euP1naRk8OQZzuOEXeSk9VH6eLW4/RMwnG6Y7LYQF6pvouuvgiaIieqT5OV1/6jtHT1bfT9V94iNKT1bfSxa130lPVt9LFrffSM9W30h1facPEOg' +
            'U/3KRT0Yte9KIXvehFL/q/QN/+b6eiF73oRS960Yte9KIXvehFL3rRi170ohe96EUvetGLXvSiF73oRe+l1/X1ohe96EUvetGLXvSbTM/dADIy7e99vJr' +
            'USx+Z6fanz4sXe28Aydz2Mzbt7C4t4zFj1LeWjzaOvnxdvGi67We42Su6gMngx1bqt++LFw03e0VbH7LM/66Tq4e49d/DQtnMUauHrXXOFp5YPWytkz7ceNXD0H' +
            'rm1n1h9ZC3nnxgg656iFsnPKZDVT3ErVMezqKpHuLWOY/kkVQPceusBzEJqoe4dd7jt+jVQ9w68aFr7Oohbp36qD1u9RC3Tn7AIrN6iFtnP1aTWD3ErfMfpkqrHuLWFY/QJ' +
            'VUPx5tQ6PQBgSMtDp29aHBsUFh0bpBwfIzw6MyhgWPngUgnLiQcu4xUOi1NOA4UyHTSIMFxeMimcxYXjpMCfDojUjhOBSno+eGC4wSghJ5ecDhO+4royVyHP2AY/c/X7A8YhgduC' +
            'sclHh09Uz0cF/aU9P7q4bicq6X3buvhuIgvpndWj/jm4Zr/OermhNH2g4cHmS/sGOgd1cPxNS0HPV49xF9TMtKj23qIv5xmpceqh7h1Lz1UPcStu+mB6iFu3U9vrh7i1jdAb60e4tY3' +
            'Qm+rHuLWN0RvqR7i1jdFb6geY63/4LW+Ofra6n8CjbPi3ay1pKkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDQtMjJUMDc6NTY6NDArMDA6MDAdSMOTAAAAJXRFWHRkYXRlOm1vZGlmeQ' +
            'AyMDIyLTA0LTIyVDA3OjU2OjQwKzAwOjAwbBV7LwAAAABJRU5ErkJggg=='
      }
    }
  },
}
</script>

<style scoped lang="scss">
.language-dropdown {
  display: flex;
  z-index: 35;

  > li {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}

.flag {
  width: 25px;
  height: 25px;
}

.flag-wrapper {
  background: #efefef;
}

.flag-wrapper:hover {
  background: #fff;
}

.custom-dropdown {
  display: flex;
  margin-right: 20px;
}
</style>