import React from 'react'

const Form = () => {
    const handleMyEvent = (e) => {
        console.log("Ativou o Evento.")
        console.log(e)
    }
const renderButton = (x) => {
    if (x) {
        return <h1>Renderizou Bonitinho!</h1>
    } else {
        return <h1>Renderizou Lindinho!!</h1>
    }
}
  return (
    <div>
        <div>
            <button onClick={handleMyEvent}>Clique Aqui</button>
        </div>
        <div>
            <button onClick={() => {console.log("Yes! Apertou em mim.")}}>Clique em mim Também</button>
        </div>
        <div>
            <button onClick={() => {
                if (true) {
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