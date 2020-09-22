import iziToast from "izitoast";

iziToast.settings({
  titleColor: "#ffff",
  messageColor: "#ffff",
  timeout: 4000,
  progressBarColor: "white",
  closeOnClick: true,
  theme: "lighr",
});

export const success = ({ title, message }) => {
  console.log("success", title, message);
  iziToast.show({
    title: title,
    message: message,
    backgroundColor: " #36d7b7",
    timeout: 4000,
  });
};

export const error = ({ title, message }) => {
  console.log("error", title, message);
  iziToast.show({
    title,
    message,
    backgroundColor: "#d0021b",
    timeout: 6000,
  });
};
