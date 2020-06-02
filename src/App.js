import React from 'react';
import ReactDOM from "react-dom";
import './App.css'
import { TableCell, TableRow, Paper} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Avatar from '@material-ui/core/Avatar';
import MUIDataTable from "mui-datatables";
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Fragment from 'react';
import Dashboard from './Dashboard'

const columns = [
 {
  name:  "Field Name\nClient/ Farm",
  label:  "Field Name/Client/ Farm",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name:  "Hybrid(s)\nPlanted",
  label: "Hybrid(s) Planted",
  options: {
   filter: true,
   sort: false,
   
  }
 },
 {
  name: "Acres\nArea Planted",
  label: "Area Planted",
  options: {
   filter: true,
   sort: true,
   customFilterListOptions: { render: v => `Acres: ${v}` }
  }
 },
 {
  name: "Planting \nDate",
  label: "Planting Date",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name:  "Average\nPopulation",
  label: "Average Population",
  options: {
   filter: true,
   sort: false,
   display: false,
  }
 },
 {
  name: "GDUs to date",
  label: "GDUs to date",
  options: {
   filter: true,
   sort: false,
   display: false,
  }
 },
 {
  name: "Season rain to date in inches",
  label: "Season rain to date in inches",
  options: {
   filter: true,
   sort: false,
   display: false,
  }
 },
 {
  name: "Severe weather events",
  label: "Severe weather events",
  options: {
   filter: true,
   sort: false,
   display: false,
  }
 },
 {
  name: "Planters",
  label: "Planters",
  options: {
   filter: true,
   sort: false,
   display: false,
  }
 },
 {
  name: "Operators",
  label: "Operators",
  options: {
   filter: true,
   sort: false,
   display: false,
  }
 },

 {
  name: "Seed brand",
  label: "Seed brand",
  options: {
   filter: true,
   sort: false,
   display: false,
  }
 },
 {
  name:  "Seed Treatment",
  label:  "Seed Treatment",
  options: {
   filter: true,
   sort: false,
   display: false,
  }
 },
 {
  name:"Total units (bags)",
  label: "Total units (bags)",
  options: {
   filter: true,
   sort: false,
   display: false,
  }
 },
];

const data = [
  {
      "Field Name\nClient/ Farm": "Homestead creek SE\nCreek Side Ranch, Hudson",
      "Hybrid(s)\nPlanted": 4.0,
      "Acres\nArea Planted": 213.0,
      "Planting \nDate": "4/21\nstarted 4/20",
      "Average\nPopulation": 31000.0,
      "GDUs to date": 276.0,
      "Season rain to date in inches": "7\"",
      "Severe weather events": "",
      "Planters": 2.0,
      "Operators": 1.0,
      "Seed brand": "Dekalb, Pioneer",
      "Seed Treatment": "42-S Thiram,",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "subfield123",
      "Hybrid(s)\nPlanted": "DKC 53-58RIIB",
      "Acres\nArea Planted": 57.0,
      "Planting \nDate": "4/21\nstarted 4/20",
      "Average\nPopulation": 31000.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "subfield123",
      "Hybrid(s)\nPlanted": "DKC64-34RIB\n",
      "Acres\nArea Planted": 63.0,
      "Planting \nDate": "4/21\nstarted 4/20",
      "Average\nPopulation": 28000.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "subfield123",
      "Hybrid(s)\nPlanted": "DKC55-84RIB",
      "Acres\nArea Planted": 50.0,
      "Planting \nDate": "4/21\nstarted 4/20",
      "Average\nPopulation": 34000.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "subfield123",
      "Hybrid(s)\nPlanted": "DKC58-34RIB",
      "Acres\nArea Planted": 43.0,
      "Planting \nDate": "4/21\nstarted 4/20",
      "Average\nPopulation": 29500.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "Homestead Creek SW\nCreek Side Ranch, Hudson",
      "Hybrid(s)\nPlanted": "P0574AMXT",
      "Acres\nArea Planted": 123.0,
      "Planting \nDate": "April 1 2018",
      "Average\nPopulation": 32000.0,
      "GDUs to date": 280.0,
      "Season rain to date in inches": 6.0,
      "Severe weather events": "",
      "Planters": 1.0,
      "Operators": 1.0,
      "Seed brand": "Dekalb, Pioneer",
      "Seed Treatment": "ABM127",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "South of Road\nCreek Side Ranch, Hudson",
      "Hybrid(s)\nPlanted": 6.0,
      "Acres\nArea Planted": 245.0,
      "Planting \nDate": "April 1 2018",
      "Average\nPopulation": 28000.0,
      "GDUs to date": 295.0,
      "Season rain to date in inches": 9.0,
      "Severe weather events": "",
      "Planters": 1.0,
      "Operators": 1.0,
      "Seed brand": "Dekalb, Pioneer",
      "Seed Treatment": "Delavan, IL 2018. Lumialza\u2122 nematicide",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "subfield123",
      "Hybrid(s)\nPlanted": "DKC 53-58RIIB",
      "Acres\nArea Planted": 215.0,
      "Planting \nDate": "April 1 2018",
      "Average\nPopulation": 28500.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "subfield123",
      "Hybrid(s)\nPlanted": "DKC64-34RIB\n",
      "Acres\nArea Planted": 10.0,
      "Planting \nDate": "April 10",
      "Average\nPopulation": 26000.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "subfield123",
      "Hybrid(s)\nPlanted": "DKC55-84RIB",
      "Acres\nArea Planted": 4.0,
      "Planting \nDate": "April 15",
      "Average\nPopulation": 26000.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "subfield123",
      "Hybrid(s)\nPlanted": "DKC58-34RIB",
      "Acres\nArea Planted": 4.0,
      "Planting \nDate": "April 15",
      "Average\nPopulation": 26000.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "subfield123",
      "Hybrid(s)\nPlanted": "P0574AMXT",
      "Acres\nArea Planted": 4.0,
      "Planting \nDate": "April 25",
      "Average\nPopulation": 26000.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "subfield123",
      "Hybrid(s)\nPlanted": "P0589AMXT",
      "Acres\nArea Planted": 4.0,
      "Planting \nDate": "April 28",
      "Average\nPopulation": 26000.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "subfield123",
      "Hybrid(s)\nPlanted": "P1366AMXT",
      "Acres\nArea Planted": 4.0,
      "Planting \nDate": "April 29",
      "Average\nPopulation": 26000.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  }
];

const options = {
  // filterType: 'checkbox',
  expandableRows: true,
  selectableRowsHeader: false,
  
  renderExpandableRow: () => (
    <TableRow>
      <TableCell />
      <TableCell colSpan={5}>
      <Avatar variant="square" className='large'>
        FD
      </Avatar>

      <AvatarGroup max={5}>
        <Avatar alt="U" src="/static/images/avatar/1.jpg" />
        <Avatar alt="V" src="/static/images/avatar/2.jpg" />
        <Avatar alt="W" src="/static/images/avatar/3.jpg" />
        <Avatar alt="X" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Y" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
          <DenseTable />
      </TableCell>
      <TableCell />
    </TableRow>
  )
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Seed A', 159, 6.0, 24, 4.0),
  createData('Seed B', 237, 9.0, 37, 4.3),
  createData('Application C', 262, 16.0, 24, 6.0),
  createData('Equipment D', 305, 3.7, 67, 4.3),
  createData('Operator E', 356, 16.0, 49, 3.9),
];


const DenseTable=(props)=>{
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell> </TableCell>
            <TableCell align="right">Acres</TableCell>
            <TableCell align="right">Yield</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Rainfall</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default function App () {

    return (
      <div style={{ maxWidth: "100%" }}>
      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */}
      <h1>Report 1234</h1>
            <MUIDataTable
                title={"Planting by Field"}
                data={data}
                columns={columns}
                options={options}
            />
      {/* <Dashboard /> */}
      </div>
    );
  
}

ReactDOM.render(<App />, document.getElementById("root"));


// export default App;
