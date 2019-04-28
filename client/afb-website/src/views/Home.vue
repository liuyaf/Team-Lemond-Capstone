<template>
  <div class="home">
    Home page
    <IntroSection/>
    <FactSection/>
    <TestSection/>
  </div>
</template>

<script>
// @ is an alias to /src
import IntroSection from '@/components/IntroSection.vue'
import FactSection from '@/components/FactSection.vue'
import TestSection from '@/components/TestSection.vue'

export default {
  name: 'home',
  components: {
    IntroSection,
    FactSection,
    TestSection
  }
}
</script>
