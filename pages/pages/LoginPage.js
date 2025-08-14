class LoginPage {
  get loginButton() {
    return $('#login-button');
  }

  get errorMessage() {
    return $('.error-message-container');
  }
  async open() {
    await browser.url('https://www.saucedemo.com/');
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async getErrorText(msg) {
    await expect(this.errorMessage).toHaveText(msg);
  }
}
module.exports = new LoginPage();
