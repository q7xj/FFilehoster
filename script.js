document.getElementById('upload-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const fileInput = document.getElementById('file-input');
  const file = fileInput.files[0];
  
  if (!file) {
    alert('No file selected');
    return;
  }
  
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('/upload', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();
  alert(`File uploaded to: ${result.url}`);
});
