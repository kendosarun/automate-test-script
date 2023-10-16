*** Settings ***
Library    SeleniumLibrary
Resource     ../saucedemo.robot

***Keywords***
Open url 
    Open Browser    https://www.saucedemo.com/     gc

valid login username 1
    Input Text      //*[@id="user-name"]        ${USER1}
    Input Text      //*[@id="password"]        ${PASSWORD}
    Click Button    //*[@id="login-button"]     
    Wait Until Location Is      https://www.saucedemo.com/inventory.html
    Page Should Contain Element     //*[@id="header_container"]/div[2]      PRODUCTS

valid login username 2
    Input Text      //*[@id="user-name"]        ${USER2}
    Input Text      //*[@id="password"]        ${PASSWORD}
    Click Button    //*[@id="login-button"]     
    Wait Until Location Is      https://www.saucedemo.com/inventory.html
    Page Should Contain Element     //*[@id="header_container"]/div[2]      PRODUCTS

valid login username 3
    Input Text      //*[@id="user-name"]        ${USER3}
    Input Text      //*[@id="password"]        ${PASSWORD}
    Click Button    //*[@id="login-button"]     
    Wait Until Location Is      https://www.saucedemo.com/inventory.html
    Page Should Contain Element     //*[@id="header_container"]/div[2]      PRODUCTS

valid login username 4
    Input Text      //*[@id="user-name"]        ${USER4}
    Input Text      //*[@id="password"]        ${PASSWORD}
    Click Button    //*[@id="login-button"]     
    Wait Until Location Is      https://www.saucedemo.com/inventory.html            
    Page Should Contain Element     //*[@id="header_container"]/div[2]      PRODUCTS           

invalid login username
    Input Text      //*[@id="user-name"]        standard_user
    Input Text      //*[@id="password"]        zxcvb
    Click Button    //*[@id="login-button"]     
    ${ERRORMSG}     Get Text        //*[@id="login_button_container"]/div/form/div[3]/h3  
    Should Be Equal     ${ERRORMSG}         Epic sadface: Username and password do not match any user in this service
    Capture Page Screenshot

Select all product
    Page Should Contain Element        //*[@id="header_container"]     Products
    Click Element        //*[@id="add-to-cart-sauce-labs-backpack"]  
    Click Element         //*[@id="add-to-cart-sauce-labs-bike-light"]
    Click Element        //*[@id="add-to-cart-sauce-labs-bolt-t-shirt"]    
    Click Element       //*[@id="add-to-cart-sauce-labs-fleece-jacket"]
    Click Element        //*[@id="add-to-cart-sauce-labs-onesie"]
    Click Element        //*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]
    Click Element       //*[@id="shopping_cart_container"]/a
    Page Should Contain Element        //*[@id="header_container"]     Your cart
    Click Element       //*[@id="checkout"]

Checkout invalid information
    Page Should Contain Element      //*[@id="header_container"]/div[2]      CHECKOUT: YOUR INFORMATION
    Input Text      //*[@id="first-name"]         ""
    Click Element       //*[@id="continue"]
    Page Should Contain Element       //*[@id="checkout_info_container"]/div/form/div[1]/div[4]/h3         Error: First Name is required
    Capture Page Screenshot
    Input Text      //*[@id="last-name"]        ""
    Click Element       //*[@id="continue"]
    Page Should Contain Element       //*[@id="checkout_info_container"]/div/form/div[1]/div[4]/h3         Error: Last Name is required
    Capture Page Screenshot
    Input Text      //*[@id="postal-code"]      ""
    Click Element       //*[@id="continue"]
    Sleep   3s
    Capture Page Screenshot
    

Checkout valid information
    Page Should Contain Element      //*[@id="header_container"]/div[2]      CHECKOUT: YOUR INFORMATION
    Input Text      //*[@id="first-name"]       Sarun  
    Input Text      //*[@id="last-name"]        Kaewwongsa
    Input Text      //*[@id="postal-code"]      40000
    Click Element       //*[@id="continue"]
    Capture Page Screenshot

Verify your cart
    Page Should Contain Element     //*[@id="header_container"]/div[2]      Your cart
    ${QTY_OF_Backpack}      Get Text        //*[@id="cart_contents_container"]/div/div[1]/div[3]/div[1]
    Should Be Equal     ${QTY_OF_Backpack}      1
    ${QTY_OF_Bike}      Get Text        //*[@id="cart_contents_container"]/div/div[1]/div[4]/div[1]
    Should Be Equal     ${QTY_OF_Bike}      1
    ${QTY_OF_Bolt}      Get Text        //*[@id="cart_contents_container"]/div/div[1]/div[5]
    Should Be Equal     ${QTY_OF_Bolt}      1
    ${QTY_OF_Things}    Get Text        //*[@id="cart_contents_container"]/div/div[1]/div[6]/div[2]
    Should Be Equal     ${QTY_OF_Things}    1
    ${QTY_OF_Onesie}    Get Text        //*[@id="cart_contents_container"]/div/div[1]/div[7]
    Should Be Equal     ${QTY_OF_Onesie}       1
    ${QTY_OF_Jacket}    Get Text        //*[@id="cart_contents_container"]/div/div[1]/div[8]
    Should Be Equal     ${QTY_OF_Jacket}        1
    

Verify review
    Page Should Contain Element      //*[@id="header_container"]       CHECKOUT: OVERVIEW
    ${QTY_OF_Backpack}      Get Text    //*[@id="checkout_summary_container"]/div/div[1]/div[3]/div[1]
    ${QTY_OF_Backpack}      Convert To Number   ${QTY_OF_Backpack}
    ${PRICE_OF_Backpack}     Get Text       //*[@id="checkout_summary_container"]/div/div[1]/div[3]/div[2]/div[2]/div
    ${PRICE_OF_Backpack}    Remove String       ${PRICE_OF_Backpack}    $
    ${PRICE_OF_Backpack}    Convert To Number   ${PRICE_OF_Backpack}

    ${total_Backpack}   Evaluate    ${QTY_OF_Backpack} * ${PRICE_OF_Backpack}
    

    ${QTY_OF_Bike}      Get Text    //*[@id="checkout_summary_container"]/div/div[1]/div[4]/div[1]
    ${QTY_OF_Bike}      Convert To Number   ${QTY_OF_Bike}
    ${PRICE_OF_Bike}    Get Text    //*[@id="checkout_summary_container"]/div/div[1]/div[4]/div[2]/div[2]/div
    ${PRICE_OF_Bike}    Remove String       ${PRICE_OF_Bike}    $
    ${PRICE_OF_Bike}    Convert To Number   ${PRICE_OF_Bike}

    ${total_Bike}       Evaluate    ${QTY_OF_Bike} * ${PRICE_OF_Bike}

    ${QTY_OF_Bolt}      Get Text    //*[@id="checkout_summary_container"]/div/div[1]/div[5]/div[1]
    ${QTY_OF_Bolt}      Convert to Number    ${QTY_OF_Bolt}
    ${PRICE_OF_Bolt}    Get Text       //*[@id="checkout_summary_container"]/div/div[1]/div[5]/div[2]/div[2]/div
    ${PRICE_OF_Bolt}    Remove String   ${PRICE_OF_Bolt}        $
    ${PRICE_OF_Bolt}    Convert To Number   ${PRICE_OF_Bolt}

    ${total_Bolt}       Evaluate      ${QTY_OF_Bolt} * ${PRICE_OF_Bolt}

    ${QTY_OF_Things}    Get Text    //*[@id="checkout_summary_container"]/div/div[1]/div[6]/div[1]
    ${QTY_OF_Things}    Convert To Number    ${QTY_OF_Things}
    ${PRICE_OF_Things}  Get Text    //*[@id="checkout_summary_container"]/div/div[1]/div[6]/div[2]/div[2]/div
    ${PRICE_OF_Things}  Remove String       ${PRICE_OF_Things}        $
    ${PRICE_OF_Things}  Convert To Number   ${PRICE_OF_Things}

    ${total_Things}     Evaluate      ${QTY_OF_Things} * ${PRICE_OF_Things}

    ${QTY_OF_Onesie}    Get Text    //*[@id="checkout_summary_container"]/div/div[1]/div[7]/div[1]
    ${QTY_OF_Onesie}    Convert To Number   ${QTY_OF_Onesie}
    ${PRICE_OF_Onesie}  Get Text    //*[@id="checkout_summary_container"]/div/div[1]/div[7]/div[2]/div[2]/div
    ${PRICE_OF_Onesie}  Remove String   ${PRICE_OF_Onesie}      $
    ${PRICE_OF_Onesie}  Convert To Number  ${PRICE_OF_Onesie}

    ${total_Onesie}     Evaluate      ${QTY_OF_Onesie} * ${PRICE_OF_Onesie}

    ${QTY_OF_Jacket}    Get Text    //*[@id="checkout_summary_container"]/div/div[1]/div[8]/div[1]
    ${QTY_OF_Jacket}    Convert To Number   ${QTY_OF_Jacket}
    ${PRICE_OF_Jacket}  Get Text    //*[@id="checkout_summary_container"]/div/div[1]/div[8]/div[2]/div[2]/div
    ${PRICE_OF_Jacket}  Remove String   ${PRICE_OF_Jacket}      $
    ${PRICE_OF_Jacket}  Convert To Number  ${PRICE_OF_Jacket}

    ${total_Jacket}     Evaluate      ${QTY_OF_Jacket} * ${PRICE_OF_Jacket}

    ${sumtotal_product}     Evaluate        ${total_Backpack} + ${total_Bike} + ${total_Bolt} + ${total_Things} + ${total_Onesie} + ${total_Jacket}


    ${total}    Get text     class=summary_subtotal_label
    ${total}    Remove String    ${total}       Item total: $ 
    ${total}    Convert To Number   ${total}

    Should Be Equal     ${sumtotal_product}     ${total} 

    ${tax}  Get Text    class=summary_tax_label 
    ${tax}  Remove String   ${tax}   Tax: $
    ${tax}  Convert To Number   ${tax}

    ${taxcal}   Evaluate   ${sumtotal_product} * 0.08
    ${taxcal}   Convert To Number   ${taxcal}   2

    Should Be Equal     ${taxcal}   ${tax}

    ${summary}  Get text    class=summary_total_label
    ${summary}  Remove String   ${summary}      Total: $
    ${summary}  Convert To Number   ${summary}

    ${total_summary}    Evaluate    ${sumtotal_product} + ${tax}

    Should Be Equal     ${total_summary}    ${summary}


    Capture Page Screenshot

    Scroll Element Into View    //*[@id="checkout_summary_container"]/div/div[2]/div[7]
    Capture Page Screenshot