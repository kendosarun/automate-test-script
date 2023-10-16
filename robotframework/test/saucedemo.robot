***Settings***
Resource    ../keyword/keywords_saucedemo.robot
Library     SeleniumLibrary
Library     String
Library     BuiltIn

***Variables***
${URL}      https://www.saucedemo.com/
${USER1}        standard_user
${USER2}        locked_out_user
${USER3}        problem_user
${USER4}        performance_glitch_user
${PASSWORD}     secret_sauce

***Test Cases***
End-to-end flow valid user buy order
    Open url 
    valid login username 1
    Select all product
    Checkout valid information
    Verify review
    Close Browser

Verify invalid information on Checkout information page    
    Open url 
    valid login username 1
    Select all product
    Checkout invalid information
    
