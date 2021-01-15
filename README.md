# Application on Admin Portal 

This Project is a Simple ReactJS Project which demonstrates the following : -

1.Creating a Component in React  
2.Communicating between parent and child component  
3.Using Bootstrap along with React

# Prerequisites
 
 ## Install Node JS

 Refer to https://nodejs.org/en/ to install nodejs

 ## Install create-react-app

    npx install create-react-app 'App Name'

# Running the Application in local

   Install all the npm packages. Go into the project folder and type the following command to install all npm packages

      npm install

  In order to run the application Type the following command

       npm start

  The Application Runs on **localhost:3000** 

# Modules 

 1 Home  
 2 Login   
 3 Students  
 4 Courses

 # Application design

   ### Components 
    1.Home Component : - This Component contains a Navbar and it is the starting point of this application.When you Click on "Get Started" It will redirect you to login Page.

    2.Login Component : - This component contains a login form and you will reach to this page from home page and also by clicking on Navigation bar login option.
    In this component , we take a value from the user and use a setState method to check for a entered value if it match to our record we display a alert box.
    This form ask for a username and password and if it is entered correctly ,alert box with the message will poped up.
    You need to enter a following UserName and Password otherwise it display a error alert box.

      UserName : - mainteny
      Password : - 12345678
      
      3.Student Component : - This Page contain a form with various information and with the help of usestate method it set the value in fields and on click on submit button we can display the alert box with the updated value in it. 

      4.Course Component : - This Page contain a form with various information and with the help of usestate method it set the value in fields and on click on submit button we can display the alert box with the updated value in it. 

  ### URL

  The application url has changed every time when you switch between the components.
  

  # Resources

  **ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS.

  **React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap.


