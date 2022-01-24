<template>
  <!-- bottom -->
  <div class="cta">
    <div class="container">
      <div class="text-wrap">
        <h1 v-if="obj.path === '/contact'" class="wow fadeInUp">
          {{ $t(obj.title) }}
        </h1>
        <h1 v-else class="wow fadeInUp">{{ $t(obj.title) }}</h1>
        <p v-if="obj.path === '/contact'" class="wow fadeInUp">
          {{ $t(obj.label) }}
        </p>
        <p v-else class="wow fadeInUp">
          {{ $t(obj.label) }}
        </p>
      </div>
      <slot v-if="$slots.btn" name="btn"> </slot>
      <div v-else class="btns-list wow fadeInUp">
        <a
          href="https://weaver.ibax.io/"
          target="_blank"
          class="btn btn-primary"
          >{{ $t('footer.now') }}</a
        >
        <nuxt-link
          v-if="obj.path === '/contact'"
          :to="obj.path"
          class="btn btn-default"
          >{{ $t(obj.text) }}</nuxt-link
        >
        <a v-else :href="obj.path" target="_blank" class="btn btn-default">{{
          $t(obj.text)
        }}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    obj: {
      type: Object,
      default: () => {
        return {
          title: 'footer.create',
          label: 'footer.fast',
          text: 'footer.check',
          path: 'https://github.com/IBAX-io/documentation'
        };
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
