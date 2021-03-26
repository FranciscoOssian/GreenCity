import styles from '../styles/Home.module.css'
import Image from 'next/image'

import {useState} from 'react';

import Head from 'next/head';

function HomePage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        if(name === '' || email === '' || message === '') return alert('porfavor, preencha os campos');

        alert("Mensagem enviada com sucesso, a GreenCity agradece sua companhia")

        e.preventDefault();
    }

    const handleSetName = (e) => {
        setName(e.target.value);
    }

    const handleSetEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSetMessage = (e) => {
        setMessage(e.target.value);
    }

    return(<>

    <Head>
        <title>GreenCity</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className={styles.app}>

        <div className={styles.head}>
            <Image
                src="/06-LOGO.png"
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
                onChange={handleSetName}
            />
            <input
                type="text"
                id="email"
                placeholder="Email"
                onChange={handleSetEmail}
            />
            <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Mensagem"
                onChange={handleSetMessage}
            ></textarea>
            <input
                type="submit"
                value="Enviar"
            />
        </form>

    </div>

    </>)
}
  
export default HomePage