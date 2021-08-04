import axios from "axios";

const path = "https://badabusinesspvtltd.com/skima/";

export const getCookie = async (email, password) => {
  const response = await axios({
    method: "post",
    url: `${path}cookie.php`,
    headers: { "Content-Type": "text/plain" },
    data: {
      username: email,
      password: password,
    },
  });
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  if (response.data.hasOwnProperty("error")) return response.data.error;
  return response.data.cookie;
};

export const getContent = async (cookie) => {
  const response = await axios({
    method: "post",
    url: `${path}attendance.php`,
    headers: { "Content-Type": "text/plain" },
    data: {
      Cookie: cookie,
    },
  });
  if (response.data.error === "cookie expired") {
    const response = axios({
      method: "post",
      url: `${path}cookie.php`,
      headers: { "Content-Type": "text/plain" },
      data: {
        username: localStorage.getItem("email"),
        password: localStorage.getItem("password"),
      },
    }).then(async (res) => {
      const responsing = await axios({
        method: "post",
        url: `${path}attendance.php`,
        headers: { "Content-Type": "text/plain" },
        data: {
          Cookie: res.data.cookie,
        },
      });
      localStorage.setItem("cookie", res.data.cookie);
      window.location.reload(false);
    });
  } else {
    localStorage.setItem(
      "regno",
      response.data[0]["Academic Status"][0]["Registration Number"]
    );
    localStorage.setItem(
      "degree",
      response.data[0]["Academic Status"][2]["Program"]
    );
    localStorage.setItem(
      "dept",
      response.data[0]["Academic Status"][3]["Department"]
    );
    return response.data;
  }
};

export const getGrades = async (cookie) => {
  const response = await axios({
    method: "post",
    url: `${path}grades.php`,
    headers: { "Content-Type": "text/plain" },
    data: {
      Cookie: cookie,
    },
  });
  return response.data;
};

export const getKeys = async (cookie) => {
  const response = await axios({
    method: "post",
    url: `${path}keys.php`,
    headers: { "Content-Type": "text/plain" },
    data: {
      Cookie: cookie,
    },
  }).then((res) => {
    console.log(res.data);
    localStorage.setItem("isGrades", res.data.Keys.isGrades);
    localStorage.setItem("day", res.data.Keys.DayOrder);
    localStorage.setItem("key", res.data.Keys.TimeTableKey);
    localStorage.setItem("scheduleKey", res.data.Keys.ScheduleKey);
    localStorage.setItem(
      "academicPlannerKey",
      res.data.Keys.AcademicPlannerKey
    );
    getTimetable(
      localStorage.getItem("cookie"),
      res.data.Keys.AcademicPlannerKey
    );
  });
};

export const getTimetable = async (cookie, timetabableKey) => {
  const response = await axios({
    method: "post",
    url: `${path}timetable.php`,
    headers: { "Content-Type": "text/plain" },
    data: {
      Cookie: cookie,
      TimeTableKey: "My_Time_Table_2020_21_22",
    },
  });
  localStorage.setItem(
    "section",
    response.data[0]["Student_Details"][9]["Department:"]
      .split("-(")[1]
      .substr(0, 2)
  );
  localStorage.setItem(
    "batch",
    response.data[0]["Student_Details"][2]["Batch:"]
  );
  console.log("response",response)

  localStorage.setItem("attendance", JSON.stringify(response.data));
  return response.data;
  // localStorage.setItem('batch',response.data[0].Student_Details[2]['Batch:'])
};

export const getSchedule = async (cookie, scheduleKey) => {
  const response = await axios({
    method: "post",
    url: `${path}schedule.php`,
    headers: { "Content-Type": "text/plain" },
    data: {
      Cookie: cookie,
      ScheduleKey: localStorage.getItem("scheduleKey"),
      Batch:localStorage.getItem("batch")
    },
  });
  return response.data;
};

export const getPlanner = async (cookie) => {
  const academicPlannerKey = localStorage.getItem("academicPlannerKey");
  const response = await axios({
    method: "post",
    url: `${path}schedule.php`,
    headers: { "Content-Type": "text/plain" },
    data: {
      Cookie: cookie,
      ScheduleKey: `${academicPlannerKey}`,
    },
  });
  return response.data;
};

export const getRanks = async (regno, section, degree, stream, rating) => {
  const academicPlannerKey = localStorage.getItem("academicPlannerKey");
  const response = await axios({
    method: "post",
    url: `${path}rank.php`,
    headers: { "Content-Type": "text/plain" },
    data: {
      regno,
      section,
      degree,
      stream,
      rating,
      cookie: localStorage.getItem("cookie"),
    },
  });
  return response.data;
};

export const getDaywisePlanner = async (cookie, key) => {
  const academicPlannerKey = localStorage.getItem("academicPlannerKey");
  const response = await axios({
    method: "post",
    url: `${path}planner.php`,
    headers: { "Content-Type": "text/plain" },
    data: {
      Cookie: cookie,
      AcademicPlannerKey: key,
    },
  });
  return response.data;
};
