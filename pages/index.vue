<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="row">
      <div class="d-flex col-md-12 justify-content-center">
        <h1>首頁</h1>
      </div>

      <div class="col-md-12 d-flex justify-content-center">
        <NuxtLink to="/login" class="btn btn-primary"> 登入 </NuxtLink>
        <NuxtLink to="/user/show" class="btn btn-primary">使用者</NuxtLink>
        <NuxtLink to="/hello" class="btn btn-primary">Hello</NuxtLink>
      </div>
    </div>
  </div>
</template>
