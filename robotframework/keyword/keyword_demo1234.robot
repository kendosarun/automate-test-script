
*** Settings ***
Library    SeleniumLibrary
Resource    ../variable/variable_demo1234.robot



*** Keywords ***
User Open Browser
    Open Browser     ${URL}        chrome
    Wait Until Page Contains    ภาพรวม
    Sleep     3s

User fill information
    Input Text    //*[@id="inputName"]      ${NAME}
    Input Text    //*[@id="inputEmail"]       ${EMAIL} 
    Input Text    //*[@id="inputDetail"]          Learning Robotframework 101
    Select From List By Value    id=inputGender    male
    Select From List By Value    id=inputInterest    pet

User Click checkbox and submit
    Click Element    id=inputVIP
    Click Element    id=buttonConfirm
    Sleep     3s    
    