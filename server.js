const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Website Homepage</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
    <link rel="stylesheet" href="./stylesheet.css">
</head>
<body>
      <!--Navbar section-->

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Varinder's Portfolio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/projects">My Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="resume" href="./Student-resume-with-no-experience.png" download>Download Resume</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./hireme">Hire Me!!!</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>

      <!--Carousel section-->
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <!-- <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*k0SazfSJ-tPSBbt2WDYIyw.png" class="d-block w-100" alt="..."> -->
             
            <img src="./Untitled design.png" class="d-block w-100" alt="">
          </div>
          <div class="carousel-item">
            <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*AWOohKIQ_FGJrIb6VNKsdA.jpeg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://usa.bootcampcdn.com/wp-content/uploads/sites/113/2020/05/full-stack-developer-skills-850x412.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!--About section-->

      <div class="row" id="about">
        <div class="col-12">
            <h1>About Me</h1>
            <p>Hi, I'm <strong>Varinder Singh</strong>, a passionate and dedicated full stack web developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). With a strong foundation in both front-end and back-end development, I enjoy creating seamless, efficient, and user-friendly web applications.</p>

            <a href="about.html"><button class="btn btn-outline-primary btn-lg">Know More About Me</button></a>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
            <div id="dummysec1">
                <h1>I don't just build websites, I create websites that SELL</h1>
            </div>
        </div>
      </div>

      <!--Projects Section-->
      <div class="row" id="projectshead">
        <div class="col-12">
            <h1>
                My Projects
            </h1>
        </div>
      </div>
      <div class="row" id="projects">
        <div class="col-4">
            
            <div class="card">
                <img src="https://user-images.githubusercontent.com/21228768/50609487-0b795c00-0ed0-11e9-9b4a-5e5d2ad2c51e.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">ToDo List</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                  <a href="#" class="btn btn-primary">View</a>
                </div>
              </div>

              
        </div>

        <div class="col-4">
            
            <div class="card">
                <img src="https://repository-images.githubusercontent.com/242107265/0946d800-54ab-11ea-8e1c-671b6f3044ee" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Stopwatch</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. One of my fav project</p>
                  <a href="#" class="btn btn-primary">View</a>
                </div>
              </div>

              
        </div>

        <div class="col-4">
            
            <div class="card">
                <img src="./Capture.PNG " class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Random Color</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="./multicolor.html" class="btn btn-primary">View</a>
                </div>
              </div>

              
        </div>

        <a href=""><button class="btn btn-outline-primary btn-lg">More...</button></a>
      </div>

      <!--Contact Section-->
      <div class="row" id="contact">
        <div class="col-12">
            <h1>Contact Me</h1>
            <a href=""><button class="btn btn-outline-primary btn-lg">Contact</button></a>
        </div>
      </div>





      <!--Footer Section-->
      <footer>Copyright 2024 &copy; Varinder Singh</footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
    `
  )
})

// about endpoint
app.get('/about', (req, res) => {
    res.send(
        `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
    <link rel="stylesheet" href="./stylesheet.css">
</head>
<body>
     <!--Navbar section-->

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Varinder's Portfolio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/projects">My Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="resume" href="./Student-resume-with-no-experience.png" download>Download Resume</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./hireme">Hire Me!!!</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>

    <!--About Me Section-->
    <div class="row">
        <div class="col-12">
            <div id="abouthero"></div>
        </div>
    </div>

    <div class="row" id="aboutme">
        <div class="col-8 offset-2">
            <h1>About Me</h1>
                <p>
                    Hi, I'm Varinder Singh, a passionate and dedicated full stack web developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). With a strong foundation in both front-end and back-end development, I enjoy creating seamless, efficient, and user-friendly web applications.
                </p>
        </div>
    </div>

    <div class="row" id="myjourney">
        <div class="col-8 offset-2">
            <h1>My journey</h1>
                <p>
                    My journey into web development began with a fascination for how websites work behind the scenes. This curiosity led me to dive deep into coding, where I discovered the power of JavaScript and its ecosystem. Since then, I have honed my skills through various projects, online courses, and hands-on experience.
                </p>
        </div>
    </div>

    <div class="row" id="whatido">
        <div class="col-8 offset-2">
            <h1>what i do</h1>
                <p>
                    As a MERN stack developer, I build dynamic and responsive web applications that provide excellent user experiences. From designing interactive user interfaces with React to setting up robust back-end services with Node.js and Express, I handle every aspect of web development. My work also includes managing databases with MongoDB to ensure data integrity and performance.
                </p>
        </div>
    </div>

    <div class="row" id="myskills">
        <div class="col-8 offset-2">
            <h1>my skills</h1>
                <p>
                    Front-End: React, HTML5, CSS3, JavaScript, Redux
                    Back-End: Node.js, Express.js, RESTful APIs
                    Database: MongoDB, Mongoose
                    Tools & Technologies: Git, GitHub, Visual Studio Code, Postman, Docker
                    Other: Responsive Design, Agile Methodology, Test-Driven Development
                </p>
        </div>
    </div>

    
    <div class="row" id="MyPhilosophy">
        <div class="col-8 offset-2">
            <h1>My Philosophy</h1>
                <p>
                    I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and technologies. Collaboration and continuous learning are key components of my approach to development. I thrive in environments where I can both contribute to and learn from a talented team.
                </p>
        </div>
    </div>

    
    <div class="row" id="LetConnect">
        <div class="col-8 offset-2">
            <h1>Let's Connect</h1>
                <p>
                    I'm always open to discussing new opportunities, exciting projects, or simply connecting with like-minded individuals. Feel free to reach out to me through [your preferred contact method], and let's create something amazing together!
                </p>
        </div>
    </div>
    <!--Footer Section-->
    <footer>Copyright 2024 &copy; Varinder Singh</footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
        `
    )
  })

// myprojects endpoint
  app.get('/projects', (req, res) => {
    res.send(
        `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My projects</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
    <link rel="stylesheet" href="./stylesheet.css">
</head>
<body>
      <!--Navbar section-->

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Varinder's Portfolio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/projects">My Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="resume" href="./Student-resume-with-no-experience.png" download>Download Resume</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./hireme">Hire Me!!!</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>

      <!--Projects Section-->

      <div class="row" id="projectshead">
        <div class="col-12">
            <h1>
                My Projects
            </h1>
        </div>
      </div>
      <div class="row" id="projects">
        <div class="col-4">
            
            <div class="card">
                <img src="https://user-images.githubusercontent.com/21228768/50609487-0b795c00-0ed0-11e9-9b4a-5e5d2ad2c51e.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">ToDo List</h5>
                  <p class="card-text">“The journey of a thousand miles begins with a single step.”. </p>
                  <a href="#" class="btn btn-primary">View</a>
                </div>
              </div>

              
        </div>

        <div class="col-4">
            
            <div class="card">
                <img src="https://repository-images.githubusercontent.com/242107265/0946d800-54ab-11ea-8e1c-671b6f3044ee" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Stopwatch</h5>
                  <p class="card-text">"Every second counts."</p>
                  <a href="#" class="btn btn-primary">View</a>
                </div>
              </div>

              
        </div>

        <div class="col-4">
            
            <div class="card">
                <img src="https://user-images.githubusercontent.com/61316762/202421986-15b41dee-5dff-48ce-a78d-85f58ad459a9.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Random Color</h5>
                  <p class="card-text">Unlimited Color Choices:.</p>
                  <a href="./multicolor.html" class="btn btn-primary">View</a>
                </div>
              </div>

              
        </div>

        


      
    
      <div class="row" id="projects">
        <div class="col-4">
            
            <div class="card">
                <img src="./photo-1507133750040-4a8f57021571-1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">coffee website..</h5>
                  <p class="card-text">“Drink coffee: do stupid things faster with more energy.”. </p>
                  <a href="#" class="btn btn-primary">View</a>
                </div>
              </div>

              
        </div>

        <div class="col-4">
            
            <div class="card">
                <img src="./pexels-vladyslav-dukhin-131821.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">flower store</h5>
                  <p class="card-text">"Life is the flower for which love is the honey."</p>
                  <a href="#" class="btn btn-primary">View</a>
                </div>
              </div>

              
        </div>

        <div class="col-4">
            
            <div class="card">
                <img src="./pexels-madelynemery-954677.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Delicious food</h5>
                  <p class="card-text">"The secret ingredient is always love.".</p>
                  <a href="#" class="btn btn-primary">View</a>
                </div>
              </div>

              
        </div>

       

    <!--Footer Section-->
    <footer>Copyright 2024 &copy; Varinder Singh</footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
        `
    )
  })

  app.get('/hireme', (req, res) => {
    res.send(
        `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
    <link rel="stylesheet" href="./stylesheet.css">
</head>
<body>
    <!--Navbar section-->

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Varinder's Portfolio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/projects">My Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="resume" href="./Student-resume-with-no-experience.png" download>Download Resume</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./hireme">Hire Me!!!</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>

      <!--Contact Section Start-->
      <div class="row">
        <div class="col-6" id="contact">
            <h1>Contact Me</h1>
            <ul>
                <li>Address: <strong>123, Jammu, J&K (UT)</strong></li>
                <li>Email: <strong>testmail.testmail.com</strong></li>
                <li>Phone: <strong>+91 - 9876543210</strong></li>
            </ul>
        </div>
        <div class="col-6" id="contact">
            <h1>Connect with Me</h1>
            <ul>
                <li>LinkedIn</li>
                <li>Github</li>
                <li>StackOverflow</li>
            </ul>
        </div>
       
      </div>


      <hr>

      <div class="row">
        <div class="col-6" id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26840.064407712365!2d74.8390157!3d32.7655209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723282401319!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="col-6" id="form">
            <form action="">
                
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  
  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="+91 - 9876543210">
  
  <input type="submit" class="form-control btn btn-outline-primary" id="exampleFormControlInput1">
            </form>
        </div>
      </div>


      <footer>Copyright 2024 &copy; Varinder Singh</footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
        `
    )
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})