<template>
    <nav class="navbar navbar-expand navbar-dark bg-info mt-3 container rounded-top">
        
        <div class="mr-auto navbar-nav row">
            <div class="nav-item col">
                <router-link :to="{ name: 'BookView' }" class="navbar-brand">
                    <b>TRANG CHỦ </b>
                    <i class="fas fa-address-card"></i>
                </router-link>
                
            </div>
            <div class="nav-item col">
                <router-link :to="{ name: 'BookView' }" class="navbar-brand">
                    QUẢN LÝ THÔNG TIN SÁCH
                    <i class="fas fa-address-card"></i>
                </router-link>
            </div>
            <div class="nav-item col">
                <router-link :to="{ name: 'TodoList' }" class="navbar-brand">
                    SÁCH NÊN ĐỌC
                    <i class="fa fa-calendar"></i>
                </router-link>
            </div>
            <div class="nav-item col">
                <router-link :to="{ name: 'SignIn' }" class="navbar-brand">
                    ĐĂNG XUẤT
                    <i class="fas fa-times-circle"></i>
                </router-link>
            </div>
        </div>
       
    </nav>
    
</template>
