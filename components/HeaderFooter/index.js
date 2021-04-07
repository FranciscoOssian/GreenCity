import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'


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
            <Link href="/menu"><a>Cardápio</a></Link>
            <Link href="/contact"><a>Contato</a></Link>
            <div className={styles.menu}>
                <Image
                    src="/menu.svg"
                    alt="Menu"
                    width={38}
                    height={38}
                />
                <div>
                    <ul>
                        <li><Link href="/aboutUs"><a>O restaurante</a></Link></li>
                        <li><Link href="/menu"><a>Cardápio</a></Link></li>
                        <li><Link href="/contact"><a>Contato</a></Link></li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </>)
}

export default HeadFooter