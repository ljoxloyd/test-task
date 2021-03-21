import { Paper, Typography } from "@material-ui/core"

export default function SomeComponent(props) {
  
  return (
    <Paper>
      <Typography>
        SomeComponent № {props.num}
      </Typography>
      {props.children}
    </Paper>
  )
};
