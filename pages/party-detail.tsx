import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Header from '@/component/Header'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import AdjustIcon from '@mui/icons-material/Adjust';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useRouter } from 'next/router';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function partyDetail() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter()
  const [joinParty, setJoinParty] = useState(false)

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setJoinParty(false);
  };

  const handleClickJoin = () => {
    setJoinParty(true)
    setTimeout(() => router.push('/'), 2000)
  }


  return (
    <div className="partyDetailPage">
      <Snackbar open={joinParty} autoHideDuration={6000} onClose={handleClose} >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Joining Party Successful
        </Alert>
      </Snackbar >

      <Header pageTitle='PARTY' pageSubtitle='Check Out Party Detail' />
      <div className="partyDetailCover">
        <Box className="partyDetailPageBox">
          <Grid container spacing={4}>

            <Grid item xs={12}>
              <div className="backHomeButtonDesktop">
                {!isMobile && (
                  <Button
                    variant='contained'
                    href={`/`}
                  >
                    Back to Home
                  </Button>
                )}
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="itemBox">
                <div className="partyTitle">
                  <div className="partySchedule">
                    <div className="scheduleIcon">
                      <div className="monthBox">
                        <h2 className="monthText">
                          month
                        </h2>
                      </div>

                      <div className="dateBox">
                        <h2 className="dateText">
                          date
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="partyName">
                    <h1 className='partyNameText'>Party's Name</h1>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={8} lg={8}>
              <div className="itemBox">
                <div className="partyImage">
                  <img
                    src="/image/pic7.jpg"
                    alt="party"
                  />
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <div className="itemBox">
                <div className='partyOrganizerBox'>
                  <div className="partyOrganizer">
                    <div className="organizerIcon">
                      <AdjustIcon></AdjustIcon>
                    </div>

                    <div className="organizerDetail">
                      <div className='organizerTitle'>Created By</div>
                      <div className="organizerName">Organizer Name</div>
                    </div>
                  </div>


                  <div className="partyDateAndTime">
                    <div className="calendarIcon">
                      <CalendarTodayIcon></CalendarTodayIcon>
                    </div>
                    <div className="calendarDetail">
                      <div className="calendarTitle">Date&Time</div>
                      <div className="calendarDate">
                        Day, Month Date, Year
                      </div>
                      <div className="calendarTime">
                        Time, TimeZone
                      </div>
                    </div>
                  </div>

                  <div className="partyLocation">
                    <div className="locationIcon">
                      <LocationOnIcon></LocationOnIcon>
                    </div>

                    <div className="locationDetail">
                      <div className="locationTitle">Location</div>
                      <div className="locationSpecify">
                        Online/In person
                      </div>
                      <div className="locationPlace">
                        City/Country
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={8} lg={8}>
              <div className="itemBox">
                <div className="partyDescriptions">
                  <div className="partyDescriptionsTop">
                    <h3><span>Details</span></h3>
                  </div>

                  <h3>Descriptions</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quaerat iusto quis accusamus odio doloremque quo repudiandae, quam libero perferendis earum sit eaque expedita ad magnam nobis assumenda blanditiis. Cumque.</p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <div className="itemBox">
                <div className="reservedSpotButton">
                  {/* RSVP will be disable when members === maxMembers (return true) and replace the text with 'You're attended' */}
                  <Button
                    variant='contained'
                    className='reserveButton'
                    onClick={handleClickJoin}
                  >Reserve Your Spot</Button>
                </div>

                <div className="backHomeButtonMobile">
                  {isMobile && (
                    <Button
                      variant='contained'
                      href={`/ `}
                    >
                      Back to Home
                    </Button>
                  )}
                </div>
              </div>
            </Grid>
          </Grid>


        </Box>
      </div>
    </div >
  )
}
