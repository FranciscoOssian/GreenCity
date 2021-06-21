import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { useState } from 'react';

import styled from '@emotion/styled';

const OpenClose = styled.div`

`

const Container = styled.div`
    display: flex;
    align-items: center;
    max-width: 1000px;
    padding: 0 15px;
    margin: 0 auto;
    > div > img:nth-child(2) {
        display: none;
    }
    > div {
        display:flex;
        justify-content: space-between;
    }
    > div > img:last-child {
        padding-left: 17vw;
    }
    @media only screen and (max-width: 600px) {
        > div img:last-of-type {
            display: inline;
        }
        flex-direction: column;
        align-items: flex-start;
        height: 100%;
        padding: 0;
    }
`


const HeadFooter = ({ style }) => {
    const [opened, setOpen] = useState(styles.menuClosed)
    const [menuSvg, setMenuSvg] = useState('./menu.svg')
    return (
        <div className={opened}>

            <div className={style}>

                <Container>
                    <div>
                        <img src="/06-LOGO.png"></img>
                        {
                            style === styles.head ?
                                <img
                                    onClick={() => {
                                        const sets = (a, b) => { setOpen(a); setMenuSvg(b) }
                                        opened === styles.menuClosed ? sets(styles.menuOpen, './menu2.svg') : sets(styles.menuClosed, './menu.svg')
                                    }}
                                    src={menuSvg}>
                                </img> : <></>
                        }

                    </div>

                    <ul>
                        <li><Link href="/aboutUs"><a>O Restaurante</a></Link></li>
                        <li><Link href="/menu"><a>Cardápio</a></Link></li>
                        <li className={styles.contactButton}><Link href="/contact"><a>Contato</a></Link></li>
                    </ul>
                </Container>
            </div>
        </div>
    )
}

export default HeadFooter