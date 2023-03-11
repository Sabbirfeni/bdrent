import React, { useContext } from "react";
import './css/sign-up.css';
import { Button, CenteredDiv } from '../../assets/styles/styled-components/Elements.style';
import logo from "../../assets/images/logo/logo-air-cnc-2.png";
import  {AuthContext}  from "../../contexts/AuthProvider";

export default function SignUp() {
    const { createUser, upload, updateUserProfile, verifyEmail, loading, setLoading } = useContext(AuthContext);
    
    const handleSubmission = e => {
        e.preventDefault();
        const userName = e.target.name.value;
        const useImg = e.target.img.files[0];
        const userEmail = e.target.email.value;
        const userPass = e.target.pass.value;
        
        // Create User
        createUser(userEmail, userPass).then(result => console.log(result))
    }
    return (
        <CenteredDiv>
            <form onSubmit={handleSubmission} className="form_container">
                <div className="logo_container">
                    <img src={logo} className='site-logo' alt="sdsf" />
                </div>
                <div className="title_container">
                    <p className="title">BDrent</p>
                    <span className="subtitle">Get started with our app, just create an account and enjoy the experience.</span>
                </div>
                <br/>
                <div className="input_container">
                    <label className="input_label" htmlFor="name_field">Name</label>
                    <input placeholder="your name" title="Input title" name="name" type="text" className="input_field" id="name_field" required/>
                </div>
                <div className="input_container">
                <label className="input_label" htmlFor="name_field">Select Image</label>
                    <input accept="image/*" className="inpdddut" name="img" id="arquivo" type="file" required/>
                </div>
               
                <div className="input_container">
                    <label className="input_label" htmlFor="email_field">Email</label>
                    <input placeholder="name@mail.com" title="Input title" name="email" type="email" className="input_field" id="email_field" required/>
                </div>
                <div className="input_container">
                    <label className="input_label" htmlFor="password_field">Password</label>
                    <input placeholder="Password" title="Input title" name="pass" type="password" className="input_field" id="password_field" required/>
                </div>
                <Button 
                    className="btn-donate" 
                    width='100%'>
                    Sign Up
                </Button>
                <div className="separator">
                    <span>Or Sign up with</span>
                </div>
                <div className="social-media-SignUp-buttons">
                    <button type="submit" className="social-signUp-btn">
                        <span>Google</span>
                    </button>
                    <button type="submit" className="social-signUp-btn">
                        <span>Twitter</span>
                    </button>
                    <button type="submit" className="social-signUp-btn">
                        <span>Github</span>
                    </button>
                </div>

                <p className="note">Already have an account? <a href="#">Sign In</a></p>
            </form>
        </CenteredDiv>
    );
}
