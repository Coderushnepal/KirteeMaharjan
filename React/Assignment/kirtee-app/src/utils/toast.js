import iziToast from "izitoast";

iziToast.settings({
  timeout: 4000,
  progressBarColor: "white",
});

export const success = ({ title, message }) => {
  console.log("success", title, message);
  iziToast.show({
    title: title,
    message: message,
    backgroundColor: "green",
    timeout: 4000,
  });
};

export const error = ({ title, message }) => {
  console.log("error", title, message);
  iziToast.show({
    title,
    message,
    backgroundColor: "#ff0000",
    timeout: 6000,
  });
};
