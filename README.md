
# iSEE Email Validation

This web application allows users to validate email addresses using the emailvalidation.io API. Simply enter an email address into the input field and click "Submit" to see the validation results.

### How to Use

1. **Enter Email Address**: Type the email address you want to validate into the input field.

2. **Submit**: Click the "Submit" button to initiate the validation process.

3. **View Results**: Once the validation is complete, the results will be displayed in the result container below the form.

### Obtaining API Key

To use this application, you need to obtain an API key from the [iSEE Email Validation website](https://emailvalidation.io/). Follow these steps to get your API key:

1. Visit [emailvalidation.io](https://emailvalidation.io/) and sign up for an account.

2. After signing up and logging in, navigate to your account settings or dashboard.

3. Look for the section related to API access or API keys.

4. Generate a new API key or copy your existing API key.

### Using the Application

Replace the placeholder API key in the JavaScript file (`index.js`) with your actual API key obtained from iSEE Email Validation. This will allow the application to make requests to the API and validate email addresses.

```javascript
const YOUR_APIKEY = `your_api_key_here`;
```

### Technologies Used

- HTML
- CSS
- JavaScript

### Credits

This application uses the emailvalidation.io API for email validation.

