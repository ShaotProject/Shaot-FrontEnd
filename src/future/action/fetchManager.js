import {
  loading,
  getCompanyById,
  сompanySchedule,
  weekConfigurate,
  weekNames,
} from "../redux/managerSlice";
import { getMessage } from "../redux/messageSlice";

const baseURL = "https://shaotcloud.fly.dev/shaot";

//Get Company By Id
export const getCompanyByIdFetch = (id) => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}/company/${id}`, { method: "GET", mode: "cors" })
    .then((res) => res.json())
    .then((data) => {
      if (data.errorCode) {
        dispatch(getMessage(data.message));
        return;
      }
      dispatch(getCompanyById(data));
    })
    .catch((error) => {
      console.log(error);
    });
};

// Create New Company
export const postNewCompany = (newData) => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}/company`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json", // Указываем, что отправляем JSON
    },
    body: JSON.stringify(newData), // Преобразуем объект в JSON
  })
    .then((response) => response.json())
    .then((data) => {
      // Обрабатываем ответ от сервера
      console.log(data);
      dispatch(getMessage(data.message));
    })
    .catch((error) => {
      console.log(error);
    });
};

// Add Worker In Company
export const putEmployeeCompany = (id, employee) => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}/company/${id}/worker/${employee}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => dispatch(getMessage(data.message)))
    .catch((error) => {
      console.log(error);
    });
};

//Get Company Schedule for week
export const getCompanySchedule = (id) => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}/company/${id}/schedule`, { method: "GET", mode: "cors" })
    .then((res) => res.json())
    .then((data) => dispatch(сompanySchedule(data)))
    .catch((error) => {
      console.log(error);
    });
};

//Delete Worker From Company
export const deleteEmployeeCompany = (id, employee) => (dispatch) => {
  fetch(`${baseURL}/company/${id}/worker/${employee}`, {
    method: "DELETE",
    mode: "cors",
  })
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};

// Put Configurate Schedule
export const putConfigurateSchedule = (id, newData) => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}/company/${id}/schedule/configure`, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
  // .then(data => {dispatch(getMessage(data.message))})
};

//Get Week Configurate
export const getWeekConfigurate = (id) => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}/company/${id}/configuration`, {
    method: "GET",
    mode: "cors",
  })
    .then((res) => res.json())
    .then((data) => dispatch(weekConfigurate(data)))
    .catch((error) => {
      console.log(error);
      dispatch(loading(false));
    });
};
//Get Week Names
export const fetchWeekNames = (id) => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}/company/${id}/week/names`, { method: "GET", mode: "cors" })
    .then((res) => res.json())
    .then((data) => dispatch(weekNames(data)))
    .catch((error) => {
      console.log(error);
    });
};

//Post Week Names

export const fetchPutWeekNames = (id, newData) => (dispatch) => {
  console.log(id, newData);
  dispatch(loading(false));
  fetch(`${baseURL}/company/${id}/week/period`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch(сompanySchedule(data));
    })
    .catch((error) => {
      console.log(error);
    });
};

//Post Week Names
// https://shaotcloud.fly.dev/shaot/company/1800/schedule/save
export const fetchPostSaveSchedule = (id, newData) => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}/company/${id}/schedule/update`, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(сompanySchedule(data));
    })
    .catch((error) => {
      console.log(error);
    });
};
