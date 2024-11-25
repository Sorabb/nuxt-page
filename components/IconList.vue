<script setup>
const props = defineProps({name: String});
console.log(props,props.name);
const icons = {
    ElIconHouse: ElIconHouse,
    ElIconSetting: ElIconSetting
}
</script>
<template>
    <el-icon><component :is="icons[props.name]"></component></el-icon>
</template>