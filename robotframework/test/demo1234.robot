*** Settings ***
Library    SeleniumLibrary
Resource   ../keyword/keyword_demo1234.robot



*** Test case ***
Testcase1 User fill information success
    User Open Browser
    User fill information
    User Click checkbox and submit
   

 


