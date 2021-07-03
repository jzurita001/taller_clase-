import {useState} from "react"
const Navbar =() => {
        const[user, setUser] = useState(null)
        
        const login = () =>{
           setUser({id:1,nombre: 'jzurita'})
        }   

           const logout = () =>{
            setUser(null)   

        } 
        return( 
<nav class="navbar navbar-light bg-light">
<div className="App">
        
        <p className = 'text-success-light bg-success bg-gradient'><h1> Taller Poo  </h1></p>
        <div className="position-sticky col-sm-6">
          <p className = 'text-success'><h2> Calculadora </h2></p>
          <div class="btn-group" role="group" aria-label="Basic example">

        </div>
        

    
    </div>
</div>
</nav>
    );
}

export default Navbar//sirve para exportar con defol a cualquier lado