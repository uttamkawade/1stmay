package com.stepDefs;

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

public class DeleteStepdef {
 WebDriver driver;
 
	Loginpage lp=null;
	Dashboardpage dp=null;
	Userpage up=null;
	AddUserPage ap =null;
	@Before("@deletebutton")
	public  void setup(){
		driver= Testbase.initialization();
		lp= new  Loginpage(driver);
		dp=lp.validLogin();
		
		
	}
	
	@After("@deletebutton")
	public void tearup(){
			driver.close();
	}
 
 
 @Given("^user shuold be on user page for delete button$")
 public void user_shuold_be_on_user_page_for_delete_button() throws Throwable {
	 up=dp.clickUser();
     
 }

 @When("^delete all users$")
 public void delete_all_users() throws Throwable {
    up.deletbutton();
     
 }

 @Then("^user can logout$")
 public void user_can_logout() throws Throwable {
     up.logout();
     
 }


}
