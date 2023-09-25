import { Stack, Box } from "@mui/material";
import ProfileImage from "./components/ProfileImage";
import ProfileInfo from "./components/ProfileInfo";
import ProfileTable from "./components/ProfileTable";

function ProfilePage() {
  return (
    <Stack spacing={2} sx={{ width: "99%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "start" },
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <ProfileImage image={image} />
        <ProfileInfo />
      </Box>
      <ProfileTable />
    </Stack>
  );
}

const image =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Zn1w8qxgoeT9NDxfq5R_ilpDfDw3qNn_87FF7bVEdWKipRNYfwVRyd3C5OuBeuabY4k&usqp=CAU";

export default ProfilePage;
