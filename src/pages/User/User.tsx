import {useParams} from 'react-router-dom'

const User = () =>{
    const params = useParams()    
    let {name} = params
   return (
    <>
    <h1>The login user is:{name}</h1>
    </>
   )
}
export default User