<template>
  <v-app>
    <!-- ツールバー -->
    <v-app-bar app color="yellow lighten-1 grey--text text--darken-4">
      <!-- タイトル -->
      <v-toolbar-title>
        <img class="_logo" src="./assets/img/logo.svg" :alt="appName">
      </v-toolbar-title>
      <div class="nav-icons">
        <!-- テーブルアイコンのボタン -->
        <v-btn icon to="/" color="grey darken-4">
          <v-icon>mdi-file-table-outline</v-icon>
        </v-btn>
        <!-- 歯車アイコンのボタン -->
        <v-btn icon to="/settings" color="grey darken-4">
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <!-- メインコンテンツ -->
    <v-main>
      <v-container fluid>
        <!-- router-view の中身がパスによって切り替わる -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <!-- スナックバー -->
    <v-snackbar v-model="snackbar" color="error">{{ errorMessage }}</v-snackbar>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',

  data () {
    return {
      snackbar: false
    }
  },

  computed: mapState({
    appName: state => state.settings.appName,
    errorMessage: state => state.errorMessage
  }),

  watch: {
    errorMessage () {
      this.snackbar = true
    }
  },

  // Appインスタンス生成前に一度だけ実行されます
  beforeCreate () {
    this.$store.dispatch('loadSettings')
  }
}
</script>

<style lang="scss">
  @import './assets/scss/base';

  #app {
    .v-app-bar {
        height: auto !important;
        box-shadow: none;
        .v-toolbar__content {
          height: auto !important;
          position: relative;
          @include mq(){
            justify-content: center;
          }
          .nav-icons {
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        .v-toolbar__title {
            padding-top: 2rem;
            padding-bottom: 2rem;
            display: flex;
            align-items: center;
            img {
              width: auto;
              height: 48px;
              margin-right: 1rem;
              @include mq(){
                height: 64px;
              }
            }
        }
    }
    .v-main {
      padding-top: 200px !important;
      .container--fluid {
        max-width: 1024px;
      }
    }
  }
</style>