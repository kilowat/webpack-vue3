<template>
    <div class="example-component">
      <div class="example-component-name">
        Component name
      </div>
      ExampleComponent
    </div>
</template>

<script>
export default {
    name: "lazy-example-component",
    mounted(){
      console.log('example lazy mounted');
    },
}
</script>

<style lang="scss">
  .example-component-name{
    color: green;
  }
</style>