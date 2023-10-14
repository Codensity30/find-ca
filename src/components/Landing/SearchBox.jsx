import * as React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const errorHandler = (e) => {
  console.log(`Error occured ${e}`);
};

const SearchBox = () => {
  //* These states and hooks are related to snackbar --------------------------------------------------
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  //* These states and hooks are related to search box ------------------------------------------------
  const [caData, setCaData] = useState([]);
  const [id, setId] = useState(null);

  const handleChange = (event, newValue) => {
    const selectedOption = caData.find((option) => option.name === newValue);
    selectedOption ? setId(selectedOption.id) : setId(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_KEY);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCaData(data);
      } catch (error) {
        errorHandler(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex rounded-md w-full mt-10 font-Inter relative">
        <Autocomplete
          freeSolo
          disablePortal
          onChange={handleChange}
          options={caData.map((ele) => ele.name)}
          sx={{
            width: "80%",
            backgroundColor: "white",
          }}
          renderInput={(params) => (
            <TextField {...params} placeholder="Search by name" />
          )}
        />
        {id ? (
          <Link
            to={`/profile/${id}`}
            className="bg-custom-blue text-white text-center text-base w-36 font-semibold py-[1.025rem] rounded absolute -top-[0.03rem] right-0 "
          >
            Search
          </Link>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="bg-custom-blue text-white text-center text-base w-36 font-semibold py-[1.025rem] rounded absolute -top-[0.03rem] right-0 "
          >
            Search
          </button>
        )}
      </div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Please enter valid name!
        </Alert>
      </Snackbar>
    </>
  );
};

export default SearchBox;
