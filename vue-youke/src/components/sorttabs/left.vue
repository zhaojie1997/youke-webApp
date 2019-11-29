<template>
  <div>
  <p class="L" v-for="(i,c) in msg.data.left" :key="c" @click="toggle1(c)" :class="checkindex==c?'red':''">{{i.yk_firstclassname}}</p>
  </div>
</template>
<script>
export default {
  name: "right",
  props: ["msg", "b"],
  data() {
    return {
      checkindex: 0
    };
  },
  methods: {
    toggle1(index) {
      this.checkindex = index;
      this.$bus.$emit('rshow',index)
      this.$emit('xx',index)
    }
  }
};
</script>

<style>
.L {
  font-size: 0.16rem;
  text-align: center;
  height: 0.61rem;
  line-height: 0.61rem;
  color: black;
}
.red {
  color: red;
}
</style>
