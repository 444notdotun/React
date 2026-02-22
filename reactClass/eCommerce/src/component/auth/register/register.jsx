import styles from './register.module.css'

const Register = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>CREATE ACCOUNT</h3>
            <p className={styles.subtitle}>Fill in your details to create an account</p>
            <form action="submit" className={styles.form}>
                <input type="text" placeholder="Full Name" className={styles.input} />
                <input type="text" placeholder="Email Address" className={styles.input} />
                <div className={styles.inputWrapper}>
                    <input type="password" placeholder="Password" className={styles.input} />
                </div>
                <div className={styles.inputWrapper}>
                    <input type="password" placeholder="Confirm Password" className={styles.input} />
                </div>
            </form>
            <div className={styles.meta}>
                <div className={styles.remember}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>I agree to the Terms & Conditions</span>
                </div>
            </div>
            <button className={styles.signInBtn}>
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
                <a href="....">Sign in!</a>
            </div>
        </div>
    )
}

export default Register