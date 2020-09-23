import iziToast from "izitoast";

iziToast.settings({
  titleColor: "#ffff",
  messageColor: "#ffff",
  timeout: 6000,
  closeOnClick: true,
  theme: "lighr",
});

export const success = ({ title, message }) => {
  console.log("success", title, message);
  iziToast.show({
    title: title,
    message: message,
    position: "topCenter",
    backgroundColor: " #36d7b7",
    progressBarColor: "#36d7b7",
    timeout: 4000,
  });
};

export const error = ({ title, message }) => {
  console.log("error", title, message);
  iziToast.show({
    title,
    message,
    position: "topRight",
    backgroundColor: "#d0021b",
    progressBarColor: "#d0021b",
  });
};
