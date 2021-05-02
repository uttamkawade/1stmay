package com.stepDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginStepdefWithdata 
{
	WebDriver driver;
	@Before("@data")
    public void setup(){
		System.setProperty("webdriver.chrome.driver", "C:/chromedriver.exe");
		driver = new ChromeDriver();
    }
    
    @After("@data")
    public void tearup(){
    	driver.close();
    }
	@Given("^user should lounch \"([^\"]*)\"$")
	public void user_should_lounch(String url) throws Throwable {
	   driver.get(url);
	}

	@When("^user enter \"([^\"]*)\" and \"([^\"]*)\" and click the button$")
	public void user_enter_and_and_click_the_button(String uname, String pass) throws Throwable {
	    driver.findElement(By.id("email")).sendKeys(uname);
	    driver.findElement(By.id("password")).sendKeys(pass);
	    driver.findElement(By.xpath("//button")).click();
	    
	}

	@Then("^user can Verify the title$")
	public void user_can_Verify_the_title() throws Throwable {
		
		if(driver.getTitle().contains("Dashboard")){
			driver.findElement(By.partialLinkText("LOGOUT")).click();
		}
		Assert.assertEquals("JavaByKiran | Log in", driver.getTitle());
		
	    
	}


}
