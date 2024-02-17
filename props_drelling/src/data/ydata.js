import { reactive } from 'vue'
const ydata = reactive({
    message: "ydata from",
    count: 2,
    increase() {
        this.count += 2;
    },
    decrease() {
        this.count -= 2;
    }
});

// export default ydata;
export { ydata };