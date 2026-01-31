// JavaScript source code
let currentProject = 0;
const totalProjects = 4;

function showProject(index) {
    document.querySelectorAll('.project-display').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.slot-bar').forEach((bar, i) => {
        bar.classList.toggle('active', i === index);
    });

    document.querySelectorAll('.project-display')[index].classList.add('active');
    currentProject = index;
}

function nextProject() {
    currentProject = (currentProject + 1) % totalProjects;
    showProject(currentProject);
}

function previousProject() {
    currentProject = (currentProject - 1 + totalProjects) % totalProjects;
    showProject(currentProject);
}

document.querySelectorAll('.slot-bar').forEach((bar, index) => {
    if (index < totalProjects) {
        bar.addEventListener('click', () => showProject(index));
        bar.style.cursor = 'pointer';
    }
});