const styles = theme => ({
  EventPageWrapper: {
    background:
      "linear-gradient(to bottom, #000000 28%,#000000 28%,#000000 30%,#000000 30%,#1c3e73 89%,#1c3e73 91%,#1c3e73 100%,#000000 100%,#7db9e8 100%,#1c3e73 100%,#000000 101%)",
    height: "100vh"
  },
  EventFormContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
  },
  EventHeader: {
    color: "white",
    marginTop: "0",
    paddingTop: "6rem"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    // marginTop: "100px",
    width: "100%"
  },
  columnOne: {
    maxWidth: "30%",
    margin: " 40px",
    flexDirection: "column"
  },
  columnTwo: {
    maxWidth: "30%",
    margin: " 40px",
    flexDirection: "column"
    // margin: "0 auto",
    // justifyContent: "center"
  },
  field: {
    margin: "25px 0",
    color: "#fff",
    fontWeight: "lighter"
  },
  "input-field": {
    backgroundColor: "rgba(0,0,0,0.6)",
    border: "2px solid white",
    borderRadius: "10px",
    width: "400px",
    color: "white",
    alignItems: "center",
    fontSize: "30px",
    height: "50px",
    paddingLeft: "5px",
    paddingRight: "5px",
    marginBottom: "5px",
    marginTop: "20px",

    "&::placeholder": {
      color: "rgba(190, 190, 191, 0.8)",
      fontSize: "16px",
      alignSelf: "center",
      marginTop: "4px"
    }
  },
  btn: {
    color: "white",
    backgroundColor: "#19B4A4",
    width: "10%",
    marginBottom: "20px",
    marginTop: "12px",
    border: "2px solid #19B4A4",
    alignSelf: "center",

    "&:hover": {
      backgroundColor: "rgba(0,0,0,0)",
      border: "2px solid #19B4A4"
    }
  },
  //start of Pop Up styles
  EventPopupContainer: {
    color: "black",
    border: "2px Solid white"
  },
  EventPopupTitle: {
    fontColor: "white"
  },
  EventPopupContent: {
    fontColor: "white"
  },
  EventPopupLink: {
    textDecoration: "none"
  },
  EventPopupBtns: {
    color: "white",
    backgroundColor: "#19B4A4",
    border: "2px solid #19B4A4",
    alignSelf: "center",

    "&:hover": {
      color: "#19B4A4",
      backgroundColor: "rgba(0,0,0,0)",
      border: "2px solid #19B4A4"
    }
  }
});

export default styles;
