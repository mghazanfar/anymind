import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ChatContext } from "../../store/chat-context";

export function ChooseUser() {
  const [user, setUser] = React.useState("");

  const handleChange = (event, changeChat, chat) => {
    setUser(event.target.value);
    changeChat({ ...chat, user: event.target.value });
  };

  return (
    <ChatContext.Consumer>
      {({ changeChat, chat }) => (
        <Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Choose your user
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={user}
              label="Choose your user"
              onChange={(e) => handleChange(e, changeChat, chat)}
            >
              <MenuItem value={"Sam"}>Sam</MenuItem>
              <MenuItem value={"Russell"}>Russell</MenuItem>
              <MenuItem value={"Joyse"}>Joyse</MenuItem>
            </Select>
          </FormControl>
        </Box>
      )}
    </ChatContext.Consumer>
  );
}
