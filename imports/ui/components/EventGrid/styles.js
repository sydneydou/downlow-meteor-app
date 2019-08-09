const styles = theme => ({
  ButtonWrapper: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-around"
  },
  ButtonWrapperToggled: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-around"
  },
  AllEventsButton: {
    width: "30%",
    color: "white",
    border: "2px solid #19B4A4",
    backgroundColor: "#19B4A4",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0)",
      border: "2px solid #19B4A4",
      grow: "0"
    }
  },
  AllEventsTitle: {
    border: "2px solid #19B4A4",
    borderBottom: "2px solid black",
    marginBottom: "-2px",
    color: "white",
    width: "30%",
    padding: "7px",
    textAlign: "center",
    borderTopRightRadius: "5px",
    borderTopLeftRadius: "5px",
    textTransform: "uppercase",
    fontSize: "0.875rem",
    fontWeight: "500"
  },
  AttendingEventsButton: {
    width: "30%",
    order: "2",
    color: "white",
    border: "2px solid #19B4A4",
    backgroundColor: "#19B4A4",

    "&:hover": {
      backgroundColor: "rgba(0,0,0,0)",
      border: "2px solid #19B4A4",
      grow: "0"
    }
  },
  AttendingEventsTitle: {
    border: "2px solid #19B4A4",
    borderBottom: "2px solid black",
    marginBottom: "-2px",
    color: "white",
    width: "30%",
    padding: "7px",
    textAlign: "center",
    borderTopRightRadius: "5px",
    borderTopLeftRadius: "5px",
    textTransform: "uppercase",
    fontSize: "0.875rem",
    fontWeight: "500"
  },
  color: {
    color: "white"
  },
  noAttendedEventsText: {
    color: "white",
    textAlign: "center",
    paddingTop: "4em",
    paddingBottom: "4em",
    fontWeight: "500",
    fontSize: "1.6em"
  },
  EventGridContainer: {
    border: "2px solid #19B4A4",
    borderRadius: "5px"
  }
});

export default styles;
