<template>
    <div :class="classObj" class="app-wrapper"  :style="{'--current-color': theme}">
      <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
      <Sidebar v-if="!sidebar.hide" class="sidebar-container"/>
      <div :class="{hasTagsView:needTagsView,sidebarHide:sidebar.hide}" class="main-container">
        <div :class="{'fixed-header':fixedHeader}">
          <Navbar/>
          <tags-view v-if="needTagsView"/>
        </div>
        <app-main/>
        


      </div>
          
    </div>
</template>

<script>

// import { AppMain, Navbar, Sidebar} from './components'
import { mapState } from 'vuex'
import variables from "@/assets/styles/variables.scss"


import {Sidebar,Navbar,TagsView,AppMain} from './components'
import ResizeMixin from './mixin/ResizeHandler'
export default {
  name: 'Layout',
  components: {
    // AppMain,
    Navbar,
    Sidebar,
    TagsView,
    AppMain
    
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      theme: state => state.settings.theme,
      sideTheme: state => state.settings.sideTheme,
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    },
    variables() {
      return variables;
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}

 </script>
<!--          
<style>
 .app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.app-wrapper::after {
  content: "";
  display: table;
  clear: both;
}

.app-wrapper.mobile.openSidebar {
  position: fixed;
  top: 0;
}

.fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - var(--base-sidebar-width));
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px);
  }

  .sidebarHide .fixed-header {
    width: 100%;
  }

  .mobile .fixed-header {
    width: 100%;
  }

</style>  -->

<style lang="scss" scoped>
   @import "~@/assets/styles/mixin.scss";
  @import "~@/assets/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$base-sidebar-width});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px);
  }

  .sidebarHide .fixed-header {
    width: 100%;
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>