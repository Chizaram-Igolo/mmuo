/**
 * React imports.
 */
import { useState, useEffect } from "react";

/**
 * Vendor-defined UI components/hooks/utilities/etc.
 */
import { makeStyles } from "@material-ui/core/styles";
import Alert, { Color } from "@material-ui/lab/Alert";
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

interface IAlertBox {
  message: string;
  severity: Color;
  isOpen: boolean;
  keepOpen: boolean;
  showAction?: boolean;
}

const AlertBox: React.FC<IAlertBox> = ({
  message,
  severity,
  isOpen,
  keepOpen,
  showAction,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout> = setTimeout(() => {});

    if (!keepOpen) {
      setTimeout(() => {
        setOpen(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [keepOpen]);

  return (
    <Collapse in={open}>
      <div className={classes.root}>
        <Alert
          severity={severity}
          className={`border ${
            severity === "success" ? "border-success" : ""
          } ${severity === "error" ? "border-danger" : ""} mb-0`}
          action={
            showAction ? (
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
            ) : (
              <></>
            )
          }
        >
          <div className="font-['WorkSans']">{message}</div>
        </Alert>
      </div>
    </Collapse>
  );
};

export default AlertBox;
