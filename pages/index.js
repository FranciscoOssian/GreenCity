import Head from 'next/head';
import {useState} from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import DB from '../db.json';
import HeadFooter from '../components/HeaderFooter/index'
import Popup from '../components/Popup/index'

const Header = ({style}) => <HeadFooter style={style}></HeadFooter>
const Footer = ({style}) => <HeadFooter style={style}></HeadFooter>



function HomePage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [useRed, setUseRed] = useState(false);
    const [blur, setBlur] = useState(styles.notBlur);
    const [popupHidden, setpopupHidden] = useState(styles.popupHidden)

    const handleSubmit = (e) => {
        if( !name || !email || !message ){
            setUseRed(true);
            alert('porfavor, preencha os campos');
            return e.preventDefault();
        }
        
        setpopupHidden(styles.popup);
        setBlur(styles.blur)
        
        return e.preventDefault();
    }

    return(<>

    <Head>
        <title>{DB.appName}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Popup
        style={popupHidden}
        callback = { () => { setBlur(styles.notBlur); setpopupHidden(styles.popupHidden); } }
    />

    <div className={blur}>
    <div className={styles.app}>

        

        <Header style={styles.head} />

        <div className={styles.cards}>

            <div className={styles.card}>

                <div>
                    <h1> {DB.knowUs.title} </h1>
                    <h2> {DB.knowUs.text} </h2>
                </div>
                <img src="/cafe.png"/>

            </div>

            <div className={styles.card}>

                <img src="/cardapio.jpg" />
                <div>
                    <h1> {DB.knowTMenu.title} </h1>
                    <h2> {DB.knowTMenu.text} </h2>
                    <Link href="/menu"><a className={styles.btn1Card}>Abrir cardápio</a></Link>
                </div>

            </div>

        </div>
        
        <h1 className={styles.slogan}>Vem tomar um café<br/> com a gente</h1>

        <form id="contact" action="#" className={styles.form} onSubmit={handleSubmit}>
            <input
                type="text"
                id="name"
                placeholder="Nome"
                red={!name && useRed? "yes" : "none"}
                onChange={ e => setName(e.target.value) }
            />
            <input
                type="text"
                id="email"
                placeholder="Email"
                red={!email && useRed? "yes" : "none"}
                onChange={ e => setEmail(e.target.value) }
            />
            <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Mensagem"
                red={!message && useRed? "yes" : "none"}
                onChange={ e => setMessage(e.target.value) }
            ></textarea>
            <input
                type="submit"
                value="Enviar"
                className={styles.btn1}
            />
        </form>

        <Footer style={styles.footer}/>

    </div>
    </div>

    </>)
}
  
export default HomePage