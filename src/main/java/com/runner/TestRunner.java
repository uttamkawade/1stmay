package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
(
	
	features="src/main/java/com/features", tags= {"@registerdata,@data"},  // or use tags=("@Login,@register") or teild symbol ~
	glue= "com.stepDefs",
    format= {"pretty","html:test-output"},
	monochrome= true,
	dryRun=false
	
)
public class TestRunner {

}


