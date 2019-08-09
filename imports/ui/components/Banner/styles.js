const styles = theme => ({
  container: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background:
      "linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)), url('assets/concertbg.jpg')",
    height: "92vh",
    marginTop: "-80px",
    display: "flex",
    justifyContent: "center",
  },
  dL: {
    color: "#fff",
    fontSize: "45px",
    fontWeight: "700",
    marginBottom: "1rem"
  },
  bannerText: {
    height: "50",
    margin: "0",
    color: "#fff",
    fontWeight: "300",
    fontSize: "29px"
  },
  bannerTextPosition: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column"
  }
});

export default styles;
