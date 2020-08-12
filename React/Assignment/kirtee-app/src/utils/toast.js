import iziToast from "izitoast";

iziToast.settings({
  timeout: 6000,
  backgroundColor: "green",
});

export const success = ({ title, message }) => {
  console.log("success", title, message);
  iziToast.show({
    title: title,
    message: message,
    backgroundColor: "green",
    timeout: 6000,
  });
};

export const error = ({ title, message }) => {
  console.log("error", title, message);
  iziToast.error({
    timeout: 6000,
    title,
    message,
  });
};
