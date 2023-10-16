*** Settings ***
Library    SeleniumLibrary
Resource     ../keyword/keywords_saucedemo.robot

***Variables***
${URL}      https://www.saucedemo.com/
${USER1}        standard_user
${USER2}        locked_out_user
${USER3}        problem_user
${USER4}        performance_glitch_user
${PASSWORD}     secret_sauce