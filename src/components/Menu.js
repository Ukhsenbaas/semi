import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import { useRouter } from "next/router";
import { useMenuToggle } from "../layouts/MenuToggLayout";


export const Menu = () => {
  const { push } = useRouter();
  const { toggleMenu } = useMenuToggle();
  console.log(toggleMenu);
  return (
    <Paper
      sx={{
        width: toggleMenu ? 350 : 50,
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <MenuList>
        {listItem.map(({ href, title, icon }, index) => {
          return (
            <MenuItem
              key={index}
              onClick={() => {
                push(href);
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText>{title}</ListItemText>
            </MenuItem>
          );
        })}
      </MenuList>
    </Paper>
  );
};

const listItem = [
  {
    href: "/dashboard",
    title: "Dashboard",
    icon: <ContentCut fontSize="small" />,
  },
  {
    href: "/orders",
    title: "Orders",
    icon: <ContentCopy fontSize="small" />,
  },
  {
    href: "/users",
    title: "Users",
    icon: <ContentPaste fontSize="small" />,
  },
];
