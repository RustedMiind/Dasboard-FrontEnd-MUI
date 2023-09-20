import { Typography, Stack } from "@mui/material";
import IconSeeMoreCard from "../../components/icon-see-more-card/IconSeeMoreCard";
import * as colors from "@mui/material/colors";

// Icons
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function MainPage() {
  return (
    <Stack>
      <Typography variant="h5" gutterBottom>
        Home Page
      </Typography>
      <Stack direction={"row"} flexWrap={"wrap"} gap={2}>
        <IconSeeMoreCard
          iconColor={colors.pink[300]}
          icon={RecentActorsIcon}
          title={"Employees"}
          value="51"
          redirect="/employees"
        />
        <IconSeeMoreCard
          iconColor={colors.blue[800]}
          icon={HowToRegIcon}
          title={"Staff present today"}
          value="34"
          redirect="/attendance"
        />
        <IconSeeMoreCard
          iconColor={colors.grey[900]}
          icon={AccountCircleIcon}
          title={"Account"}
          value="Ali Soliman"
          redirect="/user/account"
        />
        <IconSeeMoreCard
          iconColor={colors.purple[500]}
          icon={AssignmentIcon}
          title={"Assignments"}
          value="3"
          redirect="/assignments"
        />
      </Stack>
    </Stack>
  );
}

export default MainPage;
