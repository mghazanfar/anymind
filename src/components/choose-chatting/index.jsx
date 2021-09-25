import React from "react";
import { Box } from "@mui/system";
import { ChooseUser } from "../choose-user";
import { ChooseChannel } from "../choose-channel";
import { useStyles } from "../../styles";
import { ChooseChatWallpaper } from "../choose-chat-wallpaper";

export const ChooseChatting = ({ chat, changeChat }) => {
  const classes = useStyles();
  return (
    <Box p={3} pt={0} className={classes.chooseChattingContainer} mt={8}>
      <ChooseUser />
      <ChooseChannel />
      <ChooseChatWallpaper
        onWallpaperChange={(wallpaper) => changeChat({ ...chat, wallpaper })}
        classes={classes}
      />
    </Box>
  );
};
