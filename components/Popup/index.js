const Popup = ({ style, callback }) => {
    return (
        <div className={style}>
            <h1>Mensagem enviada!</h1>
            <h2>Responderemos sua mensagem em breve.</h2>
            <button
                onClick = { () => {callback()} }
            >Fechar</button>
        </div>
    )
}

export default Popup