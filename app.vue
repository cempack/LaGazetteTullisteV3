<script setup lang="ts">
  const layout = "default";

  useHead( {
    titleTemplate: ( titleChunk ) => {
      return titleChunk ? `${ titleChunk } - LaGazetteTulliste` : 'LaGazetteTulliste'
    }
  } )
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>