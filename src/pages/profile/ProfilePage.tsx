import { Stack, Box } from "@mui/material";
import ProfileImage from "./components/ProfileImage";
import ProfileInfo from "./components/ProfileInfo";

function ProfilePage() {
  return (
    <Stack sx={{}}>
      <Box sx={{ display: "flex" }}>
        <ProfileImage image={image} />
        <ProfileInfo />
      </Box>
    </Stack>
  );
}

const image =
  "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/332888475_598558541713884_9209692551273224447_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=-vdcL3OTT0oAX8APnHv&_nc_ht=scontent.fcai20-1.fna&oh=00_AfAnHnSciM7c7jmLjitQGNkjyrQ0DXsdQ_kRcot7wuHWmQ&oe=650FE6BF";

export default ProfilePage;
