package com.pages;

import java.util.List;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Userpage {
	WebDriver driver;
	@FindBy(linkText="LOGOUT")
	private WebElement logout;
	
	@FindBy(xpath="//span[text()='Delete']")
     private List<WebElement>deletbutn; 
	
	@FindBy(xpath="//button[text()='Add User']")
	private WebElement AddUser;
	
	public Userpage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	public AddUserPage clickAdduser(){
		AddUser.click();
		return new AddUserPage(driver);
	}
	
	//delete buttons xpath.
	public void deletbutton(){
		for (WebElement buttons : deletbutn) {
			buttons.click();
			Alert alert =driver.switchTo().alert();
			
			if(alert.getText().equals("Are you sure you want to delete this user")){
				alert.accept();
				alert.accept();
			}else{
				alert.accept();
				try {
					Thread.sleep(2000);
				} catch (InterruptedException e) {
					
					e.printStackTrace();
				}
			}
				
		}
	}
	public void logout() throws InterruptedException{
		Thread.sleep(2000);
		logout.click();
	}
}
