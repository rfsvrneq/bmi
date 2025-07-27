<script setup>

const toggleClamp = (event) => {
  const storyDiv = event.currentTarget;
  if (storyDiv.classList.contains('line-clamp-3')) {
    storyDiv.classList.remove('line-clamp-3');
    storyDiv.classList.add('line-clamp-none');
  } else {
    storyDiv.classList.remove('line-clamp-none');
    storyDiv.classList.add('line-clamp-3');
  }
};


</script>

<template lang="pug">
div#story(class="imp_event" data-title="lungcancercare" data-label="imp_section-lungcancercare-article")

  //- 4.抗癌真心話
  .container.max-w-3xl

    .tabs-style
      .line-clamp-3.toggleClamp(@click="toggleClamp")
        .text-justify
          p 39 歲的阿彥（化名）在七年前夏天，突然有頭暈眼花的現象，原本以為是中暑，怎麼也沒料到竟然會是
            span.text-orange-500 肺癌第四期已轉移到腦部
            | 的緣故。知道自己初確診就是末期、還已經轉移到腦部，心情真的盪到谷底，無所適從，直到醫師提出治療建議要先進行腦手術前，都還是不敢相信自己就是個病患，因為在這之前真的沒有任何症狀！
          p.my-4 腦部手術做完後、醫師擔心腫瘤可能有殘存，建議要做電療；後來發現肺部腫瘤還有幾顆，建議要拿掉，所以又動了第二次手術，記得當時是先
            span.text-orange-500 進行了基因檢測，配對到能吃第二代標靶藥物，一吃就是六年，
            | 原以為就可以穩定下去，沒想到去年
            span.text-orange-500 出現抗藥性
            | 。
          p 剛聽到出現抗藥性，心情很沉重。醫師建議先以化學治療，但化療副作用真的很難熬，在做完六個療程後我就放棄了，後來醫師說我的情況可以改成使用第三代標靶藥物，只是當時並沒有健保給付，只能自費使用。老實說，當時孩子還小，我很怕一直吃下去會把家裡的錢都花光、拖垮老婆小孩。所以我給自己訂下目標，起碼要讓自己多活五年。不過欣慰的是，
            span.text-orange-500 治療到現在已經超過第七年了，病情已經穩定很多。
            | 現在每天覺得多一天就是賺到。
          p.mt-4 我想跟和我有同樣病況的病友們說，罹癌並不可怕，現在醫藥科技進步，已經有很多武器可以使用，只要跟醫師好好溝通、聽醫師的話好好治療，醫療團隊都能給很好的建議及解決方式，真的不用太擔心。

    
</template>

<style scoped lang="sass">
  .capsule-ttl
    @apply text-3xl text-white bg-blue-400 inline-block px-10 py-8 rounded-full text-center
    @media screen and (max-width: 480px)
      @apply text-3xl

  .capsule-ttl-big
    @apply text-4xl text-white bg-sky-300 inline-block px-10 py-10 rounded-full text-center
    @media screen and (max-width: 480px)
      @apply text-3xl px-5 py-10

  .tabs-style
    @apply border-4 border-gray-600 text-gray-600 text-lg text-center bg-white
    position: relative
    border-radius: 35px
    padding: 3rem 3rem 3rem 2rem
    @media screen and (max-width: 768px)
      padding: 1.5rem
      border-radius: 25px
    .pic
      position: absolute
      width: 120px
      right: -3px
      top: -2px
      @media screen and (max-width: 768px)
        width: 80px
        right: -3px
        top: -2px
    .toggleClamp
      cursor: pointer
      position: relative
      user-select: none
      padding-left: 2rem
    .line-clamp-3
      position: relative
      padding-right: 4rem
      padding-bottom: .4rem
      &::before
        content: '▶'
        position: absolute
        left: 0
        color: #FF6D04
    .line-clamp-none
      position: relative
      &::before
        content: '▼'
        position: absolute
        left: 0
        color: #FF6D04

</style>
