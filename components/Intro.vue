<script setup></script>

<template lang="pug">
div#intro(class="imp_event" data-title="lunghealth" data-label="imp_section-lunghealth-intro")
  .container
    h3.content-ttl.text-green-700(data-aos="fade-up" data-aos-duration="800")
      span.block(class="xs:inline") 空氣品質雖有逐年改善 
      span.text-orange-200 慢性肺部疾病
      | 仍是健康威脅
    .content-p.text-gray-900(data-aos="fade-up" data-aos-duration="800" data-aos-delay="400")
      p.my-5
        | 台灣地理位置特殊，受到季風和氣壓的影響，加上鄰近中國大陸，東北季風會將中國產生的污染物吹向台灣，使得每年10月至隔天5月空氣品質較差，僅有夏季空氣品質較佳，換句話說，國人每年有超過一半的時間都活在空氣污染中。但境外污染實際上只佔了國內空污的40％，有60％還是交通運輸、火力發電、鋼鐵與石化產業所排放的廢氣。地理位置、氣候、境外污染和國內製造的空污，使得台灣在2023年全球空氣品質排名
        small （IQAir World Air Quality Ranking）
        | ，在138個國家中排名第45名，而且PM2.5的濃度有逐年增加的趨勢。

      p 除了空氣污染，抽菸、油煙等致病因子也在侵蝕肺部健康，肺部疾病長年名列國人死因排行榜，根據衛福部統計，
        span.underline-ani 每年有5,000人死於慢性肺阻塞（COPD）、2023年死於氣管、支氣管和肺癌的人數則超過1萬人。
      p.mt-5 台灣胸腔暨重症加護醫學會統計，全球肺阻塞漏診率高達70%，估計全國人口有肺阻塞的人約80到100萬人，若以國內50％漏診率換算，可能有50萬人深陷肺病的致命危機。另外，慢性肺病影響的不只是肺功能。常言道「心肺不分家」，慢性肺病連帶影響心血管健康，增加心臟衰竭、心肌梗塞、中風等疾病的風險，提升照護負擔和死亡風險。

  .w-full.bg-green-900
    .container.flex.justify-between(class="flex-col lg:flex-row p-0")
      .flex.flex-col.justify-center(class="px-8 py-10 lg:px-0 lg:py-0")
        h3.content-ttl.text-green-200.mb-5(class="lg:text-[30px]" data-aos="fade-right" data-aos-duration="800" data-aos-delay="600") 2025《康健》與百靈佳殷格翰合作倡議
        p.content-p(data-aos="fade-right" data-aos-duration="800" data-aos-delay="600")
          span.inline(class="sm:block text-center lg:text-left") 邀請22縣市首長共同許下守護市民健康的承諾，
          span.inline(class="sm:block text-center lg:text-left") 一起為生活在台灣這塊土地上的人做一件事情，
          span.inline(class="sm:block text-center lg:text-left") 降低空污危害，守護肺健康，讓肺癌不再是國病。
          span.inline(class="sm:block text-center lg:text-left") 這不僅是項倡議，更是對台灣這片土地許下的承諾，
          span.inline(class="sm:block text-center lg:text-left") 為迎接在台灣的下一個50年奠定基礎。
      img(src="/assets/img/intro-img.jpg", alt="2025《康健》與百靈佳殷格翰合作倡議", class="w-full lg:w-5/12" data-aos="fade-left" data-aos-duration="800" data-aos-delay="600")

</template>

<style scoped lang="sass">
#intro
  background: url(/assets/img/intro-bg.jpg) no-repeat center bottom
  background-size: cover

.underline-ani
  text-decoration: underline
  text-decoration-color: #E27659  // 底線顏色
  text-decoration-thickness: 2px  // 底線粗細，可調
  animation: blink-underline 1.5s ease infinite

@keyframes blink-underline
  0%, 49%
    text-decoration-color: #E27659
  50%, 100%
    text-decoration-color: transparent // 底線隱藏
</style>
