package com.stepDefs;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.pages.Loginpage;
import com.pages.Registerpage;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegisterwithdatastepDef {
	WebDriver driver;
	Loginpage lp;
	Registerpage rp;
	@Before("@registerdata")
    public void setup(){
		System.setProperty("webdriver.chrome.driver", "C:/chromedriver.exe");
		driver = new ChromeDriver();
		
    }
    
    @After("@registerdata")
    public void tearup(){
    	driver.close();
    }
	@Given("^user if register new data it should lounch \"([^\"]*)\"$")
	public void user_if_register_new_data_it_should_lounch(String url) throws Throwable {
	  driver.get(url);
	    
	}

	@When("^click on reister link to enter multiple data$")
	public void click_on_reister_link_to_enter_multiple_data() throws Throwable {
	  lp= new Loginpage(driver);
	  rp=lp.clickRegister();
	    
	}

	@When("^enter the \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and\"([^\"]*)\"$")
	public void enter_the_and_and_and(String name, String mobile, String email, String pass) throws Throwable {
		rp.enterUname(name);
		rp.enterMobile(mobile);
		rp.enteremail(email);
		rp.enterPass(pass);
	  
	    
	}

	@When("^click the sign in button$")
	public void click_the_sign_in_button() throws Throwable {
	  
	    rp.clicksubmit();
	}

	@Then("^verify alert to confirm$")
	public void verify_alert_to_confirm() throws Throwable {
	  
	    Alert al = driver.switchTo().alert();
	    String alertmsg=al.getText();
	    Assert.assertEquals("User registered successfully.", alertmsg);
	    al.accept();
	}


}
