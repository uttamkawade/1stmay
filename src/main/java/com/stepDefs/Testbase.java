package com.stepDefs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Testbase {
	 static WebDriver driver ;
		
		public static   WebDriver initialization(){
			System.setProperty("webdriver.chrome.driver", "C:/chromedriver.exe");
			driver = new ChromeDriver();
		    driver.get("file:///C:/Program%20Files/Selelium%20Software/Offline%20Website/Offline%20Website/index.html");
		    driver.manage().window().maximize();
		    return driver;
			
		}

}
