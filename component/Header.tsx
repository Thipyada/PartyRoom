// import Box from '@mui/material/Box'
// import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Tangerine } from '@next/font/google'
import Button from '@mui/material/Button';
import axios from 'axios'
import Router from 'next/router';
import { type } from 'os';

const tangerine = Tangerine({
  subsets: ['latin'],
  weight: '700'
})

type titles = {
  pageTitle: string
  pageSubtitle: string
}

export default function Header(props: titles) {
  const { pageTitle, pageSubtitle } = props
  const handleClick = () => {
    axios
      .get("https://lets-party-backend.vercel.app/logout")
      .then(response => {
        Router.push('/login')
      })
  }
  return (
    <header>
      <div className="headerTop">
        <div className="logout">
          <Button variant='contained' onClick={handleClick}>Logout</Button>
        </div>


        <div className="socialMediaBox">
          <TwitterIcon />
          <InstagramIcon />
          <FacebookIcon />
        </div>
      </div>

      <div className="headerTitleBox">
        <h1 className='headerTitle'>{pageTitle}</h1>
      </div>

      <div className="headerContext">
        <span className={tangerine.className} style={{ fontSize: 48 }}>{pageSubtitle}</span>
      </div>

    </header >
  )
}
