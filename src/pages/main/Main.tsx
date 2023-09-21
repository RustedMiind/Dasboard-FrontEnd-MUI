import { Typography, Stack } from "@mui/material";
import IconSeeMoreCard from "../../components/icon-see-more-card/IconSeeMoreCard";
import * as colors from "@mui/material/colors";

// Icons
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect, useState } from "react";
import fitCardsToWidth from "../../functions/fitCardsToWidth";

function MainPage() {
  const [cardWidth, setCardWidth] = useState<number>(0);

  useEffect(() => {
    handleCardWidth();
    window.addEventListener("resize", handleCardWidth);
    return () => {
      window.removeEventListener("resize", handleCardWidth);
    };
  }, []);
  function handleCardWidth() {
    setCardWidth(fitCardsToWidth({ defaultWidth: 400 }).itemWidth);
  }
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
          width={cardWidth}
        />
        <IconSeeMoreCard
          iconColor={colors.blue[800]}
          icon={HowToRegIcon}
          title={"Staff present today"}
          value="34"
          redirect="/attendance"
          width={cardWidth}
        />
        <IconSeeMoreCard
          iconColor={colors.grey[900]}
          icon={AccountCircleIcon}
          title={"Account"}
          value="Ali Soliman"
          redirect="/user/account"
          width={cardWidth}
        />
        <IconSeeMoreCard
          iconColor={colors.purple[500]}
          icon={AssignmentIcon}
          title={"Assignments"}
          value="3"
          redirect="/assignments"
          width={cardWidth}
        />
      </Stack>
    </Stack>
  );
}

export default MainPage;
