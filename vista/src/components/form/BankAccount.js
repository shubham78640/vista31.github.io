import React, { useState } from "react";
import {
  TextField,
  IconButton,
  // Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import Switch from "@mui/material/Switch";

function BankAccount(props) {
  const [checked, setChecked] = useState(true);

  const { setInputFields, inputFields } = props;

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputs", inputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        AccounType: "",
        bankName: "",
        branchName: "",
        branchAddress: "",
        accountHoderName: "",
        accountNumber: "",
        IfceCode: "",
        BankAccountProof: "",
      },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <Box
      sx={{
        marginTop: 7,
        display: "grid",
        gap: 0.3,
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h5>Bank Account information</h5>
        <div>
          <IconButton aria-label="delete">
            <AddIcon
              sx={{
                backgroundColor: "purple",
                color: "white",
                borderRadius: "50%",
              }}
              onClick={() => handleAddFields()}
            />
          </IconButton>
          <span style={{ fontSize: "13px", fontWeight: "bolder" }}>
            &nbsp; Add a new bank account
          </span>
        </div>
      </Box>
      <form onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              rowGap: "30px",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
      

            <FormControl sx={{ minWidth: 120, width: "18%" }} size="small">
              <InputLabel id="demo-select-small">Type of Account</InputLabel>
              <Select
                sx={{ width: "100%" }}
                labelId="demo-select-small"
                id="demo-select-small"
                value={inputField.AccounType}
                label="Type of Account"
                ononChange={(event) => handleChangeInput(index, event)}

              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Current"}>Apna</MenuItem>
                <MenuItem value={"Saving"}>Quikr</MenuItem>
                <MenuItem value={"Others"}>OLX</MenuItem>
            </Select>
            </FormControl>

            <TextField
              style={{ width: "18%" }}
              name="bankName"
              label="Name of the the Bank"
              size="small"
              value={inputField.bankName}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <TextField
              style={{ width: "18%" }}
              name="branchName"
              label="Branch Name"
              value={inputField.branchName}
              size="small"
              onChange={(event) => handleChangeInput(index, event)}
            />

            <TextField
              style={{ width: "38.5%" }}
              name="branchAddress"
              label="Branch Address"
              value={inputField.branchAddress}
              size="small"
              onChange={(event) => handleChangeInput(index, event)}
            />
            {/* </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}> */}
            <TextField
              style={{ width: "18%" }}
              name="accountHoderName"
              label="Account Holder Name"
              value={inputField.accountHoderName}
              size="small"
              onChange={(event) => handleChangeInput(index, event)}
            />
            <TextField
              style={{ width: "18%" }}
              name="accountNumber"
              label="Account Number"
              value={inputField.accountNumber}
              size="small"
              type={Number}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <TextField
              style={{ width: "18%" }}
              name="IfceCode"
              label="IFSC Code"
              value={inputField.IfceCode}
              size="small"
              onChange={(event) => handleChangeInput(index, event)}
            />
            <TextField
              style={{ width: "18%" }}
              name="BankAccountProof"
              label="Bank Account Proof*"
              value={inputField.BankAccountProof}
              size="small"
              onChange={(event) => handleChangeInput(index, event)}
            />
            <div
              style={{
                display: "flex",
                justfyContent: "space-between",
                width: "18%",
                alignItems: "center",
              }}
            >
              <IconButton aria-label="delete">
                <DeleteIcon onClick={() => handleRemoveFields(index)} />
              </IconButton>

              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <span style={{ fontSize: "13px", fontWeight: "bolder" }}>
                Default
              </span>
            </div>
          </Box>
        ))}
        {/* <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
        >
          send
        </Button> */}
      </form>
    </Box>
  );
}



export default BankAccount;
