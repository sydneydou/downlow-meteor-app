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
  fieldInput: {
    borderRadius: "10px",
    marginLeft: "10px"
  },
  button: {
      backgroundColor: "#24E5DF"
  }
});

export default styles;
