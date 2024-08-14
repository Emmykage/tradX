import { useState } from "react";
import EconomCalenFilters from "./economCalenFilters/EconomCalenFilters";
import EconomCalenInfo from "./economCalenInfo/EconomCalenInfo";
import "./EconomicCalendar.scss";
import { EconomicCalendarFilters } from "./types";

const EconomicCalendarCom = () => {
  const [filters, setFilters] = useState<EconomicCalendarFilters>({
        importance: "Filter importance",
        country: "Select Country",
        date: "Select Date",
  });

  return (
    <div className="economicCalendarContainer">
      <h2>Economic Calendar</h2>
      <EconomCalenFilters setFilters={setFilters} filters={filters} />
      <EconomCalenInfo />
    </div>
  );
};

export default EconomicCalendarCom;
