import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import RegisterBox from '@/component/RegisterBox'
import axios from 'axios'

export default function register() {

  return (
    <div className="registerPageBackground">
      <div className="welcomeRegisterCover">
        <Box className="welcomeRegisterBox">
          <div className="welcomeBox">
            <div className="welcomeContext">
              <h1>Welcome!</h1>
              <p>To keep connect with us please Sign In to your account</p>

              <div className='signInButton'>
                <Button
                  variant='contained'
                  href={`/login`}
                >Sign In</Button>
              </div>

              <h3>- OR -</h3>
            </div>
          </div>

          <RegisterBox />
        </Box>
      </div>
    </div>
  )
}
