import Toast, { useToast, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

const defaultOptions = {
  position: POSITION.BOTTOM_RIGHT,
  draggable: true,
  draggablePercent: 0.1,
  showCloseButtonOnHover: true,
  hideProgressBar: true,
};

const iconClass = "mdi v-icon v-icon--size-large";

export const toasts = {
  success(message: string) {
    useToast().success(message, {
      ...defaultOptions,
      timeout: 2000,
      icon: {
        iconClass: "mdi-check-outline " + iconClass,
      },
    });
  },
  error(message: string) {
    useToast().error(message, {
      ...defaultOptions,
      timeout: 5000,
      icon: {
        iconClass: "mdi-close-outline " + iconClass,
      },
    });
  },
  warning(message: string) {
    useToast().warning(message, {
      ...defaultOptions,
      timeout: 3000,
      icon: {
        iconClass: "mdi-alert-outline " + iconClass,
      },
    });
  },
  info(message: string) {
    useToast().info(message, {
      ...defaultOptions,
      timeout: 2000,
      icon: {
        iconClass: "mdi-information-box-outline " + iconClass,
      },
    });
  }
};

export default Toast;