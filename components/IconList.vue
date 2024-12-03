<script setup>
const props = defineProps({name: String});

const icons = {
    ElIconHouse: ElIconHouse,
    ElIconSetting: ElIconSetting,
    ElIconDocument: ElIconDocument,
    ElIconNotebook: ElIconNotebook,
    ElIconTickets: ElIconTickets,
    ElIconMemo: ElIconMemo,
}
</script>
<template>
    <component :is="icons[props.name]"></component>
</template>