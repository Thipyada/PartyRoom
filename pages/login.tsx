import LoginBox from '@/component/LoginBox'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export default function login() {
  return (
    <div className="loginPageBackground">
      <Box className="greetingLoginBox">
        <div className='loginBox'>
          <div className="loginDetail">
            <LoginBox />
          </div>
        </div>
        <div className="greetingBox">
          <div className="greetingContext">
            <h1>Hello! Friend</h1>
            <p>Enter your Detail and Let's have fun with us</p>

            <div className='signUpButton'>
              <Button
                variant='contained'
                href={`/register`}
              >Sign Up</Button>
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}
