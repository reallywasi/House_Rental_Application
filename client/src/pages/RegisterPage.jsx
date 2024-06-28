import React from 'react'

const RegisterPage = () => {
  return (
    <div>

<div className="register_content">
        <form className="register_content_form" >
          <input
            placeholder="First Name"
            name="firstName"

            required
          />
          <input
            placeholder="Last Name"
            name="lastName"

            required
          />
          <input
            placeholder="Email"
            name="email"
            type="email"

            required
          />
          <input
            placeholder="Password"
            name="password"

            type="password"
            required
          />
          <input
            placeholder="Confirm Password"
            name="confirmPassword"

            type="password"
            required
          />

     

          <input
            id="image"
            type="file"
            name="profileImage"
            accept="image/*"
            style={{ display: "none" }}
 
            required
          />
          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="add profile photo" />
            <p>Upload Your Photo</p>
          </label>

     
          <button type="submit" >REGISTER</button>
        </form>
        <a href="/login">Already have an account? Log In Here</a>
      </div>


    </div>
  )
}

export default RegisterPage
