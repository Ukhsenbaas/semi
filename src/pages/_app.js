import "../../styles/globals.css";

import { Box } from "@mui/material";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

import { MenuToggleLayout } from "../layouts/MenuToggLayout";

function MyApp({ Component, pageProps }) {
  return (
    <MenuToggleLayout>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Menu />
        <Component {...pageProps} />
      </Box>
    </MenuToggleLayout>
  );
}

export default MyApp;
