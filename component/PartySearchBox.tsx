import { Dispatch, SetStateAction, useState } from 'react';
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from "@mui/icons-material/Search";

type partiesInput = {
  partyNameInput: string
  setPartyNameInput: Dispatch<SetStateAction<string>>
}
export default function PartySearchBox(props: partiesInput) {
  const { partyNameInput, setPartyNameInput } = props

  const handleChange = (value: string) => {
    setPartyNameInput(value)
  }

  console.log('partyNameInput', partyNameInput)

  return (
    <div className="searchTextfieldBox">
      <TextField
        variant='standard'
        label="Find your favorite party"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
        type='text'
        value={partyNameInput}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}
