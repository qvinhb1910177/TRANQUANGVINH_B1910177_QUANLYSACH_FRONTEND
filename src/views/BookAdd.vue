<template>
    <div v-if="book" class="page mt-3">
        <h4 class="p-2 bg-success text-light rounded-pill text-center">Thêm Thông tin Sách</h4>
        <BookForm
            :book="book"
            @submit:book="addBook"
        />
        <div class="nav-item col">
                <router-link :to="{ name: 'BookView' }" class="navbar-brand">
                    <b>QUẢN LÝ THÔNG TIN SÁCH </b>
                    <i class="fas fa-address-card"></i>
                </router-link>
        </div>
        <p class="alert alert-success">{{ message }}</p>
    </div>
</template>
<script>
import BookForm from "@/components/BookForm.vue";
import BookService from "@/services/book.service";

export default {
    components: {
        BookForm,
    },
    data() {
        return {
            book: {},
            message: "",
        };
    },
    methods: {
        async addBook(data) {
            try {
                await BookService.create(this.book);
                this.message = "Thông tin đã được thêm thành công.";
            } catch (error) {
                console.log(error);
                console.log(data);
            }
        },
    },
};
</script>