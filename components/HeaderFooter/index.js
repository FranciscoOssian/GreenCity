import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import {useState} from 'react';


const HeadFooter = ({ style }) => {
    const [opened, setOpen] = useState(styles.menuClosed)
    const [menuSvg, setMenuSvg] = useState('./menu.svg')
    return (
        <div className={opened}>

            <div className={style}>

                <div className={styles.container}>

                    <div>
                        <img src="/06-LOGO.png"></img>
                        {
                            style === styles.head?
                                <img
                                    onClick = { () => {
                                        const sets = (a,b) => { setOpen(a) ; setMenuSvg(b) }
                                        opened === styles.menuClosed? sets(styles.menuOpen, './menu2.svg') : sets(styles.menuClosed, './menu.svg')
                                    } }
                                    src={ menuSvg }>
                                </img> : <></>
                        }

                    </div>

                    {
                        style === styles.head? 
                            <ul>
                                <li><Link href="/aboutUs"><a>O restaurante</a></Link></li>
                                <li><Link href="/menu"><a>Cardápio</a></Link></li>
                                <li className={styles.contactButton}><Link href="/contact"><a>Contato</a></Link></li>
                            </ul> : <></>
                    }

                </div>
            </div>
        </div>
    )
}

export default HeadFooter