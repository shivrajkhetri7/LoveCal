import React, { useState } from "react";
import {
  Button,
  Box,
  TextField,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

function FormCal() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [meter, setMeter] = useState();
  const [loveCount, setLoveCount] = useState();
  const handleClick = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    const { male, female } = formData;
    if (!male || !female) {
      setOpen(true);
      setError("Please Enter The Names ");
    } else {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      if (randomNumber > 40) {
        setMeter("success");
        setLoveCount(randomNumber);
        setOpen(true);
      } else if (randomNumber > 35 && randomNumber < 50) {
        setMeter("neutral");
        setLoveCount(randomNumber);
        setOpen(true);
      } else {
        setMeter("failed");
        setLoveCount(randomNumber);
        setOpen(true);
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="innerContainer">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {error && (
              <div className="alert-box">
                <img
                  src="/images/nothing.png"
                  width={150}
                  height={150}
                  alt="empty input box "
                />
                <h6>{error}</h6>
              </div>
            )}
            {meter == "success" && (
              <>
                <div className="alert-box">
                  <img
                    src="/images/heart.png"
                    width={150}
                    height={150}
                    alt="empty input box "
                  />
                  <h2>
                    Love Percentage of {formData?.male} And {formData?.female}{" "}
                    is {loveCount}
                  </h2>
                </div>
              </>
            )}
            {meter == "failed" && (
              <>
                <div className="alert-box">
                  <img
                    src="/images/broken-heart.png"
                    width={150}
                    height={150}
                    alt="broken-heart"
                  />
                  <h2>
                    Love Percentage of {formData?.male} And {formData?.female}{" "}
                    is {loveCount}
                  </h2>
                </div>
              </>
            )}
            {meter == "neutral" && (
              <>
                <div className="alert-box">
                  <img
                    src="/images/question-mark.png"
                    width={150}
                    height={150}
                    alt="question-mark"
                  />
                  <h2>
                    Love Percentage of {formData?.male} And {formData?.female}{" "}
                    is {loveCount}
                  </h2>
                </div>
              </>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <h2>
        Love Calculator{" "}
        {<img src="/images/heart.png" width={15} height={15} alt="Love " />}
      </h2>
      <Box>
        <TextField
          placeholder="Enter First Name"
          required
          id="outlined-required"
          label="Boy"
          color="secondary"
          sx={{ with: 350, mt: 2 }}
          name="male"
          onChange={handleClick}
        ></TextField>
      </Box>
      <Box>
        <TextField
          placeholder="Enter Second Name"
          required
          id="outlined-required"
          label="Girl"
          color="secondary"
          name="female"
          sx={{ maxWith: 350, mt: 2 }}
          onChange={handleClick}
        ></TextField>
      </Box>
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
        Click Me{" "}
      </Button>
    </div>
  );
}

export default FormCal;
