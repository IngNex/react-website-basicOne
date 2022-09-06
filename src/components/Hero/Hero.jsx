import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import {HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton} from './HeroStyles';

export default function Hero() {
    return (
        <HeroSection>
            <HeroVideo src='./assets/hero.mp4'/>
            <Container>
                <MainHeading>Your data is secure with us</MainHeading>
                <HeroText>
                    We provide the best security system for clients all over the world
                </HeroText>
                <ButtonWrapper>
                    <Link to='singup'>
                        <Button>Get Started</Button>
                    </Link>
                    <HeroButton>Find More</HeroButton>
                </ButtonWrapper>
            </Container>
        </HeroSection>
    )
}