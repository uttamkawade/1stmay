package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Registerpage {
WebDriver driver;

@FindBy(id="name")
private WebElement uname;

@FindBy(id="mobile")
private WebElement mob;

@FindBy(id="email")
private WebElement email;

@FindBy(id="password")
private WebElement pass;

@FindBy(xpath="//button")
private WebElement submit;

public Registerpage(WebDriver driver){
	this.driver=driver;
	PageFactory.initElements(driver, this);
}
	public void enterUname(String text){
		uname.sendKeys(text);
		
	}
	
	public void enterMobile(String text){
		mob.sendKeys(text);
		
	}
	
	public void enteremail(String text){
		email.sendKeys(text);
	}
	
	public void enterPass(String text){
		pass.sendKeys(text);	
	}
	
	public void clicksubmit(){
	    submit.click();
		
	}
	

	
}
