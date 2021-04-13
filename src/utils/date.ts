import { format } from "date-fns";

export const formatDatePtBR = (date: Date) => {
  return format(date, "dd/MM/yyyy");
};
