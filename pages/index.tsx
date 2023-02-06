import AccountName from '@/component/AccountName'
import FloatingAddButton from '@/component/FloatingAddButton'
import Header from '@/component/Header'
import PartyCard from '@/component/PartyCard'
import PartySearchBox from '@/component/PartySearchBox'
import Box from '@mui/material/Box'
import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import React from 'react'


interface parties {
  createPartyName: string
  createPartyMembers: string
}




export default function Home() {
  // const fetchData = () => {
  //   axios.get("https://lets-party-backend.vercel.app/auth")
  //     .then((response) => console.log(response))
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [])








  // <stored username, get from Api>
  // const [username, setUsername] = useState('')

  // <stored party from createPart>
  // const [partyList, setPartyList] = useState([])

  // <for Search>
  const [partyNameInput, setPartyNameInput] = useState('')

  const [partyDetail, setPartyDetail] = useState<parties>({
    createPartyName: '',
    createPartyMembers: ''
  })

  console.log('partyDetail', partyDetail)






  return (
    <div className='homePage'>
      <Head>
        <title>
          Party Room
        </title>
      </Head>

      <Box className="homePageBox">
        <Header pageTitle='WELCOME' pageSubtitle='Lets Find the Funniest Party' />

        {/* username ={username} */}
        <AccountName />


        <PartySearchBox partyNameInput={partyNameInput} setPartyNameInput={setPartyNameInput} />

        {/* partyList={partyList}  */}
        {/* joinParty={joinParty} setJoinParty={setJoinParty}  */}
        <PartyCard />

        {/* PartyCreate={partyDetail} setPartyCreate={setPartyDetail} */}
        <FloatingAddButton />
      </Box>
    </div>
  )
}
