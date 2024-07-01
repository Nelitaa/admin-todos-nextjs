<a name="readme-top"></a>

<div align="center">
  <h3><b>README</b></h3>

</div>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

# 📖 ADMIN TODOS <a name="about-project"></a>

**ADMIN TODOS** is a web application developed with Next.js, featuring a RESTful API, database management with Prisma, user authentication, task (todo) management functionality, and product management with shopping cart capabilities.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client and Server</summary>
  <ul>
    <li><a href="https://reactjs.org/">React</a></li>
    <li><a href="https://tailwindcss.com/">Tailwind CSS</a></li>
    <li><a href="https://nextjs.org/">Next.js</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- **[Create_RESTful_API]**
- **[Implement_User_Authentication]**
- **[Manage_Shopping_Cart]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

```sh
  Visual Studio Code
```

### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone git@github.com:Nelitaa/admin-todos-nextjs.git
```

### Install

To run the project, follow these steps:

1. To start the database, use Docker. Run the command: `docker compose up -d`
2. Create a copy of `.env.template` and rename it to `.env`.
3. Open the `.env` file in a text editor.
4. Replace the values of the environment variables as needed with your specific environment configuration.
5. Run the following commands:

```sh
npm install
npx prisma migrate dev
npx prisma generate
npm run dev
```

6. Run SEED to create the local database(localhost:3000/api/seed). - Postman

Prisma commands:

```
npx prisma init
```

## Default User

**user:** nela@test.com
**password:** 123456

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Marianela Muñoz Gutierrez**

- GitHub: [@Nelitaa](https://github.com/Nelitaa)
- Twitter: [@MarianelaMunoz](https://twitter.com/MarianelaMunoz_)
- LinkedIn: [Marianela-munoz](https://www.linkedin.com/in/marianela-munoz/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **[responsive_design]**
- [ ] **[live_demo]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project, give me a star.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Fernando Herrera.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
