import { useSelector } from "react-redux";
import { selectAllContacts } from "../redux/contacts/contacts-selectors";

export const useChartData = () => {
  const contacts = useSelector(selectAllContacts);
  const numbers = contacts.map((contact) => contact.number);
  let lifecell = 0;
  let kyivstar = 0;
  let vodafone = 0;
  for (let number of numbers) {
    const code = number.slice(0, 3);
    if (code === "093" || code === "073" || code === "063") {
      lifecell += 1;
    } else if (
      code === "050" ||
      code === "099" ||
      code === "095" ||
      code === "066"
    ) {
      vodafone += 1;
    } else if (
      code === "098" ||
      code === "067" ||
      code === "068" ||
      code === "096"
    ) {
      kyivstar += 1;
    }
  }
  return [
    {
      id: "lifecell",
      label: "lifecell",
      value: lifecell,
      color: "hsl(64, 70%, 50%)",
    },
    {
      id: "vodafone",
      label: "vodafone",
      value: vodafone,
      color: "hsl(50, 100%, 50%)",
    },
    {
      id: "kyivstar",
      label: "kyivstar",
      value: kyivstar,
      color: "hsl(254, 70%, 50%)",
    },
  ];
};
