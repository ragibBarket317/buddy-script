'use client'
import { useRouter } from 'next/navigation'
import { register } from '@/services/authService'
import { useState } from 'react'
import Link from 'next/link'
import { validateRegisterForm } from '@/utils/validation'

export default function RegisterForm() {
  const router = useRouter()
  const [errors, setErrors] = useState({})
  const [serverError, setServerError] = useState('')
  const [submitting, setSubmitting] = useState(false)
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
    setServerError('')

    const validationErrors = validateRegisterForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setSubmitting(true)
    try {
      const response = await register(formData)

      if (response.data.success) {
        router.push('/login')
      }
    } catch (error) {
      setServerError(
        error.response?.data?.message ||
          'Registration failed. Please try again.',
      )
    } finally {
      setSubmitting(false)
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
        {serverError && (
          <div
            style={{
              background: '#fdecea',
              color: '#dc3545',
              padding: '10px 14px',
              borderRadius: '6px',
              fontSize: '14px',
              marginBottom: '16px',
            }}
          >
            {serverError}
          </div>
        )}
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
                  className={`form-control _social_registration_input ${errors.firstName ? 'is-invalid' : ''}`}
                />
                {errors.firstName && (
                  <span
                    style={{
                      color: '#dc3545',
                      fontSize: '13px',
                      marginTop: '4px',
                      display: 'block',
                    }}
                  >
                    {errors.firstName}
                  </span>
                )}
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
                  className={`form-control _social_registration_input ${errors.lastName ? 'is-invalid' : ''}`}
                />
                {errors.lastName && (
                  <span
                    style={{
                      color: '#dc3545',
                      fontSize: '13px',
                      marginTop: '4px',
                      display: 'block',
                    }}
                  >
                    {errors.lastName}
                  </span>
                )}
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
                  className={`form-control _social_registration_input ${errors.email ? 'is-invalid' : ''}`}
                />
                {errors.email && (
                  <span
                    style={{
                      color: '#dc3545',
                      fontSize: '13px',
                      marginTop: '4px',
                      display: 'block',
                    }}
                  >
                    {errors.email}
                  </span>
                )}
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
                  className={`form-control _social_registration_input ${errors.password ? 'is-invalid' : ''}`}
                />
                {errors.password && (
                  <span
                    style={{
                      color: '#dc3545',
                      fontSize: '13px',
                      marginTop: '4px',
                      display: 'block',
                    }}
                  >
                    {errors.password}
                  </span>
                )}
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
                  htmlFor="flexRadioDefault2"
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
                  disabled={submitting}
                  className="_social_registration_form_btn_link _btn1"
                >
                  {submitting ? 'Registering...' : 'Register now'}
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="_social_registration_bottom_txt">
              <p className="_social_registration_bottom_txt_para">
                Already have an account? <Link href="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
