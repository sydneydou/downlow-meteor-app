const styles = theme => ({
  container: {
    // backgroundImage: `url("assets/concertbg.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background:
      "linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)), url('assets/concertbg.jpg')",
    height: "92vh",
    marginTop: "-80px"
  },
  dL: {
    color: "#fff",
    fontSize: "45px",
    display: "flex",
    justifyContent: "center",
    paddingTop: "13rem",
    fontWeight: "700"
  }
});

export default styles;
