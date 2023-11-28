import { createUseStyles } from "react-jss";

export default function HomeInfo() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <div className={classes.dataContainer}>
          <div style={{ fontSize: "5rem", fontWeight: "800", height: "20%" }}>
            1.
          </div>
          <div
            style={{
              fontSize: "1.2rem",
              height: "50%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>
              iasndiasndasm kadj ask dask dasjkdk asdkasd asdas dlaskdjklas
              alksdjaskl
            </p>
          </div>
        </div>
      </div>
      <div className={classes.subContainer}>
        <div className={classes.dataContainer}>
          <div style={{ fontSize: "5rem", fontWeight: "800", height: "20%" }}>
            2.
          </div>
          <div
            style={{
              fontSize: "1.2rem",
              height: "50%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>
              iasndiasndasm kadj ask dask dasjkdk asdkasd asdas dlaskdjklas
              alksdjaskl
            </p>
          </div>
        </div>
      </div>
      <div className={classes.subContainer}>
        <div className={classes.dataContainer}>
          <div style={{ fontSize: "5rem", fontWeight: "800", height: "20%" }}>
            3.
          </div>
          <div
            style={{
              fontSize: "1.2rem",
              height: "50%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>
              iasndiasndasm kadj ask dask dasjkdk asdkasd asdas dlaskdjklas
              alksdjaskl
            </p>
          </div>
        </div>
      </div>
      <div className={classes.subContainer}>
        <div className={classes.dataContainer}>
          <div style={{ fontSize: "5rem", fontWeight: "800", height: "20%" }}>
            4.
          </div>
          <div
            style={{
              fontSize: "1.2rem",
              height: "50%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>
              iasndiasndasm kadj ask dask dasjkdk asdkasd asdas dlaskdjklas
              alksdjaskl
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    height: "50vh",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  subContainer: {
    width: "25%",
    height: "90%",
    borderRight: "solid 1px grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dataContainer: {
    width: "80%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  },
});
