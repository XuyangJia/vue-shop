<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="../assets/logo.png">
        <span>后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '64px': '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <el-menu
          router
          unique-opened
          :collapse="isCollapse"
          :default-active="activePath"
          :collapse-transition="false"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff">
          <el-submenu v-for="item in menuList" :index="item.id+''" :key="item.id">
            <template slot="title">
              <i :class="`iconfont ${iconsObj[item.path]}`"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item v-for="subItem in item.children" :index="'/'+subItem.path" :key="subItem.id" @click="saveNavState('/'+subItem.path)">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      menuList: null,
      iconsObj: {
        users: 'icon-users',
        rights: 'icon-tijikongjian',
        goods: 'icon-shangpin',
        orders: 'icon-danju',
        reports: 'icon-baobiao'
      },
      isCollapse: false,
      activePath: ''
    }
  },
  created () {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    async getMenuList () {
      const { data: res } = await this.axios.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menuList = res.data
    },
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
      console.log('toggleCollapse')
    },
    saveNavState (activePath) {
      this.activePath = activePath
      window.sessionStorage.setItem('activePath', activePath)
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background: #373d41;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background: #333744;
}
.el-main {
  background: #eaedf1;
}
.iconfont {
  margin-right: 8px;
}
.toggle-button {
  background-color: #4a5064;
  color: #fff;
  font-size: 10px;
  text-align: center;
  letter-spacing: 0.2em;
  line-height: 20px;
  cursor: pointer;
}
</style>
