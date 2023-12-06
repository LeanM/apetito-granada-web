import "../../css/footer.css";

export default function PageFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Welcome to Apetito Granada.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>References</h6>
            <ul className="footer-links">
              <li>
                <a href="https://www.framer.com/motion/">Framer Motion</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by
              <a href="#"> Apetito Granada</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
