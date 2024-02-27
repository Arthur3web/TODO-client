import { defineStyleConfig } from "@chakra-ui/react";

export const Container = defineStyleConfig({
  variants: {
    taskContentDateContainer: {
      display: "flex",
      w: "90px",
      gap: "10px",
      alignItems: "center",
      padding: 0,
      m: 0,
    },
    menuOperationTaskContainer: {
      display: "flex",
      justifyContent: "space-around",
      padding: 0,
    },
    todoContainer: {
      display: "flex",
      w: "100%",
      h: "100%",
      maxW: "672px",
      maxH: "390px",
      flexDirection: "column",
      alignItems: "baseline",
      p: 0,
      m: 0,
    },
    todoHeaderContainer: {
      display: "flex",
      w: "100%",
      maxW: "672px",
      h: "47px",
      bg: "rgba(244, 244, 244, 1)",
      borderRadius: "10px",
      p: "16px 20px 16px 20px",
      justifyContent: "space-between",
      alignItems: "center",
    },
    popoverBodyContainer: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      justifyContent: "space-around",
      padding: 0,
    },
    popoverFooterContentContainer: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      padding: 0,
    },
    addTaskModalContentContainer: {
      display: "flex",
      gap: "10px",
      padding: 0,
    },
    modalFooterContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      w: "422px",
      padding: 0,
    },
    editTaskModalContentContainer: {
      display: "flex",
      gap: "10px",
      padding: 0,
    },
    deleteTaskModalContentContainer: {
      display: "flex",
      h: "63px",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
    },
    sideBarContainer: {
      display: "flex",
      w: "100%",
      maxW: "185px",
      flexDirection: "column",
      justifyContent: "space-between",
      m: 0,
      padding: 0,
    },
    sideBarContentContainer: {
      display: "flex",
      w: "100%",
      maxW: "185px",
      flexDirection: "column",
      gap: "21px",
      padding: 0,
    },
    sideBarFilterButtonContentContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: 0,
    },
    taskModalBodyContainer: {
      display: "flex",
      gap: "10px",
      p: 0,
      background: "rgba(244, 244, 244, 1",
    },
  },
});
