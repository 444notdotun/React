import styles from './register.module.css'
import { Link } from 'react-router'
import { useState } from 'react'

const Register = () => {

        const userInput ={
            fullName:"",
            email:"",
            password:""
        }

        const [user, setUser] = useState(userInput) 
  

        const handleChange=(e)=>{
            let name = e.target.name
            let value = e.target.value
            setUser({...user, [name]:value})
        }
    
        const handleClick = async(e) => {
           handleSubmit(e)
            try {
                Response = await fetch("http://localhost:8080/api/v1/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        fullName:user.firstName,
                        email:user.email,
                        password:user.password
                    })
                });
                if(Response.status === 201){
                    alert("Registration successful")
                    console.log("Registration successful")
                }else{
                    alert("Registration failed")
                    console.log("Registration failed")
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        const handleSubmit = (e) => {
            e.preventDefault();
        }
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>CREATE ACCOUNT</h3>
            <p className={styles.subtitle}>Fill in your details to create an account</p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input name='firstName' onChange={handleChange} type="text" placeholder="Full Name" className={styles.input} />
                <input name='email' onChange={handleChange} type="text" placeholder="Email Address" className={styles.input} />
                <div className={styles.inputWrapper}>
                    <input name='password' onChange={handleChange} type="password" placeholder="Password" className={styles.input} />
                </div>
                <div className={styles.inputWrapper}>
                    <input  type="password" placeholder="Confirm Password" className={styles.input} />
                </div>
            </form>
            <div className={styles.meta}>
                <div className={styles.remember}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>I agree to the Terms & Conditions</span>
                </div>
            </div>
            <button onClick={handleClick} className={styles.signInBtn}>
                <label htmlFor="button">Sign up</label>
            </button>
            <hr className={styles.divider} />
            <span className={styles.dividerText}>or continue with</span>
            <div className={styles.socialButtons}>
                <button className={styles.socialBtn}><label htmlFor="button">Google</label></button>
                <button className={styles.socialBtn}><label htmlFor="button">Apple</label></button>
            </div>
            <div className={styles.signupFooter}>
                <h3>Already have an Account?</h3>
                {/* <a href=""><Link to="/login">Sign in!</Link></a> */}
            </div>
        </div>
        
    )
}

export default Register