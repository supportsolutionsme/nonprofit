// Simple testimonial slider
const testimonials = document.querySelectorAll('.testimonial-item');
const controls = document.querySelectorAll('.controls button');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials[currentTestimonial].classList.remove('active');
  controls[currentTestimonial].classList.remove('active');
  currentTestimonial = index;
  testimonials[currentTestimonial].classList.add('active');
  controls[currentTestimonial].classList.add('active');
}

controls.forEach((button, idx) => {
  button.addEventListener('click', () => {
    showTestimonial(idx);
  });
});

// Auto-cycle testimonials every 6 seconds
setInterval(() => {
  const next = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(next);
}, 6000);
