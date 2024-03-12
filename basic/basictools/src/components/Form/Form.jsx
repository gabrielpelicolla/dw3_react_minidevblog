import React from 'react'

const Form = () => {
    const handleMyEvent = () => {
        console.log(e)
        console.log("Ativou o Evento!")
    }

    const renderButton = (x) =>{
        if(x) {
            return <hi>Renderizou Bonitinho!</hi>
        } else {
            return <hi>Renderizou Lindidinho!!</hi>
        }
    }
  return (
    <div>
        <div>
            <button onClick={handleMyEvent}>Clique Aqui</button>
        </div>
        <div>
            <button onClick={() => {console.log("Yes! Apertou em mim.")}}>Clique em mim também</button>
        </div>
        <div>
            <button onClick={() => {
                if (true){
                    console.log("Isso não deveria acontecer!")
                }
            }}>Será que você clicaria aqui?</button>
        </div>
        <div>
            {renderButton(true)}
            {renderButton(false)}
        </div>
    </div>
  )
}

export default Form