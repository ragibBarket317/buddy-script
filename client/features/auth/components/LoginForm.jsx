'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { login } from '@/services/authService'
import { useState } from 'react'
import { validateLoginForm } from '@/utils/validation'

export default function LoginForm() {
  const [errors, setErrors] = useState({})
  const [serverError, setServerError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()
  const [formData, setFormData] = useState({
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

    const validationErrors = validateLoginForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setSubmitting(true)
    try {
      const response = await login(formData)
      console.log('Response:', response.data)
      if (response.data.success) {
        console.log('Before push')
        router.push('/feed')
        console.log('After push')
      }
    } catch (error) {
      setServerError(
        error.response?.data?.message || 'Login failed. Please try again.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <div className="_social_login_content">
        <div className="_social_login_left_logo _mar_b28">
          <img
            src="assets/images/logo.svg"
            alt="Image"
            className="_left_logo"
          />
        </div>

        <p className="_social_login_content_para _mar_b8">Welcome back</p>

        <h4 className="_social_login_content_title _titl4 _mar_b50">
          Login to your account
        </h4>

        <button type="button" className="_social_login_content_btn _mar_b40">
          <img
            src="assets/images/google.svg"
            alt="Image"
            className="_google_img"
          />{' '}
          <span>Or sign-in with google</span>
        </button>

        <div className="_social_login_content_bottom_txt _mar_b40">
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

        <form onSubmit={handleSubmit} className="_social_login_form">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="_social_login_form_input _mar_b14">
                <label className="_social_login_label _mar_b8">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control _social_login_input ${errors.email ? 'is-invalid' : ''}`}
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
              <div className="_social_login_form_input _mar_b14">
                <label className="_social_login_label _mar_b8">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-control _social_login_input ${errors.password ? 'is-invalid' : ''}`}
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
          </div>

          <div className="row">
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
              <div className="form-check _social_login_form_check">
                <input
                  className="form-check-input _social_login_form_check_input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                />
                <label
                  className="form-check-label _social_login_form_check_label"
                  htmlFor="flexRadioDefault2"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
              <div className="_social_login_form_left">
                <p className="_social_login_form_left_para">Forgot password?</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
              <div className="_social_login_form_btn _mar_t40 _mar_b60">
                <button
                  type="submit"
                  disabled={submitting}
                  className="_social_login_form_btn_link _btn1"
                >
                  {submitting ? 'Login...' : 'Login now'}
                </button>
              </div>
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="_social_login_bottom_txt">
              <p className="_social_login_bottom_txt_para">
                Dont have an account?{' '}
                <Link href="/register">Create New Account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
