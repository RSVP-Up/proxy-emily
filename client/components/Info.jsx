import React from 'react';
import {
  Grid,
  Paper,
  ClickAwayListener,
  Menu,
  Divider
} from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import CheckIcon from '@material-ui/icons/Check';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import '../styles/info-style.css'

const calendars = ['Google', 'iCal', 'Outlook', 'Yahoo']

const Info = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleClickCalendar = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseCalendar = () => {
    setAnchorEl(null);
  };

  return (
    <Grid className="info-container">
      <Paper style={{
        width: 340,
        height: 96,
        borderRadius: 8,
        padding: 20
      }} elevation={0}>
        <Grid className="org-info">
          <img src="http://placecorgi.com/56" />
          <Grid style={{ paddingLeft: 20 }}>
            <div className="org-name">Vinyl Plaid Street Art</div>
            <div className="private-text">Private Group</div>
          </Grid>
        </Grid>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className="help">
            <HelpIcon className="help-icon" onClick={handleClick} fontSize="small" />
            {open ? (
              <div className="help-text">Yuccie selvage tumeric put a bird on it chillwave everyday carry literally salvia chambray. Banh mi health goth drinking vinegar offal mustache green juice palo santo yuccie. </div>
            ) : null}
          </div>
        </ClickAwayListener>
      </Paper>
      <Paper style={{
        width: 340,
        height: 512,
        borderRadius: 8,
        marginTop: 20
      }} elevation={0}>
        <Grid className="info">
          <CheckIcon className="icon" fontSize="large" />
          <Grid className="info-text">
            <div>Respond by</div>
            <div>Tuesday, January 21, 2020</div>
            <div>6:00 PM</div>
          </Grid>
        </Grid>
        <Grid className="info" style={{ paddingTop: 0 }}>
          <QueryBuilderIcon className="icon" fontSize="large" />
          <Grid className="info-text">
            <div>Tuesday, January 21, 2020</div>
            <div>6:30 PM to 8:30 PM</div>
            <div>Every 3rd Tuesday of the month until</div>
            <div>May 18, 2020</div>
            <div className="calendar-btn" onClick={handleClickCalendar}>
              Add to calendar
            </div>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleCloseCalendar}
            >
              {calendars.map((calendar, i) => {
                return <div key={i}>
                  {i === calendars.length - 1 ?
                    <>
                      <div className="menu-item" onClick={handleCloseCalendar}>{calendar}</div>
                    </>
                    :
                    <>
                      <div className="menu-item" onClick={handleCloseCalendar}>{calendar}</div>
                      <Divider />
                    </>
                  }
                </div>
              })}
            </Menu>
          </Grid>
        </Grid>
        <Grid className="info" style={{ paddingTop: 0 }}>
          <LocationOnOutlinedIcon className="icon" fontSize="large" />
          <Grid className="info-text">
            <a href="https://www.google.com/maps/place/Hirshhorn+Museum/@38.8881608,-77.0251569,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7b79cb8691d87:0x350463c3785a7599!8m2!3d38.8881608!4d-77.0229682" style={{ textDecoration: 'none', color: '#000' }}><div className="loc-link">Betterment</div>
              <div>Independence Ave and 7th St</div>
              <div>Washington, DC 20560</div>
            </a>
          </Grid>
        </Grid>
        <a href="https://www.google.com/maps/place/Hirshhorn+Museum/@38.8881608,-77.0251569,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7b79cb8691d87:0x350463c3785a7599!8m2!3d38.8881608!4d-77.0229682">
          <img className="img-map" src="https://res.cloudinary.com/dg9yvxo3q/image/upload/v1578278124/map_cc7jfo.png" />
        </a>
      </Paper>
      <div className="report">Report this event</div>
    </Grid >
  )
}

export default Info;
