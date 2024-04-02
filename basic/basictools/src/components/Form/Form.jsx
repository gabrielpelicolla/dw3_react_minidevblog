import React, { useState } from 'react'
var teste = 8;

const Form = () => {
    const handleMyEvent = (e) => {
        console.log("Ativou o Evento.")
        console.log(e)
    }
const [x, setX] = useState(true)
  return (
    <>
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
            <h1>{x ? 'Renderizou!': 'Deu ruim não foi'}</h1>
            <button onClick={() => setX(!x)}>Validação</button>
        </div>
        <div>
            <strong>valor:</strong>{teste}
            <button onClick={() => {teste = 12; console.log(teste)}}>Alterar Valor</button>
            <strong>Valor:</strong>{teste}
        </div>
    </div>
    </>
  )
}

export default Form