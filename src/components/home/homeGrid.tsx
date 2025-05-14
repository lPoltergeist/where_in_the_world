import React, { useEffect, useState } from 'react'
import FlagCard from './card'
import { FlagData } from '@/types/flagData'
import { Grid } from '@/styles/home'
import AnimatedCard from '@/utils/AnimatedCard'
import Filter from './filter'

const HomeSection = ({ FlagData }: FlagData) => {
    const [filteredData, setFilteredData] = useState(FlagData);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectRegion, setSelectRegion] = useState('');

  

    useEffect(() => {
        const handleFilter = () => {
            let filtered = FlagData.filter(country => {
                const matchesName = country.name.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesRegion = selectRegion ? country.region.toLowerCase() === selectRegion.toLowerCase() : true;
                return matchesName && matchesRegion;
            })


            setFilteredData(filtered);
        };
        handleFilter();
    }, [FlagData, searchQuery, selectRegion]);

    return (
        <>
            <Filter
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectRegion={selectRegion}
                setSelectRegion={setSelectRegion}
            />

            <Grid>
                {filteredData.map((country, index) => (
                    <AnimatedCard key={index}>
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