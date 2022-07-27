import React from 'react';
import Card from './Card';
import  '../../css/Card.css';

import TechnicalSkills from './technical-skills'
import SoftSkills from './soft-skills'


function Sepacademy() {
  return (
      <div>
        <div className="about-sep">
            <h1> <b>Computers are Changing Everything</b></h1>
            <p> From cell phones, GPS navigation systems, satellites, movies, to our SMART home systems ("Hey, Alexa, turn the light off please!"), our lives are changing in the speed of light. As so, technology affects every career field! We believe that every 21st century student should have a chance to learn about algorithms, how to make apps, and how the internet works, just like they learn about photosynthesis, the digestive system, or electricity.</p>
             <br></br>
            <p> In the SEP Pathway you will learn popular coding languages like Python, HTML, CSS and Javascript among others. You also have an opportunity to learn cloud computing and web design! In addittion to this, students will learn about soft skills to be the best candidate for any job, have CTE endorsement on their diploma and gain insight to how the real world operates by going on field trips and participating in internships.</p>
                 <br></br>
                 <h2><b>Software Engineering Pathway Course Sequence</b></h2>
                      <p>Take a look at our course sequence below to see what you will be learning about in each grade!</p>
        <div className="card-bigcontainer">
        <Card
            imageUrl='https://snap.berkeley.edu/img/snap-byob.png' 
            title= '9th grade: TEALS Intro to Computer Science'
            body='Students learn basic concepts of computer science through SNAP!, an online-based programming language made by University of Berkeley and MIT. The curriculum incorporates game design and development as culminating projects.'
            additional='https://snap.berkeley.edu/'
            />

        <Card
            imageUrl='https://yt3.ggpht.com/ytc/AAUvwngUVZBmVudvFKbysQZGc-aE7R-qOspK3d7lrZjI=s900-c-k-c0x00ffffff-no-rj' 
            title= '10th grade: Exploring Computer Science'
            body='Students learn the most popular coding language, Python, through Amazon-sponsored platform called Project Stem and Edhesive. Students will also able to be eligible to take PCEP – Certified  Entry-Level Python Programmer exam from Python Institute.'
            additional='https://www.edhesive.com/'
            />

        <Card
            imageUrl='data:image/jpeg;base64,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' 
            title= '11th grade: Cloud Computing and Web Design'
            body='Students will prepare to take Cloud Computing and Intro to Web Design.'
            />

        <Card
            imageUrl='data:image/webp;base64,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' 
            title= '12th grade: Computer Science and the City'
            body='In CS and the City, a course designed by CS4ALL, students will learn basic web design skills and learn to use and analyze the NYC open data portal. Students in this course developed THIS website using the knoweldge gained from CS & the City! '
            /> 

        </div>
        <div>
        <Card
            imageUrl='https://cdn.glitch.global/6ac6432c-00f9-4704-bd6d-9fee9f579364/download.jpg?1657810448474"
            alt="Image of software engineer at a computer' 
            title= 'Technical Skills'
            body='Technical skills are the specialized knowledge and expertise required
            to perform specific tasks and use specific tools and programs in real
            world situations.'
            additional= 'https://www.coursera.org/articles/what-are-technical-skills'
            
            />
        </div>
        <TechnicalSkills/>
        <div>
        <Card
            imageUrl='https://cdn.glitch.global/6ac6432c-00f9-4704-bd6d-9fee9f579364/download.jpg?1657805721587'
            alt='Image of people in office meeting' 
            title= 'Soft Skills'
            body='Soft skills are skills, traits, and abilities that indicate how well
            you work with others'
            additional= 'https://www.indeed.com/career-advice/resumes-cover-letters/soft-skills'
            />
        <SoftSkills/>
        </div>
     </div>
     </div>
    );
}

export default Sepacademy;