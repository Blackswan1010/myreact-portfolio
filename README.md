# MyReact Portfolio 
![License: MIT](https://img.shields.io/badge/MIT-blue.svg) 

## Description 

Making my new portfolio with React! 



Deployed Link: [https://main--kaleidoscopic-custard-680b35.netlify.app](https://main--kaleidoscopic-custard-680b35.netlify.app)

## Installation 

To start this application, clone this repo to your machine and open in visual code editor. Within the terminal of the editor enter 'npm run start' to open in your default browser.

## Sample React Code

```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
```
Creating a router with the define route configuration. Where App is the main rendered component and the AboutPage is one of the child routes that renders to its page.


```jsx
function App() {
  return (
    <div style={styles.container}>
      <Header />
        <Navigation />
        <Outlet />
      <Footer />
    </div>
  );
```
Renders the Header, Navigation, Outlet, and Footer component. The Outlet component renders the pages based on the route configuration.

```jsx
function ContactPage() {
  // Creating and setting initial values the state variables for the fields in the form
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
```
The ContactPage component that uses the 'useState' hook to manage the state of the form fields for email, name, message, and error.

```jsx
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

 <div style={styles.container}>
            <div>
                <img style={styles.image} src="./img/my-pic.jpg" alt="Picture of Anthony" />
```
Using an object to store multiple objects with different key-values to stylize a page or multiple pages.

## Author Info 

#### Anthony

* [https://github.com/Blackswan1010](https://github.com/Blackswan1010) 

## License

 https://api.github.com/licenses/MIT 


