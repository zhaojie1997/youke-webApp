const BASEURL = 'http://47.92.132.161:8001/gate'

const Myname = `${BASEURL}/all_/`
export default{
        async xixi(){
            let res =await fetch(Myname)
            return await res.json()
          }
}
