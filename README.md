# SnapSuggest

Snap a picture, find decor!

# 🚀 Inspiration

As Computer Science students, we value our desk setups and how our rooms look, what better way to decorate our setups or rooms than to use technology!

# 💡 What It Does

You snap a picture of your desk, patio, living room, bathroom, any room you wish to decorate and with the use of clarifai to analyze the image, our app tries to find things to recommend for you to add to this space. After clarifai processes your image and we build your recommendations, we use puppeteer to scrape the Lowes website to provide you with a great selection of high quality, long lasting products to improve your home.

# 🛠️ How We Built It

For this we use a nodeJS server, EJS for the pages and we used the clarifai api to process the images and puppeteer for the web scraping to find the products.

Frontend: EJS
Backend: Node.js
APIs: Clarifai

# 🖼️ Screenshots

![Upload image](<Screenshot 2024-11-03 at 11.07.35 AM.png>)
Upload your image.

![Result](<Screenshot 2024-11-03 at 10.57.52 AM.png>)
Find the best product to complement your space on lowes.com

# 🚧 Challenges We Ran Into

We had a few more plans for this project which we didn't have time to accomplish due to time constraints, this was also our first time using the Clarifai api and a web scraper, so figuring how to use these tools was a great challenge, we also believe our app could've been optimized to run faster and display better results so we plan on working on these improvements for the future.

# 💡 Future Improvements

As mentioned previously we had a lot more planned for this project. We wanted to use their color palette recognition to be able to provide recommendations based on the color flow of the image, our main constraint here is we couldn't figure out how to extract the color from the products on the Lowes sight to be able to compare these to the color theme of the image. Next we were thinking of adding another AI layer to analyze the products on the image to better recommend products, basically let AI recommend what best would fit your space, but again due to time constraint we decided not to add another layer of complexity to our application.

# 🛠️ Setup & Installation

bash
Copy code

# Clone the repo

git clone [https://github.com/username/project-name.git](https://github.com/ebravo04/UNCHACKNC2024)

# Navigate to the project directory

cd project-name

# Install dependencies

npm install

# Run the app

node app
or
nodemon app

# 🤝 Team

List the team members and their contributions.

George Viveros-Zavaleta - Collaborator - [GitHub Profile](https://github.com/gvivero1)
Louis Viveros-Zavaleta - Collaborator - [GitHub Profile](https://github.com/lvivero1)
Eric Bravo - Collaborator - [GitHub Profile](https://github.com/ebravo04)
