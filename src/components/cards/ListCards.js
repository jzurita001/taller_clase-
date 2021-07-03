import Card from "./Card"
import React, {children, useEffect, useState} from 'react'
//import celebridades from '../../helpers/usuarios'

const ListCards = () => {
    const [celebridades, setcelebridades] = useState([])
    const [error, seterror] = useState(false)
    useEffect(() => {
        const getUsuarios = async() =>{
            try {
                const res = await fetch("https://randomuser.me/api/")
                const data = await res.json()
                setcelebridades(data.results)
                seterror(false)
            } catch (error) {
                console.log(error)
                seterror(true)
            }
            
        }
        getUsuarios()
    }, [])
//console.log(celebridades[0].name.last)
    if (error){
        return <div class="alert alert-danger" role="alert">
                    Error a cargar el api Users! <a href='https://randomuser.me'>Revise el link</a>
               </div>
    }
    return (
        <div>        
            <div className="container">
                <div className="row">
                {celebridades.map(user =>(    
                    <div className="position-sticky top-15 start-50 col-sm-25 col-md-5 col-lg-3" key={user.login.uuid}>
                        <Card user={user}/>
                    </div>
                ))}           
                </div>
            </div>
        </div>
    )
}

export default ListCards;