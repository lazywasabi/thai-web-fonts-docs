const editor = document.querySelector('.font-preview-content');
if (editor) {
  editor.addEventListener('paste', (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertHTML', false, text);
  });

  function setSize(val) {
    document.getElementById('previewSizeValue').textContent = val;
    editor.style.fontSize = val + 'px';
  }

  function setWidth(val) {
    editor.style.fontStretch = val + '%';
    document.querySelector('#previewWidth').value = val;
    document.querySelector('#previewWidthValue').textContent = val;
  }

  function setWeight(val, title) {
    const isVariable = document.querySelector('.twf-font-preview-variable');
    const weightVal = document.querySelector('#previewWeightValue');
    const weightVar = document.querySelector('#previewWeight');
    editor.style.fontWeight = val;
    if (isVariable) {
      weightVal.textContent = val;
      weightVar.value = val;
    } else {
      document.querySelector(
        '.twf-font-preview-settings-weight-dropdown button'
      ).textContent = title;
    }
  }
}
