import { FilterSection, InputWrapper, NameInput, SelectInput } from '@/styles/home/filter'
import { FilterProps } from '@/types/filter'
import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

const Filter = ({searchQuery, setSearchQuery, selectRegion, setSelectRegion}: FilterProps) => {
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectRegion(event.target.value);
  }

  return (
    <FilterSection>

      <InputWrapper>
        <IoSearchOutline size={30} />
        <NameInput type="text" placeholder='Search for a country...' value={searchQuery} onChange={handleSearchChange} />
      </InputWrapper>

      <SelectInput value={selectRegion} onChange={handleRegionChange}>
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </SelectInput>
    </FilterSection>
  )
}

export default Filter