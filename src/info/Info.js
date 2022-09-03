import self from "../img/self.jpg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"
import mock7 from "../img/mock7.png"
import mock8 from "../img/mock8.png"
import mock9 from "../img/mock9.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Michael Folayan",
    lastName: "",
    initials: "fm", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'Website Development'
        },
        {
            emoji: '📲',
            text: 'Mobile Application Development'
        },
        {
            emoji: "🚀",
            text: "Web 3.0, web 4.0 and Web 5.0 Technologies Explorer"
        },
        {
            emoji: "💰",
            text: "Blockchain development"
        },
        {
            emoji: "📸",
            text: "Photography"
        },
        {
            emoji: "🎌",
            text: "Identity & Brand Design"
        },
        {
            emoji: "📧",
            text: "michaelfolayan@outlook.com"
        },

        {
            emoji: "⬇️",
            text: "Download My CV",
            link: "https://drive.google.com/file/d/1PyopbwS5qARmkNkgwQPesDmu7bx63-xs/view?usp=sharing",
            
        },
       
    ],
    socials: [

        {
          
            link: "https://drive.google.com/file/d/1PyopbwS5qARmkNkgwQPesDmu7bx63-xs/view?usp=sharing",
            icon: "fa fa-folder",

        },
        {
            link: "https://wa.me/2348103817187",
            icon: 'fa fa-whatsapp'
        },
        {
            link: "https://www.linkedin.com/in/folayan-yemi",
            icon: "fa fa-linkedin"
        },
        {
            link: "https://github.com/yemmyFolayan",
            icon: "fa fa-github"
        },
      
        {
            link: "https://twitter.com/softfolayanyemi",
            icon: "fa fa-twitter"
        },

        {
            link: "https://www.youtube.com/channel/UCMcHO99n8_YxRnG1UguaDJw",
            icon: "fa fa-youtube"
        },
        {
            link: "https://www.instagram.com/folla_yemi/",
            icon: 'fa fa-instagram'
        },
   
    
        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Michael,📫 Passionate FullStack Software Engineer. ⚡ I have experience in understanding and analyzing the software engineering problems and implementing them. Excellent reputation for resolving problems and improving customer satisfaction. Dedicated professional with history of meeting company goals utilizing consistent and organized practices. Skilled in working under pressure and adapting to new situations and challenges to best enhance the organizational brand.   🔭 My interests range from Technology to Entrepreneurship. I am a technology driven person with an immense interest in Software Engineering Problems and Designs.",
    skills:
        {
            dotNet: ["C#", "ASP.NET MVC 5", "ASP.NET Web API 2", "ASPN.NET CORE", "T-SQL", "Entity", "Framework"],
            frontend: ["HTML5", "CSS3", "Bootstrap", "jQuery", "Vue.js", "React.js"],
            backend: ["Node.js", "Java", "Kotlin", "Express.js", "PHP", "Nest.js", "Typescript"],
            versionControl: ["GitHub", "GitLab", "Bitbucket"],
            database: ["MySQL", "MSSQL", "PostgreSQL", "MongoDB"],
            cloud: ["Aws", "Azure", "cPanel", "Heroku", "Plesk", "GCP"],
            frameworks: ["Spring Boot", "Laravel", "Slim", "CodeIgniter", "Lumen", "Phalcon"]


           

        }
    ,
    hobbies: [
        {
            label: 'Video Game',
            emoji: '🎮'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Swift Chain Blockchain (in Progress), Blockchain and Financial Technology Application Built with Latest and Secure Technology.",
            live: "https://swiftchain.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/YemmyFolayan", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock9
        },   


        {
            title: "Financial Technology Application Built with Flutter.",
            live: "https://wevesti.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/YemmyFolayan", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "[Intriobasket.com] Online Grocery Store with varieties of fresh Farm product Located in Abuja (FCT), Nigeria.",
            live: "https://intriobasket.com/",
            source: "https://github.com/YemmyFolayan",
            image: mock2
        },
        {
            title: "[wevesti.com] Vesti is a Fin-Tech Application that Automate Immigrants Payments (WES, IELTS, VISA, GRE, SEVIS, UK IHS).",
            live: "https://app.wevesti.com/",
            source: "https://github.com/YemmyFolayan",
            image: mock3
        },
        {
            title: "[Comserves.com] Comserve Technologies Inc. (CTI) is a dependable Engineering, Systems Integrations, consulting, and management solutions company. Located In Calgary, Canada.",
            live: "https://comserves.com/",
            source: "https://github.com/YemmyFolayan",
            image: mock4
        },
        {
            title: "[Tugapimage.com] Brand Photography Site for services like Birthday Photography, Wedding,Events & Products Photography.",
            live: "http://www.tugapimage.com/",
            source: "https://github.com/YemmyFolayan",
            image: mock5
        },
        {
            title: "[Bangvibes.com] One of the Best Entertainment Site with several features such as music and videos streaming & E-Finance.",
            live: "https://www.bangvibes.com/",
            source: "https://github.com/YemmyFolayan",
            image: mock6
        },

        {
            title: "[GEO CAM] Geo-Tagging Camera PWA, It detect Land Area Location(With Longitude & Latitude) and Date",
            live: "https://camshopifycomserve.netlify.app/",
            source: "https://github.com/YemmyFolayan",
            image: mock7
        },

        {
            title: "[SoundMansion] Soundmansion is an online free music store just like Spotify,mp3paw and the likes.",
            live: "https://www.bangvibes.com/",
            source: "https://github.com/YemmyFolayan",
            image: mock8
        }

    ]
}