'use client'
import { useRouter } from 'next/navigation'
import { register } from '@/services/authService'
import { useState } from 'react'

export default function RegisterForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await register(formData)

      if (response.data.success) {
        router.push('/login')
      }
    } catch (error) {
      console.error(error)
    }
  }
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
        <form onSubmit={handleSubmit} className="_social_registration_form">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="_social_registration_form_input _mar_b14">
                <label className="_social_registration_label _mar_b8">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-control _social_registration_input"
                />
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="_social_registration_form_input _mar_b14">
                <label className="_social_registration_label _mar_b8">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-control _social_registration_input"
                />
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="_social_registration_form_input _mar_b14">
                <label className="_social_registration_label _mar_b8">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control _social_registration_input"
                />
              </div>
            </div>
            {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="_social_registration_form_input _mar_b14">
                <label className="_social_registration_label _mar_b8">
                  Repeat Password
                </label>
                <input
                  type="password"
                  className="form-control _social_registration_input"
                />
              </div>
            </div> */}
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
                  readOnly
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
                  type="submit"
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
