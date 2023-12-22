<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

> InnovativeML is a brilliant website that teaches machine learning throught games like puzzle.
>
>InnovativeML strives to elevate the AI landscape and streamline the machine learning process by offering an intuitive platform. Users can effortlessly instruct machine learning models using text, images, and videos. As a firm believer in the transformative potential of AI, InnovativeML is dedicated to ensuring continual improvement and updates in the field. Embracing AI as the future, our platform provides a user-friendly space for users to actively contribute to the advancement and refinement of machine learning technologies.
### User Stories
- As a learner, I want to explore a variety of machine learning puzzles, so I can gain a comprehensive understanding of different concepts and applications.

- As a user, I want to receive instant feedback on my puzzle-solving attempts, so I can understand how machine learning algorithms analyze my input.

- As a beginner, I want access to tutorials and educational resources, so I can build a solid foundation in machine learning principles.

- As an enthusiast, I want to track my progress and achievements, so I can monitor my learning journey and set personal goals.

- As a developer, I want to contribute my own machine learning puzzles to the platform, so I can share my knowledge and challenge the community.

- As a user, I want the platform to support multiple media types (text, images, and videos) for teaching machine learning, so I can choose the most suitable method for my learning style.

- As an educator, I want to use InnovativeML as a supplementary tool in my machine learning courses, so I can provide students with interactive and practical learning experiences.

- As a user, I want the platform to regularly update its content and challenges, so I can stay informed about the latest developments in the field of machine learning.

- As a learner, I want the user interface to be visually appealing and easy to navigate, so I can focus on the content without unnecessary distractions.

- As a user, I want the option to connect with a community of learners, so I can exchange ideas, seek help, and collaborate on machine learning projects.

<br><br>

<!-- Prototyping -->
<img src="./readme/title3.svg"/>

> We designed Coffee Express using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

### Wireframes
| Login screen  | Register screen |  Landing screen |
| ---| ---| ---|
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |

### Mockups
| Home screen  | Menu Screen | Order Screen |
| ---| ---| ---|
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |

<br><br>

<!-- Implementation -->
<img src="./readme/title4.svg"/>

> Using the wireframes and mockups as a guide, we implemented the Coffee Express app with the following features:

### User Screens (Mobile)
| Login screen  | Register screen | Landing screen | Loading screen |
| ---| ---| ---| ---|
| ![Landing](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) |
| Home screen  | Menu Screen | Order Screen | Checkout Screen |
| ![Landing](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) |

### Admin Screens (Web)
| Login screen  | Register screen |  Landing screen |
| ---| ---| ---|
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |
| Home screen  | Menu Screen | Order Screen |
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |

<br><br>

<!-- Tech stack -->
<img src="./readme/title5.svg"/>

###  Coffee Express is built using the following technologies:

- This project uses the [Flutter app development framework](https://flutter.dev/). Flutter is a cross-platform hybrid app development platform which allows us to use a single codebase for apps on mobile, desktop, and the web.
- For persistent storage (database), the app uses the [Hive](https://hivedb.dev/) package which allows the app to create a custom storage schema and save it to a local database.
- To send local push notifications, the app uses the [flutter_local_notifications](https://pub.dev/packages/flutter_local_notifications) package which supports Android, iOS, and macOS.
  - 🚨 Currently, notifications aren't working on macOS. This is a known issue that we are working to resolve!
- The app uses the font ["Work Sans"](https://fonts.google.com/specimen/Work+Sans) as its main font, and the design of the app adheres to the material design guidelines.

<br><br>

<!-- How to run -->
<img src="./readme/title6.svg"/>

> To set up Coffee Express locally, follow these steps:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

Now, you should be able to run Coffee Express locally and explore its features.