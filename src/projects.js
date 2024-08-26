'use strict';

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;
    if (filter == null) {
        return;
    }
    handleActiveSelection(event.target);    
    filterProjects(filter);
});

function handleActiveSelection(target) {
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');

}

function filterProjects(filter) {
        projectContainer.classList.add('anim-out');
        projects.forEach((project) => {
            if (filter === 'all' || filter === project.dataset.type) {
                project.style.opacity = 1 ;
            } else {
                project.style.opacity = 0.1 ;            
            }
        });
        setTimeout(() => {
            projectContainer.classList.remove('anim-out');
        }, 250);      
}