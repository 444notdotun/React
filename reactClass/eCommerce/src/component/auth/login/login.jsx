import styles from './login.module.css'
import { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleClick = async(e) => {
       handleSubmit(e)
        try {
            Response = await fetch("http://localhost:8080/api/v1/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username:email,
                    password:password
                })
            });
            if(Response.ok){
                alert("Login successful")
                console.log("Login successful")
            }else{
                alert("Login failed")
                console.log("Login failed")
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const emailInput = (event) => {
        setEmail(event.target.value)
    }
    const passwordInput = (event) => {
        setPassword(event.target.value)
        
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>WELCOME BACK</h3>
            <p className={styles.subtitle}>Enter your credentials to access your account</p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input onChange={emailInput} name= "email" type="text" placeholder="Email Address" className={styles.input} />
                <div className={styles.inputWrapper}>
                    <input onChange={passwordInput} name="password" type="password" placeholder="Password" className={styles.input} />
                </div>
            </form>
            <div className={styles.meta}>
                <div className={styles.remember}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>Remember me</span>
                </div>
                <div>
                    <p className={styles.forgot}>Forget password?</p>
                </div>
            </div>
            <button  onClick={handleClick} className={styles.signInBtn}>
                <label htmlFor="button">Sign in</label>
            </button>
            <hr className={styles.divider} />
            <span className={styles.dividerText}>or continue with</span>
            <div className={styles.socialButtons}>
                <button className={styles.socialBtn}><label htmlFor="button">Google</label></button>
                <button className={styles.socialBtn}><label htmlFor="button">Apple</label></button>
            </div>
            <div className={styles.signupFooter}>
                <h3>Don't have an Account?</h3>
                <a href="....">Sign up!</a>
            </div>
            
        </div>
    )
}

export default Login