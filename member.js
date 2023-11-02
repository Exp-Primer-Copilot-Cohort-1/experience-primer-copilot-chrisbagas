function skillsMember() {
  // Skills
  var skills = document.querySelectorAll('.skills__item');
  var skillsList = document.querySelector('.skills__list');
  var skillsContent = document.querySelector('.skills__content');

  if (skillsList) {
    skillsList.addEventListener('click', function(e) {
      var target = e.target;

      if (target.classList.contains('skills__item')) {
        var data = target.dataset.skills;

        [].forEach.call(skills, function(item) {
          item.classList.remove('skills__item--active');
        });

        target.classList.add('skills__item--active');

        skillsContent.classList.remove('skills__content--active');
        document.querySelector('.skills__content[data-skills-content="' + data + '"]').classList.add('skills__content--active');
      }
    });
  }
}