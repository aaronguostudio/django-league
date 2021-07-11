<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <div>
            Leagues
          </div>
        </q-toolbar-title>
        <div class="flex items-center">
          <q-btn label="Go to GitHub" outline no-caps @click="handleLink" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    //
  },

  setup () {
    const handleLink = () => {
      window.open('https://github.com/aaronguostudio/django-league')
    }
    return {
      handleLink
    }
  }
})
</script>
