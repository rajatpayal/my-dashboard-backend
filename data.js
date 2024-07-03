const rawData = `
2024-05-01  09:01 AM  06:19 PM  09:17  -  Present
2024-05-02  09:00 AM  07:13 PM  10:13  -  Present
2024-05-03  09:01 AM  06:16 PM  09:14  -  Present
2024-05-04  Not Checked In  -  00:00  -  Weekend
2024-05-05  Not Checked In  -  00:00  -  Weekend
2024-05-06  09:00 AM  06:27 PM  09:27  -  Present
2024-05-07  09:10 AM  06:22 PM  09:11  -  Present
2024-05-08  Not Checked In  -  00:00  -  Absent
2024-05-09  09:01 AM  06:18 PM  09:17  -  Present
2024-05-10  09:03 AM  06:23 PM  09:19  -  Present
2024-05-11  09:07 AM  Not Checked Out  00:00  -  Weekend
2024-05-12  Not Checked In  -  00:00  -  Weekend
2024-05-13  09:01 AM  06:04 PM  09:03  -  Present
2024-05-14  09:01 AM  06:05 PM  09:03  -  Present
2024-05-15  09:00 AM  06:16 PM  09:16  -  Present
2024-05-16  09:04 AM  06:25 PM  09:20  -  Present
2024-05-17  09:20 AM  06:25 PM  09:04  -  Present
2024-05-18  Not Checked In  -  00:00  -  Weekend
2024-05-19  Not Checked In  -  00:00  -  Weekend
2024-05-20  09:00 AM  06:01 PM  09:01  -  Present
2024-05-21  09:02 AM  06:12 PM  09:09  -  Present
2024-05-22  09:03 AM  06:06 PM  09:03  -  Present
2024-05-23  09:01 AM  06:09 PM  09:08  -  Present
2024-05-24  Not Checked In  -  00:00  -  Absent
2024-05-25  Not Checked In  -  00:00  -  Weekend
2024-05-26  Not Checked In  -  00:00  -  Weekend
2024-05-27  09:00 AM  06:43 PM  09:43  -  Present
2024-05-28  09:00 AM  06:37 PM  09:37  -  Present
2024-05-29  09:01 AM  06:31 PM  09:30  -  Present
2024-05-30  09:05 AM  06:05 PM  09:00  -  Present
2024-05-31  Not Checked In  -  00:00  -  Absent
2024-06-01  Not Checked In  -  00:00  -  Weekend
2024-06-02  Not Checked In  -  00:00  -  Weekend
2024-06-03  09:00 AM  06:02 PM  09:01  -  Present
2024-06-04  09:00 AM  06:36 PM  09:36  -  Present
2024-06-05  09:02 AM  06:00 PM  08:58  -  Present
2024-06-06  09:02 AM  06:24 PM  09:22  -  Present
2024-06-07  09:01 AM  06:40 PM  09:38  -  Present
2024-06-08  Not Checked In  -  00:00  -  Weekend
2024-06-09  Not Checked In  -  00:00  -  Weekend
2024-06-10  09:01 AM  06:12 PM  09:11  -  Present
2024-06-11  09:03 AM  06:12 PM  09:08  -  Present
2024-06-12  09:00 AM  06:14 PM  09:13  -  Present
2024-06-13  09:09 AM  06:19 PM  09:09  -  Present
2024-06-14  Not Checked In  -  00:00  -  Absent
2024-06-15  Not Checked In  -  00:00  -  Weekend
2024-06-16  Not Checked In  -  00:00  -  Weekend
2024-06-17  09:03 AM  07:10 PM  10:06  -  Present
2024-06-18  09:01 AM  06:06 PM  09:04  -  Present
2024-06-19  09:01 AM  06:06 PM  09:05  -  Present
2024-06-20  09:22 AM  06:41 PM  09:19  -  Present
2024-06-21  09:25 AM  06:35 PM  09:09  -  Present
2024-06-22  Not Checked In  -  00:00  -  Weekend
2024-06-23  Not Checked In  -  00:00  -  Weekend
2024-06-24  09:03 AM  06:34 PM  09:31  -  Present
2024-06-25  09:01 AM  06:09 PM  09:08  -  Present
2024-06-26  09:03 AM  06:04 PM  09:00  -  Present
2024-06-27  09:00 AM  06:21 PM  09:21  -  Present
2024-06-28  09:02 AM  06:49 PM  09:46  -  Present
2024-06-29  08:21 PM  08:21 PM  00:00  -  Weekend
2024-06-30  Not Checked In  -  00:00  -  Weekend
2024-07-01  09:54 AM  06:58 PM  09:03  -  Present
2024-07-02  09:01 AM  06:14 PM  09:12  -  Present
`;

// Splitting by lines
const lines = rawData.trim().split('\n');

// Function to parse each row correctly
const parseRow = row => {
  // Using regex to split by one or more spaces
  return row.trim().split(/\s{2,}/);
};

// Array to store arrays of data
const dataArray = lines.map(parseRow);

// Logging the result in the desired format
dataArray.forEach(arr => {
  console.log(`[${arr.map(item => `'${item}'`).join(', ')}],`);
});