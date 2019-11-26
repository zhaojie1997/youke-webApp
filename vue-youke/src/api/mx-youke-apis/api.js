

export default {
    async ykHomeData() {
        // let res = await fetch(`${BASEURL}/yk/swp`);
        let res = await fetch("http://47.92.132.161:8001/youke/home/")
        return await res.json()
    },

}