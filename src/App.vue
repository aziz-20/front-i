<template>
  <div id="app">
    <router-view />
    <!-- <theme-picker /> -->
    
  </div>
</template>

<script>


export default {
  
  name: "App",
  // components: { ThemePicker },
  //   metaInfo() {
  //       return {
  //           title: this.$store.state.settings.dynamicTitle && this.$store.state.settings.title,
  //           titleTemplate: title => {
  //               return title ? `${title} - ${process.env.VUE_APP_TITLE}` : process.env.VUE_APP_TITLE
  //           }
  //       }
  //   }
  methods: {
    toggleThemePicker() {
      this.$http.dept.DeptlistHierarchy().then((res) => {
        console.log(res);
      });
    }
  }
};
</script>
<style scoped>
#app .theme-picker {
  display: none;
}
</style>
