import React from 'react'
import styled from 'styled-components'
import LazyImage from '../Lazy/LazyImage'

interface Props {

}

const palette = {
    darkBg: '#2e2e2e',
    extraDarkBg: '#1c1c1c',
    red: '#f95565'
}

const VideoDiscalimer = (props: Props) => {
    return (
        <Container>
            Questo sito confronta [in tempo reale] i bonus offerti dai Bookmakers da noi selezionati, in possesso di regolare concessione ad operare in Italia rilasciata dall’Agenzia delle Dogane e dei Monopoli. Il servizio, come indicato dall’Autorità per le garanzie nelle comunicazioni al punto 5.6 delle proprie Linee Guida (allegate alla delibera 132/19/CONS), è effettuato nel rispetto del principio di continenza, non ingannevolezza e trasparenza e non costituisce pertanto una forma di pubblicità

{/* <div className='alert-container'>
    <LazyImage
        width={46}
        height={46}
        alt='alert icon'
        src='/icons/alert.svg' />
</div> */}


<div style={{ display: 'flex', background: 'white', padding: '1rem', justifyContent: 'space-around', alignItems: 'center' }}>
    <LazyImage
        width={80}
        height={70}
        alt='alert icon'
        src='/icons/aams_logo.png' />

    <LazyImage
        width={70}
        height={40}
        alt='alert icon'
        src='/icons/playsafe_left_it.png' />
</div>

        </Container>
    )
}

const Container = styled.div`
    color : black;
    background : white;
    padding : 1rem 2rem;
    position : relative;
    max-width : 400px;      
    border-radius : 8px;
    margin : 3rem auto;
    border : 3px solid ${palette.darkBg};
    font-family : 'Roboto', sans-serif;
    box-shadow:         3px 3px 5px 0px rgba(50, 50, 50, 0.75);
    .alert-container{
        position : absolute;
        top : -30px;
        left : -20px;        
    }
`

export default VideoDiscalimer
