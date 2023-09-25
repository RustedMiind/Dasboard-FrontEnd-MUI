import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Stack,
  Typography,
} from "@mui/material";
import {
  parseDate,
  parseTimeAmPm,
  deffInHours,
} from "../../../functions/parseDate";
import { sortByDate } from "../../../functions/sortByDate";

function ProfileTable() {
  const sortedAttendance = sortByDate<AttendanceType>(attendance, "clockIn");

  return (
    <Stack display={"block"} sx={{ OverflowX: "scroll" }}>
      <Typography variant="h5" gutterBottom>
        Attendance
      </Typography>
      <Paper sx={{ p: 2, width: { xs: "100%", lg: "1200px" } }}>
        <TableContainer sx={{ maxHeight: "400px", width: "100%" }}>
          <Table stickyHeader sx={{ maxWidth: "100%" }}>
            <TableHead>
              <TableRow sx={{ "*": { fontWeight: 600 } }}>
                <TableCell>Date</TableCell>
                <TableCell>Check In</TableCell>
                <TableCell>Check Out</TableCell>
                <TableCell>Work Hours</TableCell>
                <TableCell>Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedAttendance.map((shift) => {
                const clockIn = new Date(Date.parse(shift.clockIn)),
                  clockOut = new Date(
                    Date.parse(shift.clockIn) +
                      Math.floor(Math.random() * (10000 - 600 + 1) + 600) *
                        // 1000 *
                        60 *
                        60
                  ),
                  deff = deffInHours(clockIn, clockOut);
                // console.log(clockIn, clockOut);

                return (
                  <TableRow key={shift._id}>
                    <TableCell>{parseDate(clockIn.toISOString())}</TableCell>
                    <TableCell>
                      {parseTimeAmPm(clockIn.toISOString())}
                    </TableCell>
                    <TableCell>
                      {parseTimeAmPm(clockOut.toISOString())}
                    </TableCell>
                    <TableCell>{deff}</TableCell>
                    <TableCell>{shift.isRemote ? "Remote" : "Site"}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Stack>
  );
}
type AttendanceType = {
  _id: string;
  checked: boolean;
  clockIn: string;
  clockOut: string;
  isRemote: boolean;
};
const attendance: AttendanceType[] = [
  {
    _id: "650cbbe48432ec600b34c1eb",
    checked: true,
    clockIn: "2022-06-29T12:29:10-02:00",
    clockOut: "2016-08-10T12:04:55-02:00",
    isRemote: false,
  },
  {
    _id: "650cbbe45683650c354c6107",
    checked: false,
    clockIn: "2015-02-17T06:18:12-02:00",
    clockOut: "2014-05-07T01:12:03-02:00",
    isRemote: false,
  },
  {
    _id: "650cbbe4a2c4cb35eb4175ec",
    checked: true,
    clockIn: "2018-12-30T02:04:47-02:00",
    clockOut: "2022-12-09T03:02:20-02:00",
    isRemote: false,
  },
  {
    _id: "650cbbe410370d2bd85f1e8e",
    checked: true,
    clockIn: "2015-03-23T02:13:38-02:00",
    clockOut: "2014-05-18T04:31:37-03:00",
    isRemote: true,
  },
  {
    _id: "650cbbe4364608cdd576cc19",
    checked: true,
    clockIn: "2020-01-08T02:13:57-02:00",
    clockOut: "2020-08-27T07:11:20-02:00",
    isRemote: false,
  },
  {
    _id: "650cbbe41c1796e92a41ab79",
    checked: true,
    clockIn: "2020-12-15T03:13:11-02:00",
    clockOut: "2021-03-03T01:23:10-02:00",
    isRemote: true,
  },
  {
    _id: "650cbbe41e735fb9594bc48c",
    checked: false,
    clockIn: "2022-01-03T03:16:11-02:00",
    clockOut: "2015-06-14T07:50:28-02:00",
    isRemote: true,
  },
  {
    _id: "650cbbe45dfc4e60ebaa53d7",
    checked: false,
    clockIn: "2014-05-03T06:31:04-02:00",
    clockOut: "2021-04-03T09:46:38-02:00",
    isRemote: false,
  },
  {
    _id: "650cbbe44f047d6420c61c86",
    checked: false,
    clockIn: "2015-08-07T01:03:30-02:00",
    clockOut: "2021-03-30T11:17:11-02:00",
    isRemote: true,
  },
  {
    _id: "650cbbe4f201b6be5b3d3f7f",
    checked: false,
    clockIn: "2022-11-24T06:32:47-02:00",
    clockOut: "2016-11-06T09:38:21-02:00",
    isRemote: true,
  },
  {
    _id: "650cbbe4e14df2fb7ea88851",
    checked: true,
    clockIn: "2018-07-26T04:22:28-02:00",
    clockOut: "2016-03-29T09:05:01-02:00",
    isRemote: true,
  },
  {
    _id: "650cbbe46740495a5b5b156e",
    checked: false,
    clockIn: "2021-06-18T03:16:01-02:00",
    clockOut: "2015-03-08T03:37:18-02:00",
    isRemote: true,
  },
  {
    _id: "650cbbe435d48e068ae3997e",
    checked: true,
    clockIn: "2018-07-23T11:13:05-02:00",
    clockOut: "2020-06-29T08:23:37-02:00",
    isRemote: false,
  },
  {
    _id: "650cbbe46fe543710f63410f",
    checked: true,
    clockIn: "2023-03-25T02:20:59-02:00",
    clockOut: "2018-08-25T02:47:40-02:00",
    isRemote: true,
  },
  {
    _id: "650cbbe408dfbc00a2f4db20",
    checked: false,
    clockIn: "2016-02-13T03:21:27-02:00",
    clockOut: "2020-10-06T04:30:34-02:00",
    isRemote: false,
  },
  {
    _id: "650cbbe48ae59c5c436ed1bb",
    checked: true,
    clockIn: "2022-11-21T10:17:22-02:00",
    clockOut: "2018-08-17T02:28:32-02:00",
    isRemote: true,
  },
  {
    _id: "650cbbe4b25c6b508aa6f219",
    checked: true,
    clockIn: "2014-11-13T06:29:53-02:00",
    clockOut: "2017-06-03T05:13:55-02:00",
    isRemote: false,
  },
  {
    _id: "650cbbe4d302f1613bce104f",
    checked: false,
    clockIn: "2022-10-19T07:03:29-02:00",
    clockOut: "2021-07-15T07:57:40-02:00",
    isRemote: true,
  },
  {
    _id: "650cbbe4891807aad71bbd55",
    checked: false,
    clockIn: "2023-07-02T01:02:36-03:00",
    clockOut: "2023-03-11T05:33:07-02:00",
    isRemote: true,
  },
  {
    _id: "650cbbe4ed31e85ebed868db",
    checked: false,
    clockIn: "2016-06-14T02:42:18-02:00",
    clockOut: "2016-09-04T07:04:46-02:00",
    isRemote: false,
  },
  {
    _id: "650cbbe40f0de20ffd543a6b",
    checked: false,
    clockIn: "2022-11-15T06:25:52-02:00",
    clockOut: "2018-03-12T01:50:41-02:00",
    isRemote: false,
  },
  {
    _id: "650cbbe4484806aef5e2b8e6",
    checked: false,
    clockIn: "2014-02-04T03:42:03-02:00",
    clockOut: "2022-08-09T02:38:50-02:00",
    isRemote: false,
  },
  {
    _id: "650cbbe43f9cebec14d62453",
    checked: false,
    clockIn: "2017-03-21T09:56:40-02:00",
    clockOut: "2014-02-05T01:41:12-02:00",
    isRemote: false,
  },
  {
    _id: "650cbbe4ef813168c36844d8",
    checked: true,
    clockIn: "2020-12-06T11:44:31-02:00",
    clockOut: "2019-07-21T01:14:02-02:00",
    isRemote: true,
  },
];

export default ProfileTable;
