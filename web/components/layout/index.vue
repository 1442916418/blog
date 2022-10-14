<template>
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <title>
        {{ pathToTitle() }}
      </title>
      <slot name="injectHeader" />
    </head>
    <body>
      <slot name="content" />
    </body>
  </html>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{ ctx: any }>()

const PATH_NAMES = {
  '/': '首页'
}

function pathToTitle() {
  const path = props.ctx.request.path
  return PATH_NAMES[path]
}
</script>
