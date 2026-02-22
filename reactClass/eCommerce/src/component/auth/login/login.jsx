import styles from './login.module.css'

const Login = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>WELCOME BACK</h3>
            <p className={styles.subtitle}>Enter your credentials to access your account</p>
            <form action="submit" className={styles.form}>
                <input type="text" placeholder="Email Address" className={styles.input} />
                <div className={styles.inputWrapper}>
                    <input type="text" placeholder="Password" className={styles.input} />
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
            <button className={styles.signInBtn}>
                <label htmlFor="button">Sign in</label>
            </button>
            <hr className={styles.divider} />
            <span className={styles.dividerText}>or continue with</span>
            <div className={styles.socialButtons}>
                <button className={styles.socialBtn}><label htmlFor="button">Google</label></button>
                <button className={styles.socialBtn}><label htmlFor="button">Apple</label></button>
            </div>
            <div className={styles.signupFooter}>
                <h3>Dont have an Account?</h3>
                <a href="....">Sign up!</a>
            </div>
        </div>
    )
}

export default Login