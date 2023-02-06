import React, { Dispatch, SetStateAction, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Chip, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ScheduleIcon from '@mui/icons-material/Schedule';


export default function PartyCard() {

  // const partyFilter = PartyList.filter((item) => {
  //   return item.name.includes(partyName) 
  // })

  const [memberCount, setMemberCount] = useState(0)

  // const handleClickJoin = () => {
  //   setMemberCount(prev => prev + 1)
  //   setJoinParty(true)
  // }



  return (
    <div className='partyCard'>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 2, sm: 2, md: 4 }}>
        {/* partyFilter.length > 0 && partyFilter.map */}
        {[1, 2].map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="/image/pic7.jpg"
                  alt="party"
                />

                <CardContent className='partyContent'>

                  <Typography gutterBottom variant="h5" component="div" className='partyTitle'>
                    Party's name
                  </Typography>

                  {/* <div className="partyTime">
                    <ScheduleIcon />
                    <span>Time</span>
                  </div>

                  <div className='partyLocation'>
                    <LocationOnIcon /> <span>Location</span>
                  </div> */}
                </CardContent>
              </CardActionArea>

              <div className='cardOptions' style={{ paddingTop: 5, paddingBottom: 5 }}>
                <CardActions>
                  <div className="partyOptions">
                    <div className="partyMember">
                      <FavoriteBorderIcon /><span style={{ paddingLeft: 2 }}>{memberCount}/10</span>
                    </div>

                    <div className="partyCardButton">
                      <Button
                        variant='outlined'
                        href={`/party-detail`}
                      >
                        Detail
                      </Button>
                    </div>

                  </div>
                </CardActions>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
