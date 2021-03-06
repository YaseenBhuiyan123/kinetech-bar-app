import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuForm from "./components/MenuForm";

function App() {
  function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      textAlign: "center",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const styles = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Kinetech Cloud Bar</h1>
        <h3>Online Ordering</h3>
        <Button
          variant="contained"
          onClick={(event) => {
            event.stopPropagation();
            handleOpen();
          }}
          size="small"
        >
          Place Order
        </Button>
        <Modal
          open={open}
          onClose={(event) => {
            event.stopPropagation();
            handleClose();
          }}
        >
          <MenuForm />
        </Modal>
      </header>
    </div>
  );
}

export default App;
