import React from 'react'
import { useRouter } from 'next/router'
import data from '../../../public/data/data.json'
import { BackButton, BorderBox, BorderContainer, BordersGrid, CountryContainer, FlagContainer, InfoContainer, InnerInfoContainer } from '@/styles/countryPage/country';
import InfoRow from '@/utils/InfoRow';
import { IoArrowBack } from 'react-icons/io5';

const Country = () => {
    const router = useRouter();
    const { country } = router.query;

    const handleGoBack = () => {
        router.back();
    };

    const countryData = data.find(
        (c) => c.name.toLowerCase() === (country as string)?.toLowerCase()
    )

    const borders = countryData?.borders
    const countryBorders = data
        .filter((c) => borders?.includes(c.alpha3Code))
        .map((c) => ({
            ...c,
            name: c.name.replace(/\s*\(.*?\)\s*/g, '').trim(),
        }));


    if (!countryData) return <p>Country not found</p>;

    return (
        <>
        
        <CountryContainer>

            <FlagContainer>
                <BackButton>
                    <button onClick={handleGoBack}>
                        <IoArrowBack /> Back
                        </button>
                </BackButton>

                <img src={countryData.flags.png} alt={countryData.name} />
            </FlagContainer>

            <InfoContainer>
                <h1>{countryData.name}</h1>

                <InnerInfoContainer>
                    <div>
                        <InfoRow label="Native Name:" value={countryData.nativeName} />
                        <InfoRow label="Population:" value={new Intl.NumberFormat('pt-BR').format(countryData.population)} />
                        <InfoRow label="Region:" value={countryData.region} />
                        <InfoRow label="Sub Region:" value={countryData.subregion} />
                        <InfoRow label="Capital:" value={countryData.capital} />
                    </div>

                    <div>
                        <InfoRow label='Top Level Domain:' value={countryData.topLevelDomain} />
                        <InfoRow label='Currencies:' value={countryData.currencies?.map((c) => c.name).join(', ')} />
                        <InfoRow label='Languages:' value={countryData.languages?.map((l) => l.name).join(', ')} />
                    </div>
                </InnerInfoContainer>

                {
                    borders && (
                        <BorderContainer>
                            <InfoRow label='Border Countries:' />
                            <BordersGrid>
                                {countryBorders?.map((border, index) => (
                                    <BorderBox key={index}>{border.name}</BorderBox>
                                ))}
                            </BordersGrid>
                        </BorderContainer>
                    )
                }
            </InfoContainer>


        </CountryContainer>
        </>
    )
}

export default Country