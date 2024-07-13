import { AppBar, Toolbar } from "@mui/material";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 inset-x-0 bg-gray-100">
      <AppBar position="static">
        <Toolbar className="flex items-center justify-center">
          {/* Здесь можно добавить контент футера, если нужно */}
        </Toolbar>
      </AppBar>
    </footer>
  );
};

export default Footer;
