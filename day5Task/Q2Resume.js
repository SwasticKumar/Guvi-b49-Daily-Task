//---------------------------------------RESUME Data in JSON Format------------------------------------------------------

let resume = `{
    "name": "Swastic Kumar N",
    "title": "Website Developer",
    "about": "I am a WordPress Designer with 2 years of experience in Freelancing and I completed my programming course, MERN Stack Developer in GUVI.",
    
    "personalDetails":{
        "email": "kswastic@gmail.com",
        "mobile": ["8668156373", "9655794796"],
        "address": "M84, TNUDP, NAVALPATTU, ANNA NAGAR, Tiruchirappalli, India",
        "website": "https://swasticblog.com",
        "linkedIn": "linkedin.com/in/swastic-kumar-a56910157",
        
        "workExperience":{
            "companyName": "FindRiser-Digital Marketing Agency",
            "place": "Trichy",
            "workAt": "Freelance",
            "workTitle": ["Blogger", " Website Developer", "Affiliate Marketer"],
            "periodOfWorked": "01/2020 - 02/2022",
            
            "education":{
                "bachelorDegree": "B.Tech-CIVIL ENGINEERING",
                "place": "PRIST UNIVERSITY, Thanjavur",
                "passoutYear": "2017",
                "addonCourse" : ["Python FullStack-Systech, Trichy (Offline)", "MERN Stack-GUVI, Chennai (Online)"],
                "skills": ["JavaScript", "Django", "HTML", "CSS", "Python", "WordPress"],
                
                "project":{
                    "wordpressProject": ["Citizens House Cleaning", "FindRisers - Digital Marketing Agency", "Be In Nature - Just Breathe", "Landmark Fitness Studio", "Genious Consultancy", "Thom Foods"],
                    "djangoProject": ["DESKTOP APPLICATIONS USING PYTHON & MYSQL(School Management System, Login System, etc...)", "WEB APPLICATIONS EMPLOYEE MANAGEMENT SYSTEM USING DJANGO"],
                    "htmlCssProject": "Personal Portfolio Website - swasticBlog(live)",
                    
                    "achievement":{
                        "selfLearned": ["DNS", "Hosting Website"]
                    }
}}
}}}`;
let objFormat=JSON.parse(resume);
console.log(objFormat.personalDetails.workExperience.education.addonCourse[1]);
