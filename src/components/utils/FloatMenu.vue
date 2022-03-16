<template>
    <ul class="float-menu">
        <li>
            <a href="/index.html">Главная</a>
        </li>
        <li>
            <a href="/catalog.html">Каталог</a>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'float-menu',
    setup() {
        
    },
}
</script>
<style scoped lang="scss">
    .float-menu{
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 1000;
        background-color: #fff;
        padding: 12px;
        margin: 12px;
        border-radius: 6px;
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);
        list-style: none;
    }
</style>
