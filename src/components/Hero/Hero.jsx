import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import {HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton} from './HeroStyles';
import video from '../../assets/security.mp4'

export default function Hero() {
    return (
        <HeroSection>
            <HeroVideo src={video} autoPlay muted/>
            <Container>
                <MainHeading>Tu informacion estara seguro con nosotros.</MainHeading>
                <HeroText>
                Ofrecemos un sistema de seguridad completo para todo el mundo.
                </HeroText>
                <ButtonWrapper>
                    <Link to='singup'>
                        <Button>Empezar</Button>
                    </Link>
                    <HeroButton>Leer mas...</HeroButton>
                </ButtonWrapper>
            </Container>
        </HeroSection>
    )
}