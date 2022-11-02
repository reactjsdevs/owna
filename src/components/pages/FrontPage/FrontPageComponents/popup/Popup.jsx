import {
  useDialogState,
  Dialog,
  DialogBackdrop,
  DialogDisclosure,
} from "reakit/Dialog";
import styles from "./Popup.module.css";
import cx from "classnames";
import { IconClose } from "../../../../../images/IconClose";

export const Popup = ({ trigger, renderContent, popupTitle }) => {
  const dialog = useDialogState({ animated: true });
  return (
    <div>
      <DialogDisclosure {...dialog} className="outline-none focus:outline-none">
        {trigger}
      </DialogDisclosure>
      <DialogBackdrop
        {...dialog}
        className={cx(
          "fixed inset-0 bg-black bg-opacity-25 z-50 flex flex-col py-0 sm:py-4 items-center justify-center",
          styles.backdrop
        )}
      >
        <Dialog
          {...dialog}
          aria-label={popupTitle}
          className={cx(
            "bg-white sm:rounded-xl shadow-2xl h-full sm:h-auto max-h-full relative",
            styles.dialog
          )}
        >
          <button
            className="absolute top-5 right-5 outline-none focus:outline-none hover:opacity-50"
            onClick={dialog.hide}
          >
            <IconClose width="24" />
          </button>
          <div className="pl-4 pr-12 py-8 sm:p-12 overflow-auto h-full sm:max-h-auto">
            {renderContent({ onClose: dialog.hide })}
          </div>
        </Dialog>
      </DialogBackdrop>
    </div>
  );
};
