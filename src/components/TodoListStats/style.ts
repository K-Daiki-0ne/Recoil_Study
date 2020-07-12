import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyle = makeStyles((theme: Theme) => 
  createStyles({
    paper: {
      textAlign: 'center'
    }
  })
)