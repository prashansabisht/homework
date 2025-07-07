function generateResume() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const degree = document.getElementById('degree').value;
  const school = document.getElementById('school').value;
  const year = document.getElementById('year').value;
  const experience = document.getElementById('experience').value;

  const previewHTML = `
    <h3>${name}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <h4>🎓 Education</h4>
    <p>${degree} - ${school} (${year})</p>
    <h4>💼 Experience</h4>
    <p>${experience}</p>
  `;

  document.getElementById('resumePreview').innerHTML = previewHTML;
}

function downloadPDF() {
  const element = document.getElementById('resumePreview');
  const opt = {
    margin: 0.3,
    filename: 'My_Resume.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().from(element).set(opt).save();
}