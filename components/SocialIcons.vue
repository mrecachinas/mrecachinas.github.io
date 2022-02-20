<template>
  <div>
    <div class="flex justify-center pt-4 space-x-2">
      <a v-for="link in links" :key="link.url" :href="link.url" target="_blank"
        ><font-awesome-icon :icon="link.icon"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialIcons',
  data() {
    return {
      links: [
        { url: 'https://github.com/mrecachinas', icon: ['fab', 'github'] },
        {
          url: 'https://instagram.com/mikerecachinas',
          icon: ['fab', 'instagram'],
        },
        { url: 'mailto:m.recachinas@gmail.com', icon: ['fa', 'envelope'] },
        { url: 'https://github.com/mrecachinas', icon: ['fab', 'linkedin'] },
        { url: 'https://twitter.com/mikerecachinas', icon: ['fab', 'twitter'] },
      ],
    }
  },
}
</script>

<style scoped></style>
