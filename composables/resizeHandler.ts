import { onMounted, onUnmounted } from 'vue'

export const useResizeHandler = (callback) => {
    onMounted(() => window.addEventListener('resize', callback))
    onUnmounted(() => window.removeEventListener('resize', callback))
}