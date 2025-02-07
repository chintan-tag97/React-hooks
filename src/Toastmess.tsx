import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

function Toastmess() {
  const showToastinfo = () => {
    toast.info(" Lorem ipsum dolor", {
      position: "top-right",
      className: "info",
    });
  };

  const showToasterror = () => {
    toast.error("Lorem ipsum dolor", {
      position: "top-right",
      className: "error",
    });
  };

  const showToastwarning = () => {
    toast.warning("Lorem ipsum dolor", {
      position: "top-right",
      className: "warning",
    });
  };

  const showToastsuccess = () => {
    toast.success("Lorem ipsum dolor", {
      position: "top-right",
      className: "success",
    });
  };
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: "top-right",
      className: "toast-message",
    });

    toast.error("Success Notification!", {
      position: "top-left",
      className: "toast-message1 ",
    });

    toast.warning("Warning Notification!", {
      position: "top-center",
    });

    toast.info("Information Notification !", {
      position: "bottom-center",
    });

    toast("Default Notification!", {
      position: "bottom-left",
    });

    toast("Custom Style Notification with css class!", {
      position: "bottom-right",
    });
  };

  return (
    <div>
      <button onClick={showToastMessage}>Notify</button>
      <ToastContainer aria-label={undefined} />

      <button onClick={showToastinfo}>Info</button>
      <ToastContainer aria-label={undefined} />

      <button onClick={showToasterror}>Error</button>
      <ToastContainer aria-label={undefined} />

      <button onClick={showToastwarning}>Warning</button>
      <ToastContainer aria-label={undefined} />

      <button onClick={showToastsuccess}>Success</button>
      <ToastContainer aria-label={undefined} />
    </div>
  );
}

export default Toastmess;
