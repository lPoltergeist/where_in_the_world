import React from 'react'
import FlagCard from './card'
import { FlagData } from '@/types/flagData'
import data from '../../../public/data/data.json'
import { Grid } from '@/styles/home'
import AnimatedCard from '@/utils/AnimatedCard'
import Filter from './filter'

const HomeSection = ({ FlagData }: FlagData) => {

    return (
       <>
        <Filter />

        <Grid>
            {FlagData.map((country, index) => (
               <AnimatedCard>
                 <FlagCard key={index}
                    CountryFlag={country.flags.png}
                    CountryName={country.name}
                    Population={country.population}
                    Region={country.region}
                    Capital={country.capital}
                />
               </AnimatedCard>
            ))}
        </Grid>
       </>
    )
}

export default HomeSection