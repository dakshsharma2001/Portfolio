document.querySelectorAll('.skill-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.querySelector('.skill-detail').textContent = this.getAttribute('data-detail');
  });
  item.addEventListener('mouseleave', function() {
    this.querySelector('.skill-detail').textContent = '';
  });
});

var typed = new Typed('#element2', {
    strings: ['Software Developer','FullStack Developer','Freelancer'],
    typeSpeed: 90,
    backSpeed: 40,  
    loop: true
});


// document.querySelectorAll('.submit').forEach(button => {
//   button.addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent form submission
//     alert('Form submitted successfully!');
//   });
// });