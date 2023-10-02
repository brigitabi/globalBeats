# Global Beats 🗞️

![Global Beats Home Page](public/GB1.png)

Global Beats is a website that provides users with the latest news articles in four different categories. It uses React for the front-end, Tailwind CSS for styling, NewsAPI for fetching news data, and Firebase for user authentication and data storage.

![Global Beats Sign Up Page](public/GB2.png)

![Global Beats Account](public/GB3.png)

## Installation

1. Clone the repository:
   ```bash
   git@github.com:brigitabi/globalBeats.git

2. Navigate to the project directory:

   ```bash
   cd global-beats

3. Install the required dependencies using npm or yarn:
    ```bash
  npm install

4. Create a Firebase project and configure the Firebase credentials. You'll need to set up Firebase Authentication and Firestore for user authentication and data storage.

5. Update your firebase.js file in the project root directory by adding your Firebase configuration. 

6. Start the development server:
  ```bash
   npm start

7. Open your web browser and visit http://localhost:3000 to view the website.

Congratulations! 🎉 

## Technologies Used

- React 
- Tailwind CSS
- NewsAPI
- Firebase

This project has beeen created for learning purposes. Inital plan has been to deploy it to the Firebase, however only later in the project I realized that the News API Developer tier allows only fetching the data from the API in development and testing phase, however not in production so I decided to keep it that way. See the operating website in development above. 

Happy coding! 