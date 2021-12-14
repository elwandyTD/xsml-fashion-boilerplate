import React, { useRef } from "react";
import { AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";

import { IAppState } from "../redux/rootReducer";
import { closeAlert } from "../redux/extra/action";

import Button from "./atoms/Button";

const Alert = React.memo(() => {
  const cancelRef = useRef(null);
  const dispatch = useDispatch();
  const extra = useSelector(({ extra }: IAppState) => extra);

  const { alert, openAlert } = extra;

  const onClose = () => {
    dispatch(closeAlert());
  }

  return (
    <AlertDialog
      isOpen={openAlert}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      motionPreset='slideInBottom'
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            {alert.title}
          </AlertDialogHeader>

          <AlertDialogBody>
            {alert.description}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button variant={"ghost"} ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme={alert.buttonType === "Add" ? "blue" : "red"} onClick={() => alert.onClick()} ml={3}>
              { alert.buttonType === "Add" ? "Save" : "Delete" }
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
});

export default Alert;