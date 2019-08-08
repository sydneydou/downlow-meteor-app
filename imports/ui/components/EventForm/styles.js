const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    background:
      "linear-gradient(to bottom, #000000 0%,#290342 38%,#290342 38%,#290342 48%,#290342 50%,#290342 61%,#000000 99%,#7db9e8 100%)",
    height: "280px"
  },
  columnOne: {
    maxWidth: "50%",
    flexDirection: "column",
    margin: "0 auto",
    justifyContent: "center"
  },
  columnTwo: {
    maxWidth: "50%",
    flexDirection: "column",
    margin: "0 auto",
    justifyContent: "center"
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
    width: "90%",
    color: "white",
    alignItems: "center",
    fontSize: "20px",
    height: "30px",
    paddingLeft: "5px",
    paddingRight: "5px",
    marginBottom: "5px",

    "&::placeholder": {
      color: "rgba(190, 190, 191, 0.8)",
      fontSize: "16px",
      alignSelf: "center",
      marginTop: "4px"
    }
  }
});

export default styles;
