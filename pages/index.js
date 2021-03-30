import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link';

import DB from '../db.json';

//import styles2 from '../styles/Post.modules.css'

const HeadFooter = ({style}) => {
    return (<>
        <div className={style}>
            <Image
                src="/06-LOGO.png"
                alt="Logo"
                width={212}
                height={38}
            />
            <Link href="/aboutUs"><a>O restaurante</a></Link>
            <Link href="/contact"><a>Contato</a></Link>
        </div>
    </>)
}

const Header = ({style}) => <HeadFooter style={style}></HeadFooter>
const Footer = ({style}) => <HeadFooter style={style}></HeadFooter>

import {useState} from 'react';

import Head from 'next/head';

function HomePage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        if( !name || !email || !message ){
            alert('porfavor, preencha os campos');
            return e.preventDefault();
        }

        alert("Mensagem enviada com sucesso, a GreenCity agradece sua companhia")
        return e.preventDefault();
    }

    return(<>

    <Head>
        <title>GreenCity</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>


    <div className={styles.app}>

        <Header
            style={styles.head}
        />

        <div className={styles.aboutUs}>
            <div>
                <h1> {DB.knowUs.title} </h1>
                <h2> {DB.knowUs.text} </h2>
            </div>
            <Image
                src="/cafe.jpg"
                alt="Logo"
                width={212}
                height={38}
            />
        </div>
        
        
        <h1 className={styles.slogan}>Vem tomar um café<br/> com a gente</h1>

        <form id="contact" action="#" className={styles.form} onSubmit={handleSubmit}>
            <input
                type="text"
                id="name"
                placeholder="Nome"
                onChange={ e => setName(e.target.value) }
            />
            <input
                type="text"
                id="email"
                placeholder="Email"
                onChange={ e => setEmail(e.target.value) }
            />
            <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Mensagem"
                onChange={ e => setMessage(e.target.value) }
            ></textarea>
            <input
                type="submit"
                value="Enviar"
            />
        </form>

        <Footer
            style={styles.footer}
        />

    </div>

    </>)
}
  
export default HomePage