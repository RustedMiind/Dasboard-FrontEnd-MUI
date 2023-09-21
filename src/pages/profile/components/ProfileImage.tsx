import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
function ProfileImage(props: PropsType) {
  return (
    <Stack>
      <Avatar
        {...(props.image && { src: props.image })}
        variant="rounded"
        sx={{ width: 225, height: 225 }}
      >
        Upload Image
      </Avatar>
    </Stack>
  );
}

type PropsType = {
  image?: string;
};

export default ProfileImage;
