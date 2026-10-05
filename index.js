const express = require("express")
const app = express()
const cors = require('cors')
const port = 5000


app.get('/', (req, res) => {
    res.send('hello world')
})
app.use(express.json())
const users = [
    {
        id: 1,
        name: "Rahim Ahmed",
        email: "rahim@example.com",
        age: 24,
        profession: "Frontend Developer",
        image: "https://i.pravatar.cc/150?img=1",
    },
    {
        id: 2,
        name: "Karim Hasan",
        email: "karim@example.com",
        age: 26,
        profession: "Backend Developer",
        image: "https://i.pravatar.cc/150?img=2",
    },
    {
        id: 3,
        name: "Sadia Akter",
        email: "sadia@example.com",
        age: 23,
        profession: "UI/UX Designer",
        image: "https://i.pravatar.cc/150?img=3",
    },
    {
        id: 4,
        name: "Nusrat Jahan",
        email: "nusrat@example.com",
        age: 25,
        profession: "React Developer",
        image: "https://i.pravatar.cc/150?img=4",
    },
    {
        id: 5,
        name: "Tanvir Hossain",
        email: "tanvir@example.com",
        age: 27,
        profession: "Software Engineer",
        image: "https://i.pravatar.cc/150?img=5",
    },
    {
        id: 6,
        name: "Mim Akter",
        email: "mim@example.com",
        age: 22,
        profession: "Web Designer",
        image: "https://i.pravatar.cc/150?img=6",
    },
    {
        id: 7,
        name: "Fahim Rahman",
        email: "fahim@example.com",
        age: 28,
        profession: "Full Stack Developer",
        image: "https://i.pravatar.cc/150?img=7",
    },
    {
        id: 8,
        name: "Jannatul Ferdous",
        email: "jannatul@example.com",
        age: 24,
        profession: "Graphic Designer",
        image: "https://i.pravatar.cc/150?img=8",
    },
    {
        id: 9,
        name: "Sakib Khan",
        email: "sakib@example.com",
        age: 29,
        profession: "Node.js Developer",
        image: "https://i.pravatar.cc/150?img=9",
    },
    {
        id: 10,
        name: "Sumaiya Islam",
        email: "sumaiya@example.com",
        age: 21,
        profession: "Frontend Developer",
        image: "https://i.pravatar.cc/150?img=10",
    },
    {
        id: 11,
        name: "Imran Hossain",
        email: "imran@example.com",
        age: 30,
        profession: "DevOps Engineer",
        image: "https://i.pravatar.cc/150?img=11",
    },
    {
        id: 12,
        name: "Tania Rahman",
        email: "tania@example.com",
        age: 23,
        profession: "Product Designer",
        image: "https://i.pravatar.cc/150?img=12",
    },
    {
        id: 13,
        name: "Arif Hasan",
        email: "arif@example.com",
        age: 25,
        profession: "MERN Stack Developer",
        image: "https://i.pravatar.cc/150?img=13",
    },
    {
        id: 14,
        name: "Raisa Ahmed",
        email: "raisa@example.com",
        age: 26,
        profession: "Mobile App Developer",
        image: "https://i.pravatar.cc/150?img=14",
    },
    {
        id: 15,
        name: "Shakil Ahmed",
        email: "shakil@example.com",
        age: 27,
        profession: "Python Developer",
        image: "https://i.pravatar.cc/150?img=15",
    },
    {
        id: 16,
        name: "Ayesha Rahman",
        email: "ayesha@example.com",
        age: 22,
        profession: "Content Writer",
        image: "https://i.pravatar.cc/150?img=16",
    },
    {
        id: 17,
        name: "Nayeem Islam",
        email: "nayeem@example.com",
        age: 24,
        profession: "JavaScript Developer",
        image: "https://i.pravatar.cc/150?img=17",
    },
    {
        id: 18,
        name: "Sabrina Akter",
        email: "sabrina@example.com",
        age: 25,
        profession: "SEO Specialist",
        image: "https://i.pravatar.cc/150?img=18",
    },
    {
        id: 19,
        name: "Rifat Hossain",
        email: "rifat@example.com",
        age: 28,
        profession: "Database Engineer",
        image: "https://i.pravatar.cc/150?img=19",
    },
    {
        id: 20,
        name: "Mahiya Islam",
        email: "mahiya@example.com",
        age: 23,
        profession: "Next.js Developer",
        image: "https://i.pravatar.cc/150?img=20",
    },
];

app.get('/data', (req, res)=>{
    res.send(users)
})

app.listen(port, () => {
    console.log('server is running on port' + port)
})


