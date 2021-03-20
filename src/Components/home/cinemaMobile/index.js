/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { getCinemaAction } from "../../../Redux/action/mainAction/cinema.action"
import listCinemaSystem from "../../../assets/data/listCinemaSystem.json"
import { NavLink } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '20%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  thirtHeading: {
    fontSize: theme.typography.pxToRem(12)
  },
  expandIcons: {
    transform: 'rotate(90deg)'
  }
}));

export default function CinemaMobile() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [cinemaAPI, setCinema] = useState("")
  const dispatch = useDispatch()
  const listCinema = useSelector(state => state.cinemaReducer.listCinema)


  useEffect(() => {
    dispatch(getCinemaAction());
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClick = (cinema) => {
    setCinema(cinema)
  }

  const renderCinema = () => {
    return listCinema.map((cinema, index) => {
      return (
        <Accordion onClick={() => handleClick(cinema.maHeThongRap)} key={index} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
          <AccordionSummary
            expandIcon={<ArrowForwardIosIcon className={classes.expandIcons} />}
            aria-controls={`panel${index + 1}bh-content`}
            id={`panel${index + 1}bh-header`}
          >
            <Typography className={classes.heading}><img width="50px" height="50px" src={cinema.logo} alt="true" /></Typography>
            <Typography style={{ display: "flex", alignItems: "center" }} className={classes.secondaryHeading}>{cinema.tenHeThongRap}</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ flexDirection: "column" }}>
            {listCinemaSystem.filter(item => item.maRap == cinemaAPI).map((cinemaSystem) => {
              const { maRap } = cinemaSystem
              return cinemaSystem.danhSachCumRap.map((cinemaSystem, index) => {
                return (
                  <NavLink style={{ color: "unset" }} to={`/detailCinema/${maRap}/${cinemaSystem.maCumRap}`}>
                    <div key={index} style={{ display: 'flex', marginBottom: "15px" }}>
                      <Typography className={classes.heading}>
                        <img width="50px" height="50px" src={cinemaSystem.hinhAnh} alt="true" />
                      </Typography>
                      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                        <Typography style={{ fontWeight: "500" }} className={classes.thirtHeading}>
                          {cinemaSystem.tenCumRap}
                        </Typography>
                        <Typography style={{ color: "#949494" }} className={classes.thirtHeading}>
                          {cinemaSystem.diaChi}
                        </Typography>
                      </div>
                    </div>
                  </NavLink>
                )
              })
            })}
          </AccordionDetails>
        </Accordion>
      )
    })
  }

  return (
    <div style={{ marginTop: "80px" }} className={classes.root}>
      {renderCinema()}
    </div>
  );
}
