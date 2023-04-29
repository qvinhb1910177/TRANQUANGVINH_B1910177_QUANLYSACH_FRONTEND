<template>
    <Form
        @submit="submitBook"
        :validation-schema="bookFormSchema"
    >
    <div class="form-group ">
        <label for="name">Tên sách:</label>
        <Field
            name="name"
            type="text"
            class="form-control border-success"
            v-model="bookLocal.name"
    />
    <ErrorMessage name="name" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="year">Năm xuất bản</label>
        <Field
            name="year"
            type="text"
            class="form-control border-success"
            v-model="bookLocal.year"
    />
    <ErrorMessage name="year" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="type">loại sách:</label>
        <Field
            name="type"
            type="text"
            class="form-control border-success"
            v-model="bookLocal.type"
    />
    <ErrorMessage name="type" class="error-feedback" />
   
    </div>
    <div class="form-group">
        <label for="description">Mô tả sách</label>
        <Field
            name="description"
            type="text"
            class="form-control border-success"
            v-model="bookLocal.description"
    />
    <ErrorMessage name="description" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="price">Giá:</label>
        <Field
            name="price"
            type="text"
            class="form-control border-success"
            v-model="bookLocal.price"
    />
    <ErrorMessage name="price" class="error-feedback" />
    </div>
    
    <div class="form-group">
        <button class="btn btn-success">Lưu thông tin</button>
        <button
            v-if="bookLocal._id"
            type="button"
            class="ml-2 btn btn-danger"
            @click="deleteBook"
        >
            Xóa thông tin
        </button>
    </div>
</Form>
</template>
    <script>
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";

    export default {
        components: {
            Form,
            Field,
            ErrorMessage,
        },
    emits: ["submit:book", "delete:book"],
    props: {
        book: { type: Object, required: true }
    },
    data() {
        const bookFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Họ tên nhân viên không được để trống.")
                .min(5, "Họ tên nhân viên phải có từ 5-50 ký tự.")
                .max(50, "Họ tên nhân viên phải có từ 5-50 ký tự."),
           
            year: yup
                .string()
                .required("Vui lòng nhập Năm sinh.")
                .min(4, "Năm sinh không đúng định dạng.")
                .max(8, "Năm sinh không đúng định dạng."),
            type: yup
                    .string()
                    .required("Loại sách không được để trống.")
                    .max(100, "Địa chỉ tối đa 100 ký tự."),

           
            description: yup
                .string()
                .required("mô tả sách không được để trống.")
                .min(5, "mô tả sách phải có từ 5-50 ký tự.")
                .max(50, "mô tả sách phải có từ 5-50 ký tự."),
            price: yup
                .string()
                .required("Giá không được để trống")
                .min(4, "Giá từ 04-1000 ký tự.")
                .max(1000, "Giá từ 4-1000 ký tự."),
        });
    return {
        // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
        // contactLocal để liên kết với các input trên form
        bookLocal: this.book,
        bookFormSchema,
    };
},
    methods: {
        submitBook() {
            this.$emit("submit:book", this.bookLocal);
        },
        deleteBook() {
            this.$emit("delete:book", this.bookLocal.id);
        },
    },
};
    </script>
    
    <style scoped>
    @import "@/assets/form.css";
    </style>