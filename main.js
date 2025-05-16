let colorSkills = document.getElementById('my-skills');
let colorAbout = document.getElementById('about');

function colorChange(event) {
    event.target.classList.toggle("highlight");
}

colorSkills.onclick = colorChange;
colorAbout.onclick = colorChange;
