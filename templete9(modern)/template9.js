//preventing form default
// let preform = document.querySelector("form")
// preform.addEventListener((event) => {
//     preform.event.preventDefault();
// })
//Form-section-invoke
let invokebtn = document.getElementById("button")
let designmode = document.querySelector(".designmode")
let getform = document.querySelector(".form-main")
let getresume = document.querySelectorAll(".resume-main ")
let colinvoke = document.querySelector(".column-invoke")
invokebtn.addEventListener('click', () => {
    getform.style.display = "block"
    colinvoke.className = "col-md-6 "
    getform.style.width = "auto-width"
    getform.style.height = "1600px"
    designmode.style.display = "block"
    invokebtn.style.display = "none"

})
//getting name
let username = document.querySelector(".user-name")
let usernameinput = document.querySelector("#usernameinput")

usernameinput.addEventListener('keypress', () => {
    username.textContent = ""
    username.textContent = usernameinput.value
}
)
//getting job profile
let jobprofile = document.querySelector(".user-job-description ")
let jobprofileinput = document.querySelector("#jobroleinput")

jobprofileinput.addEventListener('keypress', () => {
    jobprofile.textContent = ""
    jobprofile.textContent = jobprofileinput.value
}
)
//contact details
//getting phone details
let userphone = document.querySelector(".user-phone")
let userphoneinput = document.querySelector("#user-contact-phone")

userphoneinput.addEventListener('keypress', () => {
    userphone.textContent = ""
    userphone.textContent = userphoneinput.value
}
)
//getting email
let useremail = document.querySelector(".user-email")
let useremailinput = document.querySelector("#user-contact-email")

useremailinput.addEventListener('keypress', () => {
    useremail.textContent = ""
    useremail.textContent = useremailinput.value
}
)
//linkiedin
let userwebsite = document.querySelector(".user-website")
let userwebsiteinput = document.querySelector("#user-contact-link")

userwebsiteinput.addEventListener('keypress', () => {
    userwebsite.setAttribute("href", userwebsiteinput.value)
    userwebsite.textContent = ""
    userwebsite.textContent = userwebsiteinput.value
}
)
//userprofile
let userprofile = document.querySelector(".user-profile")
let userprofileinput = document.querySelector("#user-profile-input")

let profilebtn = document.querySelector(".profile-submit")
profilebtn.addEventListener('click', () => {
    userprofile.textContent = userprofileinput.value

})
//getting skills
let userskillsinput = document.querySelector("#userskillsinput")

let skillssubmitbtn = document.querySelector(".skills-submit")
// var arr = [];
let uldefault = document.getElementById("ux")
// let userskills = document.querySelectorAll(".default-skills")
skillssubmitbtn.addEventListener('click', () => {
    uldefault.remove()
    let ulcurrent = document.getElementById("ux-2")
    let li = document.createElement("li")
    let h6 = document.createElement("h6")
    li.append(h6)
    h6.textContent = userskillsinput.value;
    ulcurrent.append(li)
    // arr.push(userskillsinput.value)
    // arr.map(item => {


    // }
    // )
    userskillsinput.value = ""
})
//getting experience
let userexperience = document.querySelector(".user-experience")
let userexperienceinput = document.querySelector("#userexperienceinput")
let firstlist = document.querySelector(".firstlist")
let userexperiencebtn = document.querySelector(".experience-submit")
let exul = document.querySelector(".ex-ul")
userexperiencebtn.addEventListener('click', () => {
    firstlist.remove()
    let li = document.createElement("li")
    let h6 = document.createElement("h6")
    li.append(h6)
    h6.textContent = userexperienceinput.value
    exul.append(li)
    userexperienceinput.value = ""
})
let usereducation = document.querySelector(".user-education")
let usereducationinput = document.querySelector("#usereducationinput")
let cancelbtn = document.querySelector(".cancel")

usereducationinput.addEventListener('keypress', () => {
    usereducation.textContent = usereducationinput.value
})

cancelbtn.addEventListener('click', () => {
    getform.style.display = "none"
    colinvoke.className = "retained"
    designmode.style.display = "none"
    invokebtn.style.display = "block"

})
let addbtn = document.querySelector(".add")
addbtn.addEventListener('click', () => {
    username.textContent = usernameinput.value
    jobprofile.textContent = jobprofileinput.value
    userphone.textContent = userphoneinput.value
    useremail.textContent = useremailinput.value
    userwebsite.textContent = userwebsiteinput.value
    usereducation.textContent = usereducationinput.value
    getform.style.display = "none"
    colinvoke.className = "retained1"
    designmode.style.display = "none"
    invokebtn.style.display = "block"


})  