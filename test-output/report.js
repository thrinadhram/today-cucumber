$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Login.Feature");
formatter.feature({
  "name": "AmazonLogin",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login functionality Test",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens url \"https://amazon.in\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Signin button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on_Signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email as \"venkatbj@yahoo.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enter_email_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password as \"Bujji@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enter_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page url should be \"https://www.amazon.in/?ref_\u003dnav_ya_signin\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.page_url_should_be(String)"
});
formatter.result({
  "status": "passed"
});
});