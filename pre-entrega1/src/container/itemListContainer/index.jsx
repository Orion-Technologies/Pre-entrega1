import { useState } from "react";

const ItemListContainer = () => {
    const [greeting, setGreeting] = useState("Bienvenido a Reactive Video Game Zone")
    
    return(
        <div>
            {
                greeting.length > 0 ? (
                    <>
                    <h1 className="display-1 position-absolute top-10 start-50 translate-middle-x text-center">{greeting}</h1>
                    </>
                ):(
                    <p>Lista Vacia</p>
                )
            }
        </div>
    )
}

export default ItemListContainer