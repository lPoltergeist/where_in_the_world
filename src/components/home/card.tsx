import { CardContainer, CardContent, CardInformation, Flag } from '@/styles/home/card'
import { CardType } from '@/types/card'
import InfoRow from '@/utils/InfoRow'
import { useRouter } from 'next/router'
import React from 'react'

const FlagCard = ({ CountryName, Population, Region, Capital, CountryFlag }: CardType) => {
        const Router = useRouter();

      const handleCountryPage = () => {
        Router.push(`/country/${CountryName.toLowerCase()}`);
    }
    
    return (
        <CardContainer onClick={handleCountryPage}>
            <Flag src={CountryFlag} alt={CountryName} />

            <CardContent>
                <h2>{CountryName}</h2>
                <CardInformation>

                    <InfoRow label="Population:" value={new Intl.NumberFormat('pt-BR').format(Population)}/>
                    <InfoRow label="Region:" value={Region}/>
                    <InfoRow label="Capital:" value={Capital}/>
                    
                </CardInformation>
            </CardContent>
        </CardContainer>
    )
}

export default FlagCard