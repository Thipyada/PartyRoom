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
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface LoginAccount {
  username: string
  password: string
  errorUsername: boolean
  errorPassword: boolean
}

const initialAccountForm = {
  username: '',
  password: '',
  errorUsername: false,
  errorPassword: false,
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function LoginBox() {
  const router = useRouter()
  // const tokenCode = router?.query?.code
  // console.log('tokenCode: ', tokenCode)

  const [loginAccount, setLoginAccount] = useState<LoginAccount>({
    username: '',
    password: '',
    errorUsername: false,
    errorPassword: false,
  })

  const [open, setOpen] = useState(false);
  const [loginError, setLoginError] = useState(false)

  const handleChange = (name: string, value: string) => {
    setLoginAccount((prevLoginAccount) => ({
      ...prevLoginAccount,
      [name]: value
    }))
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = () => {
    const ValidatedUsernameResult = validateUsername(loginAccount.username)
    const ValidatedPasswordResult = validatePassword(loginAccount.password)

    if (ValidatedUsernameResult && ValidatedPasswordResult) {
      axios
        .post("https://lets-party-backend.vercel.app/login", { username: loginAccount.username, password: loginAccount.password })
        .then(response => {
          if (response.data.message === 'เข้าสู่ระบบสำเร็จ') {
            setOpen(true)
            setTimeout(() => router.push('/'), 1500)
          }
          // console.log(response)
          // // Handle response
        }).catch((error) => {
          setLoginError(true)
        })
      setLoginAccount(initialAccountForm)
    }
  }

  const validateUsername = (usernameInput: string) => {
    if (usernameInput.length < 20 && usernameInput.length > 7) {
      setLoginAccount((prev) => ({
        ...prev,
        errorUsername: false
      }))
      return true
    } else {
      setLoginAccount((prev) => ({
        ...prev,
        errorUsername: true
      }))
      return false
    }
  }

  const validatePassword = (passwordInput: string) => {
    if (passwordInput.length > 7) {
      setLoginAccount((prev) => ({
        ...prev,
        errorPassword: false
      }))

      return true
    } else {
      setLoginAccount((prev) => ({
        ...prev,
        errorPassword: true
      }))

      return false
    }
  }


  // Show or Hide Password
  const [showPassword, setShowPassword] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  return (
    <>
      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Registration Success !
        </Alert>
      </Snackbar > */}

      <Snackbar open={loginError} autoHideDuration={6000} onClose={handleClose} >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Login Error
        </Alert>
      </Snackbar >

      <div className='LoginBox'>
        <div className="LoginDetail">
          <h1 className='loginTitle'>Sign In</h1>

          <Stack spacing={4}>
            <div className="inputBoxLoginUserName">
              <TextField
                variant='standard'
                className="inputUsername"
                placeholder='Username'
                name='username'
                value={loginAccount.username}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                required
                error={loginAccount.errorUsername}
                helperText={loginAccount.errorUsername ? 'Username must be longer than 8 characters' : ' '}
              />
            </div>

            <div className="inputBoxLoginPassword">
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
                value={loginAccount.password}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                required
                error={loginAccount.errorPassword}
                helperText={loginAccount.errorPassword ? 'Password must contain more than 8 characters' : ' '}
              />
            </div>

            <div className="buttonBoxSignUp">
              <Button
                variant="outlined"
                className='confirmButton'
                onClick={handleSubmit}
              >
                Log In
              </Button>
            </div>
          </Stack>
        </div>
      </div>
    </>
  )
}
