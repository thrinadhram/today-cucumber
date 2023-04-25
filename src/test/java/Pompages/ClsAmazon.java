package Pompages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ClsAmazon 
{
	public WebDriver wd;

	public ClsAmazon(WebDriver d)
	{
		wd=d;
	}

	By linkSignIn=By.xpath("//*[@id='nav-link-accountList']/span[1]");
	By txtEmail=By.xpath("//*[@id='ap_email']");
	By btnContinue=By.xpath("//*[@id='continue']");
	By txtPwd=By.xpath("//*[@id='ap_password']");
	By btnLogin=By.xpath("//*[@id='signInSubmit']");

	public void clickSignin()
	{
		wd.findElement(linkSignIn).click();		
	}
	public void clickContinue()
	{
		wd.findElement(btnContinue).click();
	}
	public void clickLogin()
	{
		wd.findElement(btnLogin).click();
	}
	public void setEmail(String username)
	{
		wd.findElement(txtEmail).sendKeys(username);		
	}
	public void setPassword(String pwd)
	{
		wd.findElement(txtPwd).sendKeys(pwd);
	}
}