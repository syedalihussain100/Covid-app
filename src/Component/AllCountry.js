import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "../App.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    height: 800,
    overflowY: 'scroll',
    display: 'block',
    cursor: 'pointer'
  },
});

export default function AllCountry() {
  const classes = useStyles();
  const [globalData, setGlobalData] = useState([{}]);

      useEffect(() => {
          async function getData() {
              const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
              let data = await response.json();
  
              setGlobalData(Object.values(Object.values(data.countryitems)[0]));
              // console.log(Object.values(Object.values(data.countryitems)[0]))
          }
          getData();
      }, [])

  return   (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead className="country">
          <TableRow>
            <TableCell>Country Name</TableCell>
            <TableCell align="right">Total Cases&nbsp;</TableCell>
             <TableCell align="right">Total Active-Cases&nbsp;</TableCell>
             <TableCell align="right">Total Deaths&nbsp;</TableCell>
             <TableCell align="right">Total New-Cases Today&nbsp;</TableCell>
             <TableCell align="right">Total New-Deaths Today&nbsp;</TableCell>
             <TableCell align="right">Total Recovered&nbsp;</TableCell>
             <TableCell align="right">Total Serious Cases&nbsp;</TableCell>
             <TableCell align="right">Total UnResolved&nbsp;</TableCell>
             <TableCell align="right">Total Affected Countries&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {globalData.map((key,ind) => (
            <TableRow key={ind}>
              <TableCell component="th" scope="row">
                {globalData[ind].title}
              </TableCell>
              <TableCell align="right">{globalData[ind].total_cases}</TableCell>
               <TableCell align="right">{globalData[ind].total_active_cases}</TableCell>
               <TableCell align="right">{globalData[ind].total_deaths}</TableCell>
               <TableCell align="right">{globalData[ind].total_new_cases_today}</TableCell>
               <TableCell align="right">{globalData[ind].total_new_deaths_today}</TableCell>
               <TableCell align="right">{globalData[ind].total_recovered}</TableCell>
               <TableCell align="right">{globalData[ind].total_serious_cases}</TableCell>
               <TableCell align="right">{globalData[ind].total_unresolved}</TableCell>
               <TableCell align="right">{globalData[ind].total_affected_countries}</TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
































