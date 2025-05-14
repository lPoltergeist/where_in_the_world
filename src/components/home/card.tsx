import { CardContainer, CardContent, CardInformation, CardText, Flag } from '@/styles/home/card'
import { CardType } from '@/types/card'
import { i } from 'framer-motion/client'
import React from 'react'

const FlagCard = ({ CountryName, Population, Region, Capital, CountryFlag }: CardType) => {
    return (
        <CardContainer>
            <Flag src={CountryFlag} alt={CountryName} />

            <CardContent>
                <h2>{CountryName}</h2>
                <CardInformation>
                    <CardText>
                        <strong>Population:</strong> <a>{new Intl.NumberFormat('pt-BR').format(Population)}</a>
                    </CardText>
                    <CardText>
                        <strong>Region:</strong> <a>{Region}</a>
                    </CardText>
                    <CardText>
                        <strong>Capital:</strong> <a>{Capital}</a>
                    </CardText>
                </CardInformation>
            </CardContent>
        </CardContainer>
    )
}

export default FlagCard