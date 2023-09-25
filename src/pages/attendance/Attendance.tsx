import {
  Box,
  Stack,
  Tab,
  Tabs,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { useReducer } from "react";
import { DataType, data } from "./fakeData";
import { sortByDate } from "../../functions/sortByDate";
import { parseDate, parseTimeAmPm } from "../../functions/parseDate";

const sortedData = sortByDate<DataType>(
  data.filter((attend) => !!attend.attend),
  "attend"
);

interface FilterType {
  attndeesOnly: AttendeesStatesType;
  period: PeriodType;
  perPage: number;
  page: number;
  search: string;
}
type PeriodType = "day" | "week" | "month" | "year";
type AttendeesStatesType = "strict" | "all";

type ActionType =
  | {
      type: "atendees";
      payload: AttendeesStatesType;
    }
  | {
      type: "period";
      payload: PeriodType;
    }
  | {
      type: "perPage" | "page";
      payload: number;
    }
  | {
      type: "search";
      payload: string;
    };

const initialFilter: FilterType = {
  attndeesOnly: "strict",
  period: "day",
  perPage: 10,
  page: 1,
  search: "",
};
function reducer(state: FilterType, action: ActionType): FilterType {
  switch (action.type) {
    case "atendees":
      return { ...state, attndeesOnly: action.payload };

    case "page":
      return { ...state, page: action.payload };

    case "perPage":
      return { ...state, perPage: action.payload };

    case "period":
      return { ...state, period: action.payload };

    case "search":
      return { ...state, search: action.payload };

    default:
      return state;
  }
}

function AttendancePage() {
  const [state, dispatch] = useReducer(reducer, initialFilter);
  const attendeesData = state.attndeesOnly === "all" ? data : sortedData;
  const handleChange = (
    event: React.SyntheticEvent,
    newValue: AttendeesStatesType
  ) => {
    console.log(newValue);
    dispatch({ type: "atendees", payload: newValue });
  };

  return (
    <Stack>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={state.attndeesOnly} onChange={handleChange}>
          <Tab value={"strict"} label="Attendees only" />
          <Tab value={"all"} label="All employees" />
        </Tabs>
        <Paper sx={{ p: 3 }}>
          <TableContainer sx={{ maxHeight: "400px", width: "100%" }}>
            <Table stickyHeader sx={{ maxWidth: "100%" }}>
              <TableHead>
                <TableRow sx={{ "*": { fontWeight: 600 } }}>
                  <TableCell>id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Clock In</TableCell>
                  <TableCell>Clock Out</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {attendeesData.map((shift) => {
                  const clockIn = shift.attend
                      ? new Date(Date.parse(shift.attend))
                      : null,
                    clockOut = shift.attend
                      ? new Date(
                          Date.parse(shift.attend) +
                            Math.floor(
                              Math.random() * (10000 - 600 + 1) + 600
                            ) *
                              // 1000 *
                              60 *
                              60
                        )
                      : null;
                  // console.log(clockIn, clockOut);

                  return (
                    <TableRow
                      key={shift.id}
                      {...(!shift.attend && {
                        sx: { "*": { color: "error.light" } },
                      })}
                    >
                      <TableCell>{shift.id}</TableCell>
                      <TableCell>{shift.name}</TableCell>
                      <TableCell>
                        {clockIn ? parseDate(clockIn.toISOString()) : "-"}
                      </TableCell>
                      <TableCell>
                        {clockIn ? parseTimeAmPm(clockIn.toISOString()) : "-"}
                      </TableCell>
                      <TableCell>
                        {clockOut ? parseTimeAmPm(clockOut.toISOString()) : "-"}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Stack>
  );
}
export default AttendancePage;
