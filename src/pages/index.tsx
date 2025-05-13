import React from 'react'
import { Main, Section } from '@/styles/home'
import HomeSection from '@/components/home/homeGrid'
import data from '../../public/data/data.json'

export default function Home() {
  return (
    <Main>
      <Section>
        <HomeSection FlagData={data}/>
      </Section>
    </Main>
  )
}
