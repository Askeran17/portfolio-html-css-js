
let colorSkills = document.getElementById('my-skills');
let colorAbout = document.getElementById('about');
let colorPersonal = document.getElementById('personal-info');


function colorChange(event) {
    event.target.classList.toggle("highlight");
}

if (colorSkills) colorSkills.onclick = colorChange;
if (colorAbout) colorAbout.onclick = colorChange;
if (colorPersonal) colorPersonal.onclick = colorChange;

