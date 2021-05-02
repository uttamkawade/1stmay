package com.stepDefs;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import com.pages.Loginpage;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepdef {
	WebDriver driver ;
	Loginpage lp=null;

    @Before("@login")
    public void setup(){
    	driver=Testbase.initialization();
    	 lp= new Loginpage(driver);
    }
    
    @After("@login")
    public void tearup(){
    	driver.close();
    }
    
	@Given("^user should be in login page$")
	public void user_should_be_in_login_page() throws Throwable {
		Assert.assertEquals("JavaByKiran | Log in", driver.getTitle());
	}

	@When("^enter a username and password and clik the login button$")
	public void enter_a_username_and_password_and_clik_the_login_button() throws Throwable {
	   
	    lp.validLogin();
	   
	}

	@Then("^user will be on the home page$")
	public void user_will_be_on_the_home_page() throws Throwable {
		Assert.assertEquals("JavaByKiran | Dashboard", driver.getTitle());
	   
	}

	@Given("^user should be in login page for logo$")
	public void user_should_be_in_login_page_for_logo() throws Throwable {
		Assert.assertEquals("JavaByKiran | Log in", driver.getTitle());
	   
	}

	@Then("^user see the logo$")
	public void user_see_the_logo() throws Throwable {
		
		 Assert.assertTrue(lp.verifyLogo());
	}



}
