import PersonCard from "../../../components/person-card/PersonCard";

function EmployeesPlaceholder({ cardWidth }: PropsType) {
  return (
    <>
      <PersonCard width={cardWidth} user="placeholder" />
      <PersonCard width={cardWidth} user="placeholder" />
      <PersonCard width={cardWidth} user="placeholder" />
      <PersonCard width={cardWidth} user="placeholder" />
      <PersonCard width={cardWidth} user="placeholder" />
    </>
  );
}

type PropsType = {
  cardWidth: number;
};

export default EmployeesPlaceholder;
