package com.stepDefs;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;

import com.pages.Loginpage;
import com.pages.Registerpage;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegisterStepdef {
 WebDriver driver;
 Loginpage lp=null;
 Registerpage rp=null;
 
 @Before("@register")
 public void setup(){
	 driver=Testbase.initialization();
	 lp=new Loginpage(driver);
}
 
     @After("@register")
     public void tearup(){
	 driver.close();
       }
 
 @Given("^user should be in login page for register$")
 public void user_should_be_in_login_page_for_register() throws Throwable {
	 
	 Assert.assertEquals("JavaByKiran | Log in", driver.getTitle());
 }

 @When("^click on the registerlink$")
 public void click_on_the_registerlink() throws Throwable {
    rp= lp.clickRegister();
  }

 @When("^user add all details and click the submit button$")
 public void user_add_all_details_and_click_the_submit_button() throws Throwable {
     rp.enterUname("Uttam");
     rp.enterMobile("7218991947");
     rp.enteremail("uttamkawade@gmail.com");
     rp.enterPass("12345");
     rp.clicksubmit();
 }

 @Then("^user can see alert$")
 public void user_can_see_alert() throws Throwable {
	 Alert alert = driver.switchTo().alert();
	 String msg =alert.getText();
	 Assert.assertEquals("User registered successfully.", msg);
	 alert.accept();
     
    
 }


}
