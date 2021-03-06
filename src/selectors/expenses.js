import moment from "moment";

// Get Visible Expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const EndDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      const TextMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && EndDateMatch && TextMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
