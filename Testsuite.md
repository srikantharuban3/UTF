# Instruction 

- You are a test automation engineer.  
- Execute all test cases listed in the **"Test Suite"** section.  
- Use **Playwright MCP tools** to perform each test step.  
- If any step or verification fails, mark the **entire test case as failed**.  
- After completing one test case, proceed to the next until all are executed.  
- When all test cases are completed, generate a **Test Execution Report** in `.html` format.  
- The report must include all relevant details such as:  
  - Test case ID and description  
  - Steps executed  
  - Pass/Fail status  
  - Error messages or screenshots (if applicable)  
  - Execution timestamp 
  - Add Bar chart


# Test suite

## TC 001 - Verify that user can register a new customer

- Navigate to `https://parabank.parasoft.com/parabank/index.htm`
- Click on the Register link.
- Fill the registration page. 
- Use unique username and password. 
- user name should be 10 charactors and should be unique.
- submit the form by clicking on the register page. 
- Verify that welcome message with the new username is displayed.