
class LoginPage{
    constructor(page){
        this.page = page;
        this.emailInput = "//input[@id='email']";
        this.passwordInput = "//input[@id='pass']";
        this.loginButton = "//button[text()='Log in']";
    }

    async navigateToLogin(){
        await this.page.goto('https://www.facebook.com');
    }

    async enterUser(email){
        await this.page.fill(this.emailInput,email);
    }
    async enterPass(password){
        await this.page.fill(this.passwordInput,password);
    }
    async loginClick(){
        await this.page.click(this.loginButton);
    }
}

module.exports = LoginPage;