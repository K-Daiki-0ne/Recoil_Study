import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyle = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '10%'
    },
    text: {
      textAlign: 'center'
    }
  })
)