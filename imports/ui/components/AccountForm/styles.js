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
    color: "white",
    width: "100%",
    alignItems: "center",
    fontSize: "20px",
    height: "30px",
    padding: "0px 5px 0px 5px",

    "&::placeholder": {
      color: "rgba(190, 190, 191, 0.8)",
      fontSize: "16px",
      alignSelf: "center"
    }
  },
  CreateTitle: {
    textShadow: "3px 3px black"
  }
});

export default styles;
