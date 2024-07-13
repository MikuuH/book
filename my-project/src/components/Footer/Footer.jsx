import { AppBar, Toolbar } from "@mui/material";

export default function Footer() {
  return (
      <footer className="fixed bottom-0 inset-x-0 bg-gray-100">
        <AppBar position="static">
          <Toolbar className="flex items-center justify-center">
          </Toolbar>
        </AppBar>
      </footer>
  );
}




