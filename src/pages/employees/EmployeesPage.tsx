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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Zn1w8qxgoeT9NDxfq5R_ilpDfDw3qNn_87FF7bVEdWKipRNYfwVRyd3C5OuBeuabY4k&usqp=CAU",
  },
  {
    id: 2,
    name: "Ali Soliman",
    title: "Front End Developer",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quasi tempora dolor quam veniam tempore minus, aspernatur inventore aut ab",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Zn1w8qxgoeT9NDxfq5R_ilpDfDw3qNn_87FF7bVEdWKipRNYfwVRyd3C5OuBeuabY4k&usqp=CAU",
  },
  {
    id: 3,
    name: "Ali Soliman",
    title: "Front End Developer",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quasi tempora dolor quam veniam tempore minus, aspernatur inventore aut ab",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Zn1w8qxgoeT9NDxfq5R_ilpDfDw3qNn_87FF7bVEdWKipRNYfwVRyd3C5OuBeuabY4k&usqp=CAU",
  },
  {
    id: 4,
    name: "Ali Soliman",
    title: "Front End Developer",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quasi tempora dolor quam veniam tempore minus, aspernatur inventore aut ab",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Zn1w8qxgoeT9NDxfq5R_ilpDfDw3qNn_87FF7bVEdWKipRNYfwVRyd3C5OuBeuabY4k&usqp=CAU",
  },
  {
    id: 5,
    name: "Ali Soliman",
    title: "Front End Developer",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quasi tempora dolor quam veniam tempore minus, aspernatur inventore aut ab",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Zn1w8qxgoeT9NDxfq5R_ilpDfDw3qNn_87FF7bVEdWKipRNYfwVRyd3C5OuBeuabY4k&usqp=CAU",
  },
  {
    id: 6,
    name: "Ali Soliman",
    title: "Front End Developer",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quasi tempora dolor quam veniam tempore minus, aspernatur inventore aut ab",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Zn1w8qxgoeT9NDxfq5R_ilpDfDw3qNn_87FF7bVEdWKipRNYfwVRyd3C5OuBeuabY4k&usqp=CAU",
  },
];

export default EmployeesPage;
