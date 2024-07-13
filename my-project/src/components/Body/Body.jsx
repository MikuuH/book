import { Box } from "@mui/material";
import PropTypes from 'prop-types';
import { useTheme } from "@mui/material";

const BoxSystemProps = ({ children }) => {
  const theme = useTheme();

  return (
      <Box
        sx={{
          position: "absolute",
          top: "50px",
          bottom: "50px",
          left: 0,
          right: 0,
          backgroundColor: theme.palette.background.default, // Используем цвет фона из темы
          display: "flex",
          flexDirection: "column",
          height: 'calc(100vh - 100px)',
          overflow: 'auto',
        }}
      >
        {children}
      </Box>
  );
};

BoxSystemProps.propTypes = {
  children: PropTypes.node,
};

export default function ThemeBoxSysrem({ children }) {
    return (
      <>
        <BoxSystemProps>{children}</BoxSystemProps>
      </>
    );
}

ThemeBoxSysrem.propTypes = {
  children: PropTypes.node,
};
