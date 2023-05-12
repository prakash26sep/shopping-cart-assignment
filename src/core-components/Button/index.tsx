import Button from "@mui/material/Button";

function ButtonNormal({ text, ...props }: any) {
  return (
    <Button
      className="button"
      sx={{ borderRadius: 0, textTransform: "unset" }}
      {...props}
    >
      {text}
    </Button>
  );
}

export default ButtonNormal;
