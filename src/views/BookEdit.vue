<template>
    <div v-if="book" class="page mt-3">
        <h4 class="p-2 bg-info text-light rounded-pill text-center">Chỉnh sửa Thông tin</h4>
        <BookForm :book="book" @submit:book="updateBook" @delete:book="deleteBook" />
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
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            book: null,
            message: "",
        };
    },
    methods: {
        async getBook(id) {
            try {
                this.book = await BookService.get(id);
            } catch (error) {
                console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
        async updateBook(data) {
            try {
                await BookService.update(this.book._id, data);
                this.message = "Thông tin đã được cập nhật thành công.";
            } catch (error) {
                console.log(error);
            }
        },
        async deleteBook() {
            if (confirm("Bạn muốn xóa Thông tin sách này?")) {
                try {
                    await BookService.delete(this.book._id);
                    this.message = "Thông tin sách đã được xóa.";
                
                    this.$router.push({ name: "bookview" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    created() {
        this.getBook(this.id);
        this.message = "";
    },
};
</script>