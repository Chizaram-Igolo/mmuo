import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    marginTop: "1rem",
  },
}));

export default function AlertMessage({
  message,
  severity,
  isOpen,
  clearMessages,
  keepOpen,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    let timeOut;

    if (!keepOpen) {
      setTimeout(() => {
        setOpen(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeOut);
      //   clearMessages();
    };
  }, [keepOpen]);

  useEffect(() => {
    let timeOut = null;

    if (!open) {
      timeOut = setTimeout(() => {
        clearMessages();
      }, 2000);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [open, clearMessages]);

  return (
    <Collapse in={open}>
      <div className={classes.root}>
        <Alert
          severity={severity}
          className={`border ${
            severity === "success" ? "border-success" : ""
          } ${severity === "error" ? "border-danger" : ""} mb-0`}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {message}
        </Alert>
      </div>
    </Collapse>
  );
}
