const BASEURL = 'http://localhost:3000/api'

const Myname = `${BASEURL}/index`

export default{
        async xixi(){
            let res =await fetch(Myname)
            return await res.json()
          }
}