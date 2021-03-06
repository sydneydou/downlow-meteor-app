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
  HeaderText: {
    color: "white",
    fontSize: "1.5em",
    fontWeight: "500",
    width: "100%",
    margin: "0",
    "&:hover": {
      color: "#19B4A4"
    }
  },
  AddIcon: {
    color: "white",
    marginRight: "5px",
    "&:hover": {
      color: "#19B4A4"
    }
  },
  HeaderHover: {
    color: "white",
    "&:hover": {
      color: "#19B4A4"
    }
  },
  Link: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    zIndex: "2",
    width: "160px"
  },
  DropDown: {
    height: "1.2em",
    fontSize: "1.5em",
    color: "white"
  },
  InnerIcons: {
    verticalAlign: "middle",
    marginRight: "10px",
    "&:hover": {
      color: "#19B4A4"
    }
  },
  LongIconContainer: {
    width: "160px"
  },
  DlLogo: {
    width: "45%"
  }
});

export default styles;
