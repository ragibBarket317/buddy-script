export default function RegisterForm() {
  return (
    <>
      <div className="_social_registration_content">
        <div className="_social_registration_right_logo _mar_b28">
          <img
            src="assets/images/logo.svg"
            alt="Image"
            className="_right_logo"
          />
        </div>
        <p className="_social_registration_content_para _mar_b8">
          Get Started Now
        </p>
        <h4 className="_social_registration_content_title _titl4 _mar_b50">
          Registration
        </h4>
        <button
          type="button"
          className="_social_registration_content_btn _mar_b40"
        >
          <img
            src="assets/images/google.svg"
            alt="Image"
            className="_google_img"
          />{' '}
          <span>Register with google</span>
        </button>
        <div className="_social_registration_content_bottom_txt _mar_b40">
          {' '}
          <span>Or</span>
        </div>
        <form className="_social_registration_form">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="_social_registration_form_input _mar_b14">
                <label className="_social_registration_label _mar_b8">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control _social_registration_input"
                />
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="_social_registration_form_input _mar_b14">
                <label className="_social_registration_label _mar_b8">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control _social_registration_input"
                />
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="_social_registration_form_input _mar_b14">
                <label className="_social_registration_label _mar_b8">
                  Repeat Password
                </label>
                <input
                  type="password"
                  className="form-control _social_registration_input"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
              <div className="form-check _social_registration_form_check">
                <input
                  className="form-check-input _social_registration_form_check_input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label
                  className="form-check-label _social_registration_form_check_label"
                  for="flexRadioDefault2"
                >
                  I agree to terms & conditions
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
              <div className="_social_registration_form_btn _mar_t40 _mar_b60">
                <button
                  type="button"
                  className="_social_registration_form_btn_link _btn1"
                >
                  Login now
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="_social_registration_bottom_txt">
              <p className="_social_registration_bottom_txt_para">
                Dont have an account? <a href="#0">Create New Account</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
