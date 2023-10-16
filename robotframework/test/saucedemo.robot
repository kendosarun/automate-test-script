***Settings***
Resource    ../keyword/keywords_saucedemo.robot
Library     SeleniumLibrary
Library     String
Library     BuiltIn

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
    
