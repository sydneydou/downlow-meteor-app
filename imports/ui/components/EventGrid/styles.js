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
    backgroundColor: "#19B4A4",
    marginBottom: "20px",

    "&:hover": {
      backgroundColor: "rgba(0,0,0,0)",
      border: "2px solid #19B4A4"
    }
  },
  AllEventsTitle: {
    border: "2px solid #19B4A4",
    color: "white",
    width: "30%",
    padding: "8px",
    textAlign: "center"
  },
  AttendingEventsButton: {
    width: "30%",
    order: "2",
    color: "white",
    backgroundColor: "#19B4A4",

    "&:hover": {
      backgroundColor: "rgba(0,0,0,0)",
      border: "2px solid #19B4A4"
    }
  },
  AttendingEventsTitle: {
    border: "2px solid #19B4A4",
    color: "white",
    width: "30%",
    padding: "8px",
    textAlign: "center"
  },
  color: {
    color: "white"
  }
});

export default styles;
