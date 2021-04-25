import React, { useEffect, useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import { CSVReader } from 'react-papaparse'
import data from '../assets/crypto_data'

const useStyles = makeStyles((theme) => ({
    logo: {
      marginLeft: theme.spacing(15)
    },
    body: {
      padding: theme.spacing(10),
      paddingLeft: theme.spacing(75),
      paddingRight: theme.spacing(75)
    },
    form: {
      backgroundColor: 'white',
      padding: theme.spacing(5),
      borderRadius: 5,
      boxShadow: '0px 0px 10px 3px rgba(0, 0, 0, .3)',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    submit: {

    }
  }))

  const BootstrapButton = withStyles({
    root: {
      color: 'white',
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 14,
      padding: '6px 200px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#1652F0',
      borderColor: '#0063cc',
      fontFamily: 'Red Hat Display',
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);

  function csvJSON(csv){
    var lines=csv.split("\n");
    var result = [];
    var headers=lines[0].split(",")

    for(var i=1;i<lines.length;i++) {
        var obj = {};
        var currentline=lines[i].split(",");
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j]
        }
        result.push(obj)
    }
    console.log(JSON.parse(result))
    return JSON.parse(result)
}



const InputForm = () => {
    const classes = useStyles()
    const [selection, setSelection] = useState('')

    const selectCoin = (params) => {
        setSelection(params.inputProps.value)
        return <TextField {...params} fontFamily="Red Hat Display" label="Coin" variant="outlined" />
    }

    return (
        <form className={classes.form}>
            <Autocomplete
                id="combo-box-demo"
                options={data}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => selectCoin(params)}
            />
            <Box className={classes.submit} pt={2}>
                <BootstrapButton>
                    SUBMIT
                </BootstrapButton>
            </Box>
        </form>
    );
}

export default InputForm