import React from 'react'

export default function Home() {
  return (
   
         <React.Fragment>
      <div className="bg-continer">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              </button></div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Tour</a></li>
                <li><a href="#">Package</a></li>
                <li><a href="#">Favorites</a></li>
              </ul>
            </div>{/* /.navbar-collapse */}
          </div>{/* /.container-fluid */}
        </nav>
        <div id="form">
          <div className="container">
            <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-md-8 col-md-offset-2">
              <div id="userform">
                <ul className="nav nav-tabs nav-justified" role="tablist">
                  <li className="active"><a href="#signup" role="tab" data-toggle="tab">Sign up</a></li>
                  <li><a href="#login" role="tab" data-toggle="tab">Log in</a></li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade active in" id="signup">
                    <h2 className="text-uppercase text-center"> Sign Up for Free</h2>
                    <form id="signup">
                      <div className="row">
                        <div className="col-xs-12 col-sm-6">
                          <div className="form-group">
                            <label>First Name<span className="req">*</span> </label>
                            <input type="text" className="form-control" id="first_name" required data-validation-required-message="Please enter your name." autoComplete="off" />
                            <p className="help-block text-danger" />
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                          <div className="form-group">
                            <label> Last Name<span className="req">*</span> </label>
                            <input type="text" className="form-control" id="last_name" required data-validation-required-message="Please enter your name." autoComplete="off" />
                            <p className="help-block text-danger" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label> Your Email<span className="req">*</span> </label>
                        <input type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address." autoComplete="off" />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="form-group">
                        <label> Your Phone<span className="req">*</span> </label>
                        <input type="tel" className="form-control" id="phone" required data-validation-required-message="Please enter your phone number." autoComplete="off" />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="form-group">
                        <label> Password<span className="req">*</span> </label>
                        <input type="password" className="form-control" id="password" required data-validation-required-message="Please enter your password" autoComplete="off" />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="mrgn-30-top">
                        <button type="submit" className="btn btn-larger btn-block">
                          Sign up
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane fade in" id="login">
                    <h2 className="text-uppercase text-center"> Log in</h2>
                    <form id="login">
                      <div className="form-group">
                        <label> Your Email<span className="req">*</span> </label>
                        <input type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address." autoComplete="off" />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="form-group">
                        <label> Password<span className="req">*</span> </label>
                        <input type="password" className="form-control" id="password" required data-validation-required-message="Please enter your password" autoComplete="off" />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="mrgn-30-top">
                        <button type="submit" className="btn btn-larger btn-block">
                          Log in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.container */} 
        </div>
      </div>
         </React.Fragment>
  )
}
