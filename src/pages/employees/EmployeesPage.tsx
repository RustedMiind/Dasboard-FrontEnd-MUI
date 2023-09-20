import { Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import PersonCard, {
  CardUserType,
} from "../../components/person-card/PersonCard";
import EmployeesPlaceholder from "./components/EmployeesPlaceholder";

function EmployeesPage() {
  const [users, setUsers] = useState<CardUserType[] | null>();
  const [cardWidth, setCardWidth] = useState(getCardWidth());
  const isUsersLoaded = !!users;
  useEffect(() => {
    const mainContainer = document.getElementById("main");
    handleCardWidth();
    mainContainer?.addEventListener("resize", handleCardWidth);
    setTimeout(() => setUsers(data), 1000);
    return () => {
      mainContainer?.removeEventListener("resize", handleCardWidth);
    };
  });
  function getCardWidth(): number {
    const CARD_DEFAULT_WIDTH = 345;
    const mainContainer = document.getElementById("main");
    let fullWidth = mainContainer?.clientWidth;
    fullWidth = typeof fullWidth === "number" ? fullWidth : CARD_DEFAULT_WIDTH;
    const cardsPerRow = Math.floor(fullWidth / CARD_DEFAULT_WIDTH);
    const cardWidth = Math.floor(
      (fullWidth - cardsPerRow * 16 + 14) / cardsPerRow
    );
    return cardWidth;
  }
  function handleCardWidth() {
    setCardWidth(getCardWidth());
  }
  const cardWidth2 = getCardWidth();
  return (
    <Stack>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        // justifyContent={"center"}
        gap={2}
      >
        {isUsersLoaded ? (
          users.map((user) => (
            <PersonCard key={user.id} user={user} width={cardWidth} />
          ))
        ) : (
          <EmployeesPlaceholder cardWidth={cardWidth} />
        )}
      </Stack>
    </Stack>
  );
}

const data: CardUserType[] = [
  {
    id: 1,
    name: "Ali Soliman",
    title: "Front End Develoepr",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quasi tempora dolor quam veniam tempore minus, aspernatur inventore aut ab",
    image:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/332888475_598558541713884_9209692551273224447_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=-vdcL3OTT0oAX8APnHv&_nc_ht=scontent.fcai20-1.fna&oh=00_AfAnHnSciM7c7jmLjitQGNkjyrQ0DXsdQ_kRcot7wuHWmQ&oe=650FE6BF",
  },
  {
    id: 2,
    name: "Ali Soliman",
    title: "Front End Develoepr",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quasi tempora dolor quam veniam tempore minus, aspernatur inventore aut ab",
    image:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/332888475_598558541713884_9209692551273224447_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=-vdcL3OTT0oAX8APnHv&_nc_ht=scontent.fcai20-1.fna&oh=00_AfAnHnSciM7c7jmLjitQGNkjyrQ0DXsdQ_kRcot7wuHWmQ&oe=650FE6BF",
  },
  {
    id: 3,
    name: "Ali Soliman",
    title: "Front End Develoepr",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quasi tempora dolor quam veniam tempore minus, aspernatur inventore aut ab",
    image:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/332888475_598558541713884_9209692551273224447_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=-vdcL3OTT0oAX8APnHv&_nc_ht=scontent.fcai20-1.fna&oh=00_AfAnHnSciM7c7jmLjitQGNkjyrQ0DXsdQ_kRcot7wuHWmQ&oe=650FE6BF",
  },
  {
    id: 4,
    name: "Ali Soliman",
    title: "Front End Develoepr",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quasi tempora dolor quam veniam tempore minus, aspernatur inventore aut ab",
    image:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/332888475_598558541713884_9209692551273224447_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=-vdcL3OTT0oAX8APnHv&_nc_ht=scontent.fcai20-1.fna&oh=00_AfAnHnSciM7c7jmLjitQGNkjyrQ0DXsdQ_kRcot7wuHWmQ&oe=650FE6BF",
  },
  {
    id: 5,
    name: "Ali Soliman",
    title: "Front End Develoepr",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quasi tempora dolor quam veniam tempore minus, aspernatur inventore aut ab",
    image:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/332888475_598558541713884_9209692551273224447_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=-vdcL3OTT0oAX8APnHv&_nc_ht=scontent.fcai20-1.fna&oh=00_AfAnHnSciM7c7jmLjitQGNkjyrQ0DXsdQ_kRcot7wuHWmQ&oe=650FE6BF",
  },
  {
    id: 6,
    name: "Ali Soliman",
    title: "Front End Develoepr",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quasi tempora dolor quam veniam tempore minus, aspernatur inventore aut ab",
    image:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/332888475_598558541713884_9209692551273224447_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=-vdcL3OTT0oAX8APnHv&_nc_ht=scontent.fcai20-1.fna&oh=00_AfAnHnSciM7c7jmLjitQGNkjyrQ0DXsdQ_kRcot7wuHWmQ&oe=650FE6BF",
  },
];

export default EmployeesPage;
