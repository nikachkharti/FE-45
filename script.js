let studentContainer = document.getElementById('studentContainer');
let searchStudentsInput = document.getElementById('searchStudentsInput');
let subjects = document.getElementsByClassName('subject-dropdown');
let studentNavLink = document.getElementsByClassName('student-nav-link');
let navbar = document.getElementsByClassName('navbar');
let toggleLabel = document.getElementsByClassName('toggleLabel');
let sortByScoreBtn = document.getElementById('sortByScoreBtn');


let students=[
    {
        id:1,
        firstName:'ნიკა',
        lastName:'ჩხარტიშვილი',
        age:27,
        score:51.2,
        subject:'HTML',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed aperiam harum quae a quisquam tempora, dolorum tenetur suscipit necessitatibus porro incidunt id odio beatae, alias dicta quas voluptatem at.',
        image:'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000',
    },
    {
        id:2,
        firstName:'გიორგი',
        lastName:'გიორგაძე',
        age:18,
        score:91.2,
        subject:'CSS',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed aperiam harum quae a quisquam tempora, dolorum tenetur suscipit necessitatibus porro incidunt id odio beatae, alias dicta quas voluptatem at.',
        image:'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000',
    },
    {
        id:3,
        firstName:'დავით',
        lastName:'დავითაშვილი',
        age:55,
        score:55.1,
        subject:'CSS',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed aperiam harum quae a quisquam tempora, dolorum tenetur suscipit necessitatibus porro incidunt id odio beatae, alias dicta quas voluptatem at.',
        image:'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000',
    },
    {
        id:4,
        firstName:'ალექსანრე',
        lastName:'ალექსანდროვი',
        age:32,
        score:44.2,
        subject:'Javascript',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed aperiam harum quae a quisquam tempora, dolorum tenetur suscipit necessitatibus porro incidunt id odio beatae, alias dicta quas voluptatem at.',
        image:'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000',
    },
    {
        id:5,
        firstName:'გოჩა',
        lastName:'სარჯველაძე',
        age:32,
        score:95,
        subject:'Javascript',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed aperiam harum quae a quisquam tempora, dolorum tenetur suscipit necessitatibus porro incidunt id odio beatae, alias dicta quas voluptatem at.',
        image:'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000',
    },
]

//ზოგადად ინფორმაციის შევსება
function fillCards(data) {
    if (data.score > 80) {
        studentContainer.innerHTML+=
        `
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card mt-3">
            <span class="badge bg-success w-50 position-absolute shadow">წარჩინებული</span>
            <img src="${data.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${data.firstName} ${data.lastName}</h5>
                <p class="card-text">ქულა: ${data.score}</p>
                <p class="card-text">საგანი: ${data.subject}</p>
                <a class="btn btn-primary" onclick="showStudentDetails(${data.id})">დეტალურად</a>
            </div>
            </div>
        </div>
        `
    }
    else{
        studentContainer.innerHTML+=
        `
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card mt-3">
            <img src="${data.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${data.firstName} ${data.lastName}</h5>
                <p class="card-text">ქულა: ${data.score}</p>
                <p class="card-text">საგანი: ${data.subject}</p>
                <a class="btn btn-primary" onclick="showStudentDetails(${data.id})">დეტალურად</a>
            </div>
            </div>
        </div>
        `
    }
}

//დეტალურად ინფორმაციის შევსება
function fillCardsInDetail(data){
    studentContainer.innerHTML = `
    <div class="card">
        <img src="${data.image}" class="card-img-top">
        <div class="card-body">
            <p class="card-text">${data.description}</p>
            <p class="card-text">ასაკი: ${data.age} წლის</p>
            <p class="card-text">ქულა: ${data.score}</p>
            <p class="card-text">საგანი: ${data.subject}</p>
        </div>
    </div>
    `
}


//სტუდენტების დალაგება ნიშNის მიხედვით
sortByScoreBtn.addEventListener('click',()=>{
    studentContainer.innerHTML = '';
    const studentsSortedByScore = students.sort((a,b)=>b.score - a.score);
    studentsSortedByScore.forEach(element => {
        fillCards(element);
    });
})




// დეტალური გვერდი
function showStudentDetails(id){
    studentContainer.innerHTML = '';
    const student = students.find(x=>x.id === id);
    fillCardsInDetail(student);
}



//dark mode
function toggleDarkMode(){
    document.body.classList.toggle('bg-dark');
    navbar[0].classList.toggle('bg-dark');
    navbar[0].classList.toggle('navbar-dark');
    toggleLabel[0].classList.toggle('text-white');
    if (toggleLabel[0].textContent === 'დაბნელება') {
        toggleLabel[0].textContent = 'გათეთრება';
    }
    else{
        toggleLabel[0].textContent = 'დაბნელება';
    }
}



//HTML -ის სტუდენტები
subjects[0].addEventListener('click',()=>{
    studentContainer.innerHTML='';
    const htmlStudents = students.filter(student=>student.subject.toLowerCase().includes('HTML'.toLowerCase()));
    htmlStudents.forEach(element => {
        fillCards(element);
    });
})

//CSS -ის სტუდენტები
subjects[1].addEventListener('click',()=>{
    studentContainer.innerHTML='';
    const cssStudents = students.filter(student=>student.subject.toLowerCase().includes('CSS'.toLowerCase()));
    cssStudents.forEach(element => {
        fillCards(element);
    });
})

//JS -ის სტუდენტები
subjects[2].addEventListener('click',()=>{
    studentContainer.innerHTML='';
    const jsStudents = students.filter(student=>student.subject.toLowerCase().includes('Javascript'.toLowerCase()));
    jsStudents.forEach(element => {
        fillCards(element);
    });
})




// მხოლოდ წარჩინებული სტუდენტების ჩვენება
studentNavLink[2].addEventListener('click',()=>{
    studentContainer.innerHTML='';
    const successfulStudents = students.filter(student=>student.score >80);
    successfulStudents.forEach(element => {
        fillCards(element);
    });
})



searchStudentsInput.addEventListener('keyup',(e)=>{
    studentContainer.innerHTML='';
    const searchValue = e.target.value;
    const filteredStudents = students.filter(student=>student.firstName.toLowerCase().includes(searchValue.toLowerCase()));
    filteredStudents.forEach(element => {
        fillCards(element);
    });
})



students.forEach(element => {
    fillCards(element);
});


//2. დავწეროთ ფუნქციონალი რომელიც სორტიების პრინციპით გადაალაგებს სტუდენტებს