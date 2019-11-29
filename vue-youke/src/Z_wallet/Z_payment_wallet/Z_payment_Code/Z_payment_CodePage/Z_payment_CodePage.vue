<template>
    <div>
        <div style="width: 3.45rem; height: 0.5rem;
            font-size: 0.16rem;display: flex;justify-content: center;align-items: center;">
            设置修改支付密码
        </div>
        <van-password-input
                :value="value"
                info="请设置密码"
                :focused="showKeyboard"
                @focus="showKeyboard = true"

        />

        <div ><van-number-keyboard
                :show="showKeyboard"
                @input="onInput"
                @delete="onDelete"
                @blur="showKeyboard = false"
                style="width: 3.75rem;height: 5rem"
        /></div>
        <!-- 数字键盘 -->

    </div>
</template>

<script>
    export default {
        name: "Z_payment_CodePage",
        data() {
            return {
                value: '',
                showKeyboard: true
            };
        },

        methods: {
            onInput(key) {
                this.value = (this.value + key).slice(0, 6);
                if(this.value.length==6){
                    window.console.log(this.value)
                    // this.$router.push('/awa?pwd='+this.value)
                    this.$router.push({name:'Z_payment_CodePagea',params:{pwd:this.value}})

                }
            },
            onDelete() {
                this.value = this.value.slice(0, this.value.length - 1);

            }
        }
    }
</script>

<style scoped>

</style>
