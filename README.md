## HackUTA18

# The idea
Our idea was to create an intuitive device that can water all of your plants for you. We wanted it to be controllable from a native mobile app (both iOS and Android, since we had both kinds of phones), and to function without ever having to touch the hardware. It's hard to find time to water house-plants in college, and this device was designed to take care of that while requiring minimal user interaction.

# How we built it
We built the **electronics** side of the project was built using a Raspberry Pi, a water pump, a moisture sensor, and a few other electrical components. The water pump we used to water the plant itself required a 12V DC 400mA input, so we used a MOSFET transistor to allow current to flow into the water pump when a "high" voltage was sent from the Raspberry Pi GPIO pins into the gate. We used an analog moisture sensor and an analog-to-digital converter (ADC) to convert the signal to be read by the Pi. The Pi was set to sleep most of the time to conserve power and would wake up at certain intervals in order to check the database for any changes as well as take readings to relay to the frontend. We tried to solder the electronics together for a more permanent solution but ended up pressed for time towards the end.

The **frontend** of the project was written in React Native, in order to give us the ability to quickly develop for Android as well as iOS. It features a list of the user's plants that are in the system, each with individual watering frequency (min) and water amount values (mL), which can be modified at the user's convenience. Additionally, the frontend native app displays readings taken from the Pi, such as current moisture in the soil and tank level warnings.

The **backend** was written in Node.js and Express.js, with a MySQL database containing all of the plant data. The Node/Express server was deployed onto Google Cloud (App Engine) using the free credits given to us at the start of the hackathon, and the MySQL database is hosted on a free SQL database hosting site. Our database is lightweight enough that this was more than enough storage to contain our entries.

We used Git for our version control and Github as our remote repository.

# Challenges we ran into
Our original goal for the backend was to use the Django framework. We had a lot of difficulties installing all of the correct software in order to get the server started, especially when it came to downloading the correct versions. We also experienced issues trying to use the Google Cloud SQL database, and trying to establish a socket connection between the server and database on Google Cloud (we ended up just using a different SQL host). Finally, we had difficulties triggering our transistor to send the 12V DC current through to the pump, and we had to end up going to a Fry's Electronics to pick up a small operational amplifier to amplify the gate voltage. In the end, this didn't end up being a very effective solution, as the nonidealities of the op amp meant that we couldn't amplify the signal from the Pi quite high enough every time.

# Accomplishments that we're proud of
We were able to deploy a full-stack web/native mobile app using a self-sustaining IoT device and cloud computing in under 24 hours. That's about as many buzzwords as we could fit into that sentence.

# What we learned
Andrew: I got more experience ideating projects from start to finish under pressure. I've always been weaker at analog circuits (although I'm a Computer Engineering major), so this was a chance for me to practice designing circuits and thinking of creative solutions on the fly. I also got more experience developing a backend server, and was able to deploy my code onto a cloud server for the first time.

David: As a supply chain major, this hackathon has been a huge learning experience for me. Primarily I have learned much about the problems of software development, specifically in Full-Stack Development. I was surprised to see how difficult it is for our development to have reliable communication with one another. Also, installing all of the proper connections with package management systems, and confirming that you have the exact versions for optimal compatibility.

Alex: I learned that React Native was a very useful platform for mobile application development. Despite the fact that the application was getting bogged down with dependencies towards the end, it was much easier than programming the application in native mobile languages.

# What's next for Howdy Sprinkler
We had a lot of extra functionality that we intended to include that we can look into adding (in addition to fixing some of the "hacky" solutions we came up with during the competition).

Check out our Devpost page: https://devpost.com/software/howdy-sprinkler
