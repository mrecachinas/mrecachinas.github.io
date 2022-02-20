<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8 text-center align-items-center">
      <img class="me border-circle w-11rem" src="@/static/mike.jpeg" alt="Mike Recachinas face" />
      <br>
      <h1 class="text-3xl">Michael Recachinas</h1>
      <br>
      <div>
        💻 Senior Software Engineer <a target="_blank" href="https://spectric.com">@spectriclabs</a>
      </div>
      <div>
        👨‍👩‍👧 Husband and Father
      </div>
      <div>
        🐶 Dog Dad
      </div>
      <SocialIcons />
    </div>
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.me {
  margin: 0 auto;
}
</style>
