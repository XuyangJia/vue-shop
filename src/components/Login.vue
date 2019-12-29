<template>
  <div class="login-container">
    <div class="login-box">
      <div class="avatar-box">
        <img src="../assets/logo.png">
      </div>
      <el-form ref="form" :rules="loginFormRules" :model="loginForm" label-width="0px" class="login-form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" show-password prefix-icon="iconfont icon-3702mima"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button type="info" @click="onSubmit">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  height: 100%;
  background-color: #2b4b6b;
}
.login-box {
  width: 450px;
  height: 300px;
  border-radius: 3px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .avatar-box {
    height: 130px;
    width: 130px;
    padding: 10px;
    background: #fff;
    box-shadow: 0 0 10px #ddd;
    border: 1px solid #eee;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;

    }
  }
}
.login-form {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
