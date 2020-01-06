import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  ClickAwayListener,
  IconButton
} from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';

import '../styles/info-style.css'

const Info = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
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
            <HelpIcon className="help-icon" onClick={handleClick} />
            {open ? (
              <div className="help-text">Yuccie selvage tumeric put a bird on it chillwave everyday carry literally salvia chambray. Banh mi health goth drinking vinegar offal mustache green juice palo santo yuccie. </div>
            ) : null}
          </div>
        </ClickAwayListener>
      </Paper>
    </Grid>
  )
}

export default Info;
