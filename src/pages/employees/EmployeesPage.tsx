import { Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import fitCardsToWidth from "../../functions/fitCardsToWidth";
import PersonCard, {
  CardUserType,
} from "../../components/person-card/PersonCard";
import EmployeesPlaceholder from "./components/EmployeesPlaceholder";

function EmployeesPage() {
  const [users, setUsers] = useState<CardUserType[] | null>();
  const itemWidth = () => fitCardsToWidth().itemWidth;
  const [cardWidth, setCardWidth] = useState(0);
  const isUsersLoaded = !!users;
  useEffect(() => {
    handleCardWidth();
    window.addEventListener("resize", handleCardWidth);
    setTimeout(() => setUsers(data), 500);
    return () => {
      window.removeEventListener("resize", handleCardWidth);
    };
  }, []);
  function handleCardWidth() {
    setCardWidth(fitCardsToWidth().itemWidth);
  }
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
    title: "Front End Developer",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quasi tempora dolor quam veniam tempore minus, aspernatur inventore aut ab",
    image:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/332888475_598558541713884_9209692551273224447_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=-vdcL3OTT0oAX8APnHv&_nc_ht=scontent.fcai20-1.fna&oh=00_AfAnHnSciM7c7jmLjitQGNkjyrQ0DXsdQ_kRcot7wuHWmQ&oe=650FE6BF",
  },
  {
    id: 2,
    name: "Ali Soliman",
    title: "Front End Developer",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quasi tempora dolor quam veniam tempore minus, aspernatur inventore aut ab",
    image:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/332888475_598558541713884_9209692551273224447_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=-vdcL3OTT0oAX8APnHv&_nc_ht=scontent.fcai20-1.fna&oh=00_AfAnHnSciM7c7jmLjitQGNkjyrQ0DXsdQ_kRcot7wuHWmQ&oe=650FE6BF",
  },
  {
    id: 3,
    name: "Ali Soliman",
    title: "Front End Developer",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quasi tempora dolor quam veniam tempore minus, aspernatur inventore aut ab",
    image:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/332888475_598558541713884_9209692551273224447_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=-vdcL3OTT0oAX8APnHv&_nc_ht=scontent.fcai20-1.fna&oh=00_AfAnHnSciM7c7jmLjitQGNkjyrQ0DXsdQ_kRcot7wuHWmQ&oe=650FE6BF",
  },
  {
    id: 4,
    name: "Ali Soliman",
    title: "Front End Developer",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quasi tempora dolor quam veniam tempore minus, aspernatur inventore aut ab",
    image:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/332888475_598558541713884_9209692551273224447_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=-vdcL3OTT0oAX8APnHv&_nc_ht=scontent.fcai20-1.fna&oh=00_AfAnHnSciM7c7jmLjitQGNkjyrQ0DXsdQ_kRcot7wuHWmQ&oe=650FE6BF",
  },
  {
    id: 5,
    name: "Ali Soliman",
    title: "Front End Developer",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quasi tempora dolor quam veniam tempore minus, aspernatur inventore aut ab",
    image:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/332888475_598558541713884_9209692551273224447_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=-vdcL3OTT0oAX8APnHv&_nc_ht=scontent.fcai20-1.fna&oh=00_AfAnHnSciM7c7jmLjitQGNkjyrQ0DXsdQ_kRcot7wuHWmQ&oe=650FE6BF",
  },
  {
    id: 6,
    name: "Ali Soliman",
    title: "Front End Developer",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quasi tempora dolor quam veniam tempore minus, aspernatur inventore aut ab",
    image:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/332888475_598558541713884_9209692551273224447_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=-vdcL3OTT0oAX8APnHv&_nc_ht=scontent.fcai20-1.fna&oh=00_AfAnHnSciM7c7jmLjitQGNkjyrQ0DXsdQ_kRcot7wuHWmQ&oe=650FE6BF",
  },
];

export default EmployeesPage;
