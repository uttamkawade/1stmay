package com.stepDefs;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;

import com.pages.AddUserPage;
import com.pages.Dashboardpage;
import com.pages.Loginpage;
import com.pages.Userpage;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AdduserStepdef {
	WebDriver driver;
	Loginpage lp=null;
	Dashboardpage dp=null;
	Userpage up=null;
	AddUserPage ap =null;
	
	@Before("@adduser")
	public  void setup(){
		driver= Testbase.initialization();
		lp= new  Loginpage(driver);
		dp=lp.validLogin();
		up=dp.clickUser();
		
	}
	
	@After("@adduser")
	public void tearup(){
			driver.close();
	}
	
	
	
	@Given("^user should be on user page and click Adduser button$")
	public void user_should_be_on_user_page_and_click_Adduser_button() throws Throwable {
	  
	  ap= up.clickAdduser();
	   
	}

	@When("^user can add all details$")
	public void user_can_add_all_details() throws Throwable {
	   ap.enterUname("Uttam kawade");
	   ap.entermobile("7218991947");
	   ap.enteremail("Kawde@gmail.com");
	   ap.entercourse("java");
	   ap.clickGender("Male");
	   ap.selectByState("Maharashtra");
	   ap.enterpass("1234567");
	  
	   
	}

	@When("^submit button can click$")
	public void submit_button_can_click() throws Throwable {
		 ap.clicksubmiit();
	   
	}

	@Then("^user see alert to confirm$")
	public void user_see_alert_to_confirm() throws Throwable {
	   Alert alert = driver.switchTo().alert();
	   String msg =alert.getText();
	   Assert.assertEquals("User Added Successfully. You can not see added user.", msg);
	   alert.accept();
	}


}
