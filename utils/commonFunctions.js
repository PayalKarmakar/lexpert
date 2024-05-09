import dayjs from "dayjs";

export const createdDate = (value) => {
  const created_date = dayjs(value).format("YYYY-MM-DD hh:mm:ss");
  return created_date;
};
