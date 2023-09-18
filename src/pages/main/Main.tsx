import { Typography, Stack } from "@mui/material";
import IconSeeMoreCard from "../../components/icon-see-more-card/IconSeeMoreCard";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import * as colors from "@mui/material/colors";

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
          redirect="/employee"
        />
        <IconSeeMoreCard
          iconColor={colors.blue[800]}
          icon={PersonSearchIcon}
          title={"Staff present today"}
          value="34"
          redirect="/attendance"
        />
        <IconSeeMoreCard
          iconColor={colors.pink[300]}
          icon={RecentActorsIcon}
          title={"Employees"}
          value="51"
          redirect="/employee"
        />
        <IconSeeMoreCard
          iconColor={colors.blue[800]}
          icon={PersonSearchIcon}
          title={"Staff present today"}
          value="34"
          redirect="/attendance"
        />
        <IconSeeMoreCard
          iconColor={colors.pink[300]}
          icon={RecentActorsIcon}
          title={"Employees"}
          value="51"
          redirect="/employee"
        />
        <IconSeeMoreCard
          iconColor={colors.blue[800]}
          icon={PersonSearchIcon}
          title={"Staff present today"}
          value="34"
          redirect="/attendance"
        />
        <IconSeeMoreCard
          iconColor={colors.pink[300]}
          icon={RecentActorsIcon}
          title={"Employees"}
          value="51"
          redirect="/employee"
        />
        <IconSeeMoreCard
          iconColor={colors.blue[800]}
          icon={PersonSearchIcon}
          title={"Staff present today"}
          value="34"
          redirect="/attendance"
        />
      </Stack>
    </Stack>
  );
}

export default MainPage;
