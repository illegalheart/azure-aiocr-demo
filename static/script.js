async function uploadImage() {
    const file = document.getElementById('imageInput').files[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append('image', file);
  
    const res = await fetch('/api/ocr', {
      method: 'POST',
      body: formData
    });
  
    const data = await res.json();
    document.getElementById('result').textContent = data.text || '解析失敗';
  }