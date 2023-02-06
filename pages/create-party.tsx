import React, { Dispatch, SetStateAction } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { useRouter } from 'next/router'
import BackHomeButton from '@/component/BackHomeButton'

// type createPartyDetail = {
//   PartyCreate: {
//     createPartyName: string
//     createPartyMembers: string
//   }

//   setPartyCreate: Dispatch<SetStateAction<{
//     createPartyName: string;
//     createPartyMembers: string;
//   }>>
// }
export default function createParty() {
  const router = useRouter()
  // const tokenCode = router?.query?.code
  // console.log('tokenCode: ', tokenCode)

  // const { PartyCreate, setPartyCreate } = props

  // const handleChange = (name: string, value: string) => {
  //   setPartyCreate((prevPartyCreate) => ({
  //     ...prevPartyCreate,
  //     [name]: value
  //   }))
  // }


  const handleSubmit = (e: any) => {
    e.preventDefault()

    router.push(`/`)

    // setState for both party's name and members
  }

  return (
    <div className="createPartyPageBackground">
      <div className="createPartyCover">
        <Box className="createPartyPageBox">
          <div className="createPartyBox">
            <div className="createPartyContext">
              <h1>Let's Create Your Party!</h1>

              <Stack spacing={6} className='inputStack'>
                <div className="inputBoxCreatePartyName">
                  <TextField
                    variant='standard'
                    className="inputCreatePartyName"
                    label="Your Party Name"
                    defaultValue={' '}
                    name='createPartyName'
                  // value={PartyCreate.createPartyName}
                  // onChange={(e) => handleChange(e.target.name, e.target.value)}
                  />
                </div>
                <div className="inputBoxCreatePartyMembers">
                  <TextField
                    variant='standard'
                    className="inputCreatePartyMembers"
                    label="Members Required"
                    defaultValue={' '}
                    name='createPartyMembers'
                  // value={PartyCreate.createPartyMembers}
                  // onChange={(e) => handleChange(e.target.name, e.target.value)}
                  />
                </div>
              </Stack>

              <div className='createPartyButton'>
                <Button
                  variant='contained'
                  onClick={handleSubmit}
                >Create Party</Button>
              </div>
              <div className="createPartyHomeButton">
                <BackHomeButton />
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  )
}

