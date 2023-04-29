<template>
    <div class=" row ">
        <div class="col-md-10 mx-auto">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-md-6 mx-auto text-center">
            <h4 class="text-danger">
                Danh sách các cuốn sách
                <font-awesome-icon icon="fa-solid fa-books-medical" />
            </h4>
            <BookList v-if="filteredBooksCount > 0" :books="filteredBooks"
                v-model:activeIndex="activeIndex" />
            <p v-else>Không có cuốn sách nào.</p>

            <div class="mt-3 row justify-content-around align-items-center">
                <button class="btn btn-sm btn-success" @click="goToAddBook">
                    <i class="fas fa-plus"></i> Thêm mới
                </button>
                <button class="btn btn-sm btn-danger" @click="removeAllBooks">
                    <i class="	fas fa-bell"></i> Xóa tất cả
                </button>
            </div>
        </div>
        <div class="mt-3 col-md-6">
            <div v-if="activeBook">
                <h4 class="text-danger">
                Chi Tiết Thông Tin cuốn sách
                <i class="fas fa-address-card"></i>
                </h4>
                <BookCard :book="activeBook" />
                <router-link
                    :to="{
                        name: 'book.edit',
                        params: { id: activeBook._id },
                    }"
                >
                    <span class="mt-2  badge badge-secondary">
                        Chỉnh Sửa <i class="fas fa-edit"></i></span
                    >
                </router-link>
                
            </div>
        </div>
    </div>
</template>
<script>
import BookCard from "@/components/BookCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import BookList from "@/components/BookList.vue";
import BookService from "@/services/book.service";
export default {
    components: {
        BookCard,
        InputSearch,
        BookList,
    },
    // Đoạn mã xử lý đầy đủ sẽ trình bày bên dưới
    data() {
        return {
            books: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        // Chuyển các đối tượng contact thành chuỗi để tiện cho tìm kiếm.
        bookStrings() {
            return this.books.map((book) => {
                const { name, year, type, description, price } = book;
                return [name, year, type, description, price].join("");
            });
        },
        // Trả về các contact có chứa thông tin cần tìm kiếm.
        filteredBooks() {
            if (!this.searchText) return this.books;
            return this.books.filter((_book, index) =>
                this.bookStrings[index].includes(this.searchText)
            );
        },
        activeBook() {
            if (this.activeIndex < 0) return null;
            return this.filteredBooks[this.activeIndex];
        },
        filteredBooksCount() {
            return this.filteredBooks.length;
        },
    },
    methods: {
        async retrieveBooks() {
            try {
                this.books = await BookService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveBooks();
            this.activeIndex = -1;
        },
        async removeAllBooks() {
            if (confirm("Bạn muốn xóa tất cả Các Thông tin cuốn sách?")) {
                try {
                    await BookService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        goToAddBook() {
            this.$router.push({ name: "book.add" });

        },
    },
    mounted() {
        this.refreshList();
    },
};
</script>
<style scoped>
.page {
    text-align: left;
    max-width: 100%;
}
</style>