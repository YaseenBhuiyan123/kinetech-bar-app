import React, { useState } from "react";
import { Button, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function AddModal() {
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

  const handleClick = () => {
    handleOpen();
    console.log("hello");
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={(event) => {
          event.stopPropagation();
          handleClick();
        }}
        size="small"
      >
        Add
      </Button>
      <Modal
        open={open}
        onClose={(event) => {
          event.stopPropagation();
          handleClose();
        }}
      >
        <div style={modalStyle} className={styles.paper}>
          <h3>Added to cart!</h3>
        </div>
      </Modal>
    </div>
  );
}
