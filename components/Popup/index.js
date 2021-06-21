import styled from '@emotion/styled'

const Container = styled.div`
    display: ${props => props.visible === true ? 'block' : 'none'};
`

const PopUp = styled.div`
    position: fixed;
    top: 25%;
    right: 35%;
    z-index: 6;
    background: #EEFBF6;
    box-shadow: 0px 15px 55px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
     > h1 {
        margin: 56px 27px 30px 27px;
        font-family: Cookie;
        font-style: normal;
        font-weight: normal;
        font-size: 72px;
        line-height: 79.4%;
        text-align: center;
        color: #4D7981; 
    }
     > h2 {
        margin: 30px 88px 33px 88px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 127%;
        text-align: center;
        color: #4D7981;
    }
     > button {
        margin: 33px 56px 64px 56px;
        width: 420px;
        height: 60px;
        background: #2A87CA;
        border-radius: 5px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 100%;
        color: #FFFFFF;
    }

    @media only screen and (max-width: 600px) {
        right: 0%;
        margin: 10px;
         > h1 {
            margin: 10px;
            font-size: 60px;
            line-height: 79.4%;
        }
        h2 {
            margin: 10px;
        }
        button {
            margin: 10px;
            width: 90%;
            height: 50px;
        }
}
`

const Popup = ({ visible, callback }) => {
    return (
        <Container visible={visible}>
            <PopUp>
                <h1>Mensagem enviada!</h1>
                <h2>Responderemos sua mensagem em breve.</h2>
                <button
                    onClick={() => { callback() }}
                >Fechar</button>
            </PopUp>
        </Container>
    )
}

export default Popup