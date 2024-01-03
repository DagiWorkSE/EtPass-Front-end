import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


const useStyles = makeStyles((theme) => ({
  successPage: {
    padding: theme.spacing(3),
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(4),
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    color: theme.palette.success.main,
    fontSize: 48,
    marginBottom: theme.spacing(2),
  },
}));

const SuccessPage = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.successPage} elevation={3}>
      <CheckCircleOutlineIcon className={classes.icon} />
      <Typography variant="h5" component="h2" gutterBottom>
        Congratulations! Your application was successful.
      </Typography>
      <Typography variant="body1" paragraph>
        Thank you for choosing our services. Your new {/* passport */} application will be processed shortly.
      </Typography>
      {/* Add any additional content or links as needed */}
    </Paper>
  );
};

export default SuccessPage;
