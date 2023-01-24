import React, { useState, MouseEvent } from 'react'
// import { Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

interface CreateAccount {
  username: string
  password: string
  passwordConfirm: string
  errorUsername: boolean
  errorPassword: boolean
  errorPasswordConfirm: boolean
}

const initialAccountForm = {
  username: '',
  password: '',
  passwordConfirm: '',
  errorUsername: false,
  errorPassword: false,
  errorPasswordConfirm: false,
}
export default function RegisterBox() {
  const router = useRouter()
  // const tokenCode = router?.query?.code
  // console.log('tokenCode: ', tokenCode)

  const [createAccount, setCreateAccount] = useState<CreateAccount>({
    username: '',
    password: '',
    passwordConfirm: '',
    errorUsername: false,
    errorPassword: false,
    errorPasswordConfirm: false,
  })

  const [storedAccount, setStoredAccount] = useState<CreateAccount[]>([])

  const handleChange = (name: string, value: string) => {
    setCreateAccount((prevCreateAccount) => ({
      ...prevCreateAccount,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    const ValidatedUsernameResult = validateUsername(createAccount.username)
    const ValidatedPasswordResult = validatePassword(createAccount.password)
    const ValidatedPasswordConfirmResult = validatePasswordConfirm(createAccount.password, createAccount.passwordConfirm)

    if (ValidatedUsernameResult && ValidatedPasswordResult && ValidatedPasswordConfirmResult) {
      setStoredAccount((prevAccount) => {
        const newAccount = { ...createAccount }
        return [
          ...prevAccount,
          newAccount
        ]
      })
      setCreateAccount(initialAccountForm)
    }
  }

  const validateUsername = (usernameInput: string) => {
    if (usernameInput.length < 20 && usernameInput.length > 8) {
      setCreateAccount((prev) => ({
        ...prev,
        errorUsername: false
      }))
      return true
    } else {
      setCreateAccount((prev) => ({
        ...prev,
        errorUsername: true
      }))
      return false
    }
  }

  const validatePassword = (passwordInput: string) => {
    if (passwordInput.length > 7) {
      setCreateAccount((prev) => ({
        ...prev,
        errorPassword: false
      }))

      return true
    } else {
      setCreateAccount((prev) => ({
        ...prev,
        errorPassword: true
      }))

      return false
    }
  }

  const validatePasswordConfirm = (passwordInput: string, passwordConfirmInput: string) => {
    if ((passwordInput === passwordConfirmInput) && (passwordInput !== '' && passwordConfirmInput !== '')) {
      setCreateAccount((prev) => ({
        ...prev,
        errorPasswordConfirm: false
      }))

      return true
    } else {
      setCreateAccount((prev) => ({
        ...prev,
        errorPasswordConfirm: true
      }))

      return false
    }
  }


  // Show or Hide Password
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className='registerBox'>
      <div className="registerDetail">
        <h1 className='registerTitle'>Create Account</h1>

        <Stack spacing={4}>
          <div className="inputBoxUserName">
            <TextField
              variant='standard'
              className="inputUsername"
              placeholder='Username'
              name='username'
              value={createAccount.username}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              required
              error={createAccount.errorUsername}
              helperText={createAccount.errorUsername ? 'Username must be longer than 8 characters' : undefined}
            />
          </div>

          <div className="inputBoxPassword">
            <TextField
              id="input-with-icon-textfield"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}

              variant='standard'
              className="inputPassword"
              type={showPassword ? 'password' : 'text'}
              placeholder='Password'
              name='password'
              value={createAccount.password}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              required
              error={createAccount.errorPassword}
              helperText={createAccount.errorPassword ? 'Password must contain more than 8 characters' : undefined}
            />
          </div>

          <div className="inputBoxConfirmPassword">
            <TextField
              id="input-with-icon-textfield"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}

              variant='standard'
              className="inputConfirmPassword"
              type={showConfirmPassword ? 'password' : 'text'}
              placeholder='Confirm Password'
              name='passwordConfirm'
              value={createAccount.passwordConfirm}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              required
              error={createAccount.errorPasswordConfirm}
              helperText={createAccount.errorPasswordConfirm ? 'Mismatch password, try again' : undefined}
            />
          </div>

          <div className="buttonBoxSignUp">
            <Button
              variant="outlined"
              className='confirmButton'
              onClick={handleSubmit}
            >
              Create Account
            </Button>
          </div>
        </Stack>
      </div>
    </div>
  )
}
