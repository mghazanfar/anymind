import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ChatContext } from '../../store/chat-context';

export function ChooseChannel() {
  const [channel, setChannel] = React.useState('');

  const handleChange = (event, changeChat, chat) => {
    setChannel(event.target.value);
    changeChat({...chat, channel: String(event.target.value)})
  };

  return (
    <ChatContext.Consumer>
      {({chat, changeChat}) =>
      <Box mt={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Choose your Channel</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={channel}
            label="Choose your Channel"
            onChange={e => handleChange(e,changeChat, chat)}
          >
            <MenuItem value={1}>General</MenuItem>
            <MenuItem value={2}>Technology</MenuItem>
            <MenuItem value={3}>LGTM</MenuItem>
          </Select>
        </FormControl>
      </Box>
    }</ChatContext.Consumer>
  );
}
