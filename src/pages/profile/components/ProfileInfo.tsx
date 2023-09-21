import { Stack, Typography, Rating } from "@mui/material";

function ProfileInfo() {
  return (
    <Stack sx={{ flexGrow: 1, px: 3 }}>
      <Typography color={"primary.main"} variant="h5">
        Ali Soliman
      </Typography>
      <Typography color={"primary.main"}>Front End Web Developer</Typography>
      <Stack direction="row" spacing={2} alignItems={"center"}>
        <Rating
          size="large"
          sx={{ color: "secondary.light" }}
          precision={0.5}
          readOnly
          value={3.5}
        />
        <Typography variant="h6">3.5</Typography>
      </Stack>
    </Stack>
  );
}

export default ProfileInfo;
