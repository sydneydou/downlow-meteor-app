const styles = theme => ({
  card: {
    width: "100%",
    height: "330px",
    background: "rgba(0,0,0,0.2)",
    color: "#fff",
    fontWeight: "light",
    border: "2px solid #fff",
    borderRadius: "10px"
  },
  cardTitle: {
    fontSize: "45px",
    marginTop: "0",
    marginBottom: "2px"
  },
  singleContent: {
    margin: "0",
    paddingTop: ".4em",
    fontSize: "22px"
  },
  cardInfoContent: {
    fontWeight: "light",
    fontSize: "8px",
    paddingLeft: "7em",
    paddingTop: "2em",
    minWidth: "50%"
  },
  btn: {
    color: "white",
    backgroundColor: "#19B4A4",
    width: "34%",
    marginBottom: "20px",
    marginTop: "12px",
    height: "3.5em"
  },
  btnClicked: {
    color: "white",
    backgroundColor: "rgba(0,0,0,0)",
    width: "34%",
    marginBottom: "20px",
    marginTop: "12px",
    border: "2px solid #19B4A4",
    height: "3.5em"
  },
  container: {
    paddingLeft: "6em",
    paddingRight: "6em",
    paddingTop: "3em",
    paddingBottom: "3em"
  },
  cardArtist: {
    fontSize: "21px",
    fontWeight: "500",
    paddingRight: "3em",
    margin: "0",
    paddingTop: ".7em",
    paddingBottom: ".4em"
  },
  infoBlock: {
    display: "flex"
  },
  titleTimeBlock: {
    display: "flex"
  },
  cardDate: {
    fontSize: "20px",
    paddingRight: "4em",
    paddingLeft: "2em"
  },
  cardAttending: {
    padding: "1px 0",
    fontSize: "22px",
    fontWeight: "500",
    marginBottom: ".2em"
  },
  numAttending: {
    fontWeight: "800"
  },
  cardImage: {
    marginTop: "-16px",
    marginRight: "-16px",
    width: "100%",
    height: "35em"
  },
  imageCentering: {
    display: "flex",
    justifyContent: "space-around"
  },
  deleteIcon: {
    fontSize: "5em"
  },
  cardDiv: {
    display: "flex",
    width: "50%",
    justifyContent: "flex-end"
  },
  cardInput: {
    fontWeight: "500",
    color: "#19B4A4"
  },
  eventLocation: {
    margin: "0",
    paddingTop: ".5em",
    fontSize: "18px",
    fontWeight: "500"
  }
});

export default styles;
