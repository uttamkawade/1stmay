$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginWithData.feature");
formatter.feature({
  "line": 2,
  "name": "jbk offline login with data",
  "description": "",
  "id": "jbk-offline-login-with-data",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@data"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "jbk test data login test",
  "description": "",
  "id": "jbk-offline-login-with-data;jbk-test-data-login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user should lounch \"file:///C:/Program%20Files/Selelium%20Software/Offline%20Website/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"\u003cuname\u003e\" and \"\u003cpass\u003e\" and click the button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user can Verify the title",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "jbk-offline-login-with-data;jbk-test-data-login-test;",
  "rows": [
    {
      "cells": [
        "uname",
        "pass"
      ],
      "line": 11,
      "id": "jbk-offline-login-with-data;jbk-test-data-login-test;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 12,
      "id": "jbk-offline-login-with-data;jbk-test-data-login-test;;2"
    },
    {
      "cells": [
        "mangesh@gmail.com",
        "qwerty"
      ],
      "line": 13,
      "id": "jbk-offline-login-with-data;jbk-test-data-login-test;;3"
    },
    {
      "cells": [
        "neelam@gmail.com",
        "asdfgh"
      ],
      "line": 14,
      "id": "jbk-offline-login-with-data;jbk-test-data-login-test;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3000608700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "jbk test data login test",
  "description": "",
  "id": "jbk-offline-login-with-data;jbk-test-data-login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@data"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user should lounch \"file:///C:/Program%20Files/Selelium%20Software/Offline%20Website/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"kiran@gmail.com\" and \"123456\" and click the button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user can Verify the title",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file:///C:/Program%20Files/Selelium%20Software/Offline%20Website/Offline%20Website/index.html",
      "offset": 20
    }
  ],
  "location": "loginStepdefWithdata.user_should_lounch(String)"
});
formatter.result({
  "duration": 3094408600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 12
    },
    {
      "val": "123456",
      "offset": 34
    }
  ],
  "location": "loginStepdefWithdata.user_enter_and_and_click_the_button(String,String)"
});
formatter.result({
  "duration": 3009282300,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefWithdata.user_can_Verify_the_title()"
});
formatter.result({
  "duration": 300901200,
  "status": "passed"
});
formatter.after({
  "duration": 172363000,
  "status": "passed"
});
formatter.before({
  "duration": 1425167400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "jbk test data login test",
  "description": "",
  "id": "jbk-offline-login-with-data;jbk-test-data-login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@data"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user should lounch \"file:///C:/Program%20Files/Selelium%20Software/Offline%20Website/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"mangesh@gmail.com\" and \"qwerty\" and click the button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user can Verify the title",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file:///C:/Program%20Files/Selelium%20Software/Offline%20Website/Offline%20Website/index.html",
      "offset": 20
    }
  ],
  "location": "loginStepdefWithdata.user_should_lounch(String)"
});
formatter.result({
  "duration": 2241580000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mangesh@gmail.com",
      "offset": 12
    },
    {
      "val": "qwerty",
      "offset": 36
    }
  ],
  "location": "loginStepdefWithdata.user_enter_and_and_click_the_button(String,String)"
});
formatter.result({
  "duration": 553306300,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefWithdata.user_can_Verify_the_title()"
});
formatter.result({
  "duration": 14501700,
  "status": "passed"
});
formatter.after({
  "duration": 169815600,
  "status": "passed"
});
formatter.before({
  "duration": 1613706900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "jbk test data login test",
  "description": "",
  "id": "jbk-offline-login-with-data;jbk-test-data-login-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@data"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user should lounch \"file:///C:/Program%20Files/Selelium%20Software/Offline%20Website/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"neelam@gmail.com\" and \"asdfgh\" and click the button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user can Verify the title",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file:///C:/Program%20Files/Selelium%20Software/Offline%20Website/Offline%20Website/index.html",
      "offset": 20
    }
  ],
  "location": "loginStepdefWithdata.user_should_lounch(String)"
});
formatter.result({
  "duration": 2874158700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neelam@gmail.com",
      "offset": 12
    },
    {
      "val": "asdfgh",
      "offset": 35
    }
  ],
  "location": "loginStepdefWithdata.user_enter_and_and_click_the_button(String,String)"
});
formatter.result({
  "duration": 347408600,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefWithdata.user_can_Verify_the_title()"
});
formatter.result({
  "duration": 12532700,
  "status": "passed"
});
formatter.after({
  "duration": 142803900,
  "status": "passed"
});
formatter.uri("newRegisterwithdata.feature");
formatter.feature({
  "line": 2,
  "name": "jbk offline register",
  "description": "",
  "id": "jbk-offline-register",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@registerdata"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "resister with multiple data",
  "description": "",
  "id": "jbk-offline-register;resister-with-multiple-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user if register new data it should lounch \"file:///C:/Program%20Files/Selelium%20Software/Offline%20Website/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on reister link to enter multiple data",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "enter the \"\u003cname\u003e\" and \"\u003cmobile\u003e\" and \"\u003cemail\u003e\" and\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click the sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify alert to confirm",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "jbk-offline-register;resister-with-multiple-data;",
  "rows": [
    {
      "cells": [
        "name",
        "mobile",
        "email",
        "password"
      ],
      "line": 14,
      "id": "jbk-offline-register;resister-with-multiple-data;;1"
    },
    {
      "cells": [
        "uttam",
        "7218991947",
        "uttamkawade@gmail.com",
        "123456"
      ],
      "line": 15,
      "id": "jbk-offline-register;resister-with-multiple-data;;2"
    },
    {
      "cells": [
        "mangesh",
        "9614141000",
        "mangesh@gmail.com",
        "12345878"
      ],
      "line": 16,
      "id": "jbk-offline-register;resister-with-multiple-data;;3"
    },
    {
      "cells": [
        "neelam",
        "9049427714",
        "neelam@gmail.com",
        "qwerty"
      ],
      "line": 17,
      "id": "jbk-offline-register;resister-with-multiple-data;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1568228100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "resister with multiple data",
  "description": "",
  "id": "jbk-offline-register;resister-with-multiple-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@registerdata"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user if register new data it should lounch \"file:///C:/Program%20Files/Selelium%20Software/Offline%20Website/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on reister link to enter multiple data",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "enter the \"uttam\" and \"7218991947\" and \"uttamkawade@gmail.com\" and\"123456\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click the sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify alert to confirm",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file:///C:/Program%20Files/Selelium%20Software/Offline%20Website/Offline%20Website/index.html",
      "offset": 44
    }
  ],
  "location": "RegisterwithdatastepDef.user_if_register_new_data_it_should_lounch(String)"
});
formatter.result({
  "duration": 3294706500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterwithdatastepDef.click_on_reister_link_to_enter_multiple_data()"
});
formatter.result({
  "duration": 346211400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "uttam",
      "offset": 11
    },
    {
      "val": "7218991947",
      "offset": 23
    },
    {
      "val": "uttamkawade@gmail.com",
      "offset": 40
    },
    {
      "val": "123456",
      "offset": 67
    }
  ],
  "location": "RegisterwithdatastepDef.enter_the_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 523099000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterwithdatastepDef.click_the_sign_in_button()"
});
formatter.result({
  "duration": 88862700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterwithdatastepDef.verify_alert_to_confirm()"
});
formatter.result({
  "duration": 48267300,
  "status": "passed"
});
formatter.after({
  "duration": 202245300,
  "status": "passed"
});
formatter.before({
  "duration": 2738592900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "resister with multiple data",
  "description": "",
  "id": "jbk-offline-register;resister-with-multiple-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@registerdata"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user if register new data it should lounch \"file:///C:/Program%20Files/Selelium%20Software/Offline%20Website/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on reister link to enter multiple data",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "enter the \"mangesh\" and \"9614141000\" and \"mangesh@gmail.com\" and\"12345878\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click the sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify alert to confirm",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file:///C:/Program%20Files/Selelium%20Software/Offline%20Website/Offline%20Website/index.html",
      "offset": 44
    }
  ],
  "location": "RegisterwithdatastepDef.user_if_register_new_data_it_should_lounch(String)"
});
formatter.result({
  "duration": 4277388000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterwithdatastepDef.click_on_reister_link_to_enter_multiple_data()"
});
formatter.result({
  "duration": 239487900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mangesh",
      "offset": 11
    },
    {
      "val": "9614141000",
      "offset": 25
    },
    {
      "val": "mangesh@gmail.com",
      "offset": 42
    },
    {
      "val": "12345878",
      "offset": 65
    }
  ],
  "location": "RegisterwithdatastepDef.enter_the_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 480896900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterwithdatastepDef.click_the_sign_in_button()"
});
formatter.result({
  "duration": 87358100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterwithdatastepDef.verify_alert_to_confirm()"
});
formatter.result({
  "duration": 15695500,
  "status": "passed"
});
formatter.after({
  "duration": 177015100,
  "status": "passed"
});
formatter.before({
  "duration": 2391420400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "resister with multiple data",
  "description": "",
  "id": "jbk-offline-register;resister-with-multiple-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@registerdata"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user if register new data it should lounch \"file:///C:/Program%20Files/Selelium%20Software/Offline%20Website/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on reister link to enter multiple data",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "enter the \"neelam\" and \"9049427714\" and \"neelam@gmail.com\" and\"qwerty\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click the sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify alert to confirm",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file:///C:/Program%20Files/Selelium%20Software/Offline%20Website/Offline%20Website/index.html",
      "offset": 44
    }
  ],
  "location": "RegisterwithdatastepDef.user_if_register_new_data_it_should_lounch(String)"
});
formatter.result({
  "duration": 6087040800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterwithdatastepDef.click_on_reister_link_to_enter_multiple_data()"
});
formatter.result({
  "duration": 549187000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neelam",
      "offset": 11
    },
    {
      "val": "9049427714",
      "offset": 24
    },
    {
      "val": "neelam@gmail.com",
      "offset": 41
    },
    {
      "val": "qwerty",
      "offset": 63
    }
  ],
  "location": "RegisterwithdatastepDef.enter_the_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 501386300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterwithdatastepDef.click_the_sign_in_button()"
});
formatter.result({
  "duration": 69675900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterwithdatastepDef.verify_alert_to_confirm()"
});
formatter.result({
  "duration": 13576300,
  "status": "passed"
});
formatter.after({
  "duration": 135789900,
  "status": "passed"
});
});