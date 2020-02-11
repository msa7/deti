<template lang="pug">
  .container
    section.section
      router-link.button.is-primary(to="/sale/new") Продать
      router-link.button.is-primary(to="/purchase/new") Купить
      .tabs
        ul
          li.is-active
            a
              span.icon.is-small
                i.fas.fa-store-alt
              span Продажи
              <!-- span.tag.rounded.is-primary 2 -->
          li
            a
              span.icon.is-small
                i.fas.fa-shopping-cart
              span Спрос
              <!-- span.tag.rounded.is-warning 34 -->

      .tab-sell


</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>
