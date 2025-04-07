import { auth } from "./firebase-config.js";
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded"); 

    const loginBtn = document.getElementById("loginBtn");

    if (!loginBtn) {
        console.error("Login button not found in DOM. Selector used: #loginBtn");
        return;
    }
    
    console.log("Login button found:", loginBtn); 

    loginBtn.addEventListener("click", handleGoogleLogin);
    
    async function handleGoogleLogin() {
        console.log("Login button clicked"); 

        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("Login successful:", result);
            alert(`Logged in as: ${result.user.displayName}`);
            window.location.href = "planner.html"; 
        } catch (error) {
            console.error("Login Failed:", error);
            alert(`Login failed: ${error.message}`);
        }
    }
});
