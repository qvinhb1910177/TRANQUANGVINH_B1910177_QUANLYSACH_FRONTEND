<script>
export default {
    props: {
        book: { type: Object, required: true },
    },
};
</script>
<template>
    <div>
        <div class="p-1">
            <strong>Tên sách:</strong>
            {{ book.name }}
        </div>
        <div class="p-1">
            <strong>Năm xuất bản:</strong>
            {{ book.year }}
        </div>
        <div class="p-1">
            <strong>Loại sách</strong>
            <strong></strong>
            {{ book.type }}
        </div>
        
        <div class="p-1">
            <strong>Mô tả:</strong>
            {{ book.description }}
        </div>
        <div class="p-1">
            <strong>Giá:</strong>
            {{ book.price }}
        </div>
       
    </div>
</template>