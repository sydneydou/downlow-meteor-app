const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    background: "black",
    height: "4.2em",
    textAlign: "center",
    paddingLeft: "10%",
    paddingRight: "10%"
  },
  "long-menu-item": {
    color: "black",
    fontSize: "1.2em"
  },
  NotificationsContainer: {
    display: "flex",
    alignItems: "center"
  },
  headerText: {
    color: "white",
    fontSize: "1.5em",
    fontWeight: "500",
    width: "100%",
    margin: "0"
  },
  addIcon: {
    color: "white",
    marginRight: "5px"
  },
  link: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    zIndex: "2",
    width: "160px"
  },
  dropDown: {
    height: "1.2em",
    fontSize: "1.5em",
    color: "white"
  },
  innerIcons: {
    verticalAlign: "middle",
    marginRight: "10px"
  },
  LongIconContainer: {
    width: "160px"
  }
});

export default styles;
