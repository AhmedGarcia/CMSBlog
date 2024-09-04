# Tech-Yak

## Description

This is a CMS-style blog site where developers can publish their articles, blog posts, and thoughts on various technical topics. Users can sign up, log in, create, update, delete their posts, and comment on others' posts. The application follows the Model-View-Controller (MVC) architectural pattern, using Handlebars.js for templating, Sequelize as the ORM, and express-session for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

1. Clone the repository: `git clone https://github.com/AhmedGarcia/CMSBlog.git `

2. Navigate to the project directory: `cd CMSBlog`

3. Install the dependencies: `npm install`

4. Create a `.env` file in the root directory and add the following:

```makefile
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=your_db_host
DB_PORT=your_db_port
SECRET=your_secret
DATABASE_URL=your_database_url
```

5. Set up the database:

```bash
npm run seed
```

6. Start the application:

```bash
npm start
```

## Usage

* Visit the homepage to view existing blog posts.

* Sign up or log in to create, update, and delete your own posts.

* Comment on other developers' posts and engage with the tech community.

## Application

Access the deployed application [here](https://cmsblog-10xx.onrender.com)

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please fork [this](https://github.com/AhmedGarcia/CMSBlog) repository and submit a pull request with your proposed changes.

## Tests

No automated tests are available for this project. However, manual testing can be done by running the application locally and interacting with the various features.

## Questions

If you have any questions, feel free to open an issue in the repository or contact me directly at my email: ahmed.garcia.ramos@gmail.com