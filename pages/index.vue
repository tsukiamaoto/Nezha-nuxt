<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="row">
      <div class="d-flex col-md-12 justify-content-center">
        <h1>首頁</h1>
      </div>

      <div class="col-md-12">
        <NuxtLink to="/login" class="btn btn-primary"> 登入 </NuxtLink>
        <NuxtLink to="/signup" class="btn btn-primary mx-2"> 註冊 </NuxtLink>
        <NuxtLink to="/count" class="btn btn-primary mx-2"> 非同步測試 </NuxtLink>
        <NuxtLink to="/user/profile" class="btn btn-primary mx-2">
          非同步獲得資料，並更新狀態
        </NuxtLink>
        <NuxtLink to="/state/counter" class="btn btn-primary mx-2"> 狀態管理 </NuxtLink>
        <NuxtLink to="/state/getCounter" class="btn btn-primary mx-2"> 獲得狀態 </NuxtLink>
        <NuxtLink to="/employee" class="btn btn-primary mx-2"> 取得其他伺服器資料 </NuxtLink>
      </div>
    </div>
  </div>
</template>
