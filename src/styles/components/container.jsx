import { defineStyleConfig } from "@chakra-ui/react";

export const Container = defineStyleConfig({
  variants: {
    taskContainer: {
      maxW: "428px",
      h: "33px",
      bg: "rgba(147, 51, 234, 0.06)",
      borderRadius: "10px",
      mb: "7px",
      _hover: { bg: "rgba(147, 51, 234, 0.12)" },
      justifyContent: "space-between",
    },
    taskContentContainer: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 0,
    },
    taskContentTitleContainer: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      padding: 0,
    },
    taskContentDateContainer: {
      display: "flex",
      // minW: "57px",
      gap: "10px",
      alignItems: "center",
      padding: 0,
    },
    menuOperationTaskContainer: {
      display: "flex",
      justifyContent: "space-around",
      padding: 0,
    },
    titleWrapperContainer: {
      display: "flex",
      maxW: "1366px",
      maxH: "1024px",
      w: "100%",
      h: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 0,
    },
    todoContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "baseline",
      mr: "90px",
      padding: 0,
    },
    todoHeaderContainer: {
      display: "flex",
      minW: "672px",
      h: "47px",
      bg: "rgba(244, 244, 244, 1)",
      borderRadius: "10px",
      p: "16px 20px 16px 20px",
      justifyContent: "space-between",
      alignItems: "center",
    },
    todoContentContainer: {
      display: "flex",
      minW: "672px",
      h: "343px",
      p: "31px 0 0 0",
      justifyContent: "space-between",
      gap: "10px",
    },
    popoverBodyContainer: {
      display: "flex",
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
      w: "185px",
      flexDirection: "column",
      justifyContent: "space-between",
      m: 0,
      padding: 0,
    },
    sideBarContentContainer: {
      display: "flex",
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
    sideBarFilterButtonIconContainer: {
      //не применено
      display: "flex",
      // w: "27px",
      // h: "27px",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
    },
    taskListContainer: {
      display: "flex",
      flexDirection: "column",
      w: "466px",
      h: "312px",
      borderRadius: "10px",
      bg: "rgba(244, 244, 244, 1)",
      p: "31px 17px 21px 21px",
      m: 0,
      gap: "10px",
      overflowY: "auto",
    },
  },
});
