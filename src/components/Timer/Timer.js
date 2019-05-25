import React, { Component, PropTypes, useEffect, useState } from 'react'
import Countdown from 'react-count-down'

import {getPDdata} from '../../utils'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Zoom from '@material-ui/core/Zoom';

import './timer.css';

import CurrentTime from './CurrentTime';
import DismissTimer from './DismissTimer';

// const OPTIONS = {
//     endDate: '09/20/2019 10:55 AM',
//     prefix: 'Left for Fajr',
//     cb
//   }


const action = (
  <Button color="secondary" size="small">
    Dismiss
  </Button>
);

const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 600,
    },
    snackbar: {
      margin: theme.spacing(1),
    },
    typography: {
        padding: theme.spacing(2),
    },
  }));

const Timer = (props) => {
    const [dt, setdt] = useState(getPDdata('iso'))
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const [opts, setOpts] = useState({
        // endDate: '05/21/2019 18:42',
        // prefix: 'Left for Fajr',
        // cb
    })

    const cb = () => {
        console.log('expired callback', opts);
        const newmsg = (opts.prefix)?(opts.prefix).replace("Left", "Time"):'';
        
        setTimerdisplay(false)
        setTimeout(startTimer, 2000);
        
    }
    const [dismissMsg, setdismissMsg] = useState(['Dismiss']);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const startTimer = () => {
        setOpts({});
        setdt(getPDdata('iso'));
        setdismissMsg(['Dismiss']);
        setTimerdisplay(true)
        let timeopt = document.querySelector('.timerComp time').innerHTML;
        const currTime = timeopt.split(' ')[1];
        const upcomingPs = Object.entries(props.prayers).reduce((all, item) => {
            if (parseInt(item[1].split(':')[0]) >= parseInt(currTime.split(':')[0])) { //hours checking
                if (parseInt(item[1].split(':')[0]) === parseInt(currTime.split(':')[0])) {
                    if (parseInt(item[1].split(':')[1]) > parseInt(currTime.split(':')[1])) {
                        all.push(item);
                    }
                }
                else {
                    all.push(item);
                }
                
            }  
            return all
        }, [])
        console.table(upcomingPs);
        console.log('TZ', props.timezone)
        if (upcomingPs.length) {
            timeopt = timeopt.replace(currTime, upcomingPs[0][1]); //upcomingPs[0][1]
            console.log('timeopt', timeopt)
            setOpts({
                endDate: timeopt,
                prefix: 'Left for '+upcomingPs[0][0],
                cb
            })
        }      
    }

    useEffect(() => {
        startTimer(); 
    }, [])

    const classes = useStyles();
    const [timerdisplay, setTimerdisplay] = useState(true);
    
    

    useEffect(() => {
        if (!timerdisplay) {
            setAnchorEl(null);
            setTimeout(() => {
                setTimerdisplay(true)
            }, 60000)
        }

    }, [timerdisplay])

    
    return (
        <Zoom in={timerdisplay}>
            <div className="timerComp">
            {(userTimezone === props.timezone) && <SnackbarContent
                    align="left"
                    className={classes.snackbar}
                    message={opts.hasOwnProperty('endDate') && <Countdown 
                        options={opts} 
                        />}
                    action={<DismissTimer dismissMsg={dismissMsg} setdismissMsg={setdismissMsg} 
                    anchorEl={anchorEl} 
                    setAnchorEl={setAnchorEl}
                    timerdisplay={timerdisplay} 
                    setTimerdisplay={setTimerdisplay}/>}
                    style={{backgroundColor: '#1976d2', display : timerdisplay?'flex':'none' }}
                />
                }
                
                {/* {opts.hasOwnProperty('endDate') && <Countdown options={opts} />} */}
                <CurrentTime dt={dt} timezone={props.timezone}/>                
            </div>
        </Zoom>
    )
}

export default Timer;