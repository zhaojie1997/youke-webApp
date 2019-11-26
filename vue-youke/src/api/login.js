const BASEURL = 'http://47.92.132.161:8000/youke/auth'

const Myname = `${BASEURL}/login`
const pass = `${BASEURL}/login_sms`
export default{
        async xixi(){
            let res =await fetch(Myname)
            return await res.json()
          },
    async haha(){
        let res =await fetch(pass)
        return await res.json()
    }
}