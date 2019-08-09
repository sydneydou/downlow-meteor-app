const styles = theme => ({
  btn: {
    color: "white",
    backgroundColor: "#19B4A4",
    width: "80%",
    marginBottom: "20px",
    marginTop: "12px",

    "&:hover": {
      backgroundColor: "rgba(0,0,0,0)",
      border: "2px solid #19B4A4"
    }
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
  },
  LoginTitle: {
    textShadow: "3px 3px black"
  },
  Form: {
    width: "300px"
  },
  showErrorColor: {
    borderColor: "red"
  }
});

export default styles;
