document.addEventListener('DOMContentLoaded', function() {
  const myModal = document.getElementById('downloadModal');
  const downloadFrame = document.getElementById('downloadFrame');

  myModal.addEventListener('shown.bs.modal', function (event) {
    const iframeSrc = downloadFrame.dataset.src;
    downloadFrame.src = iframeSrc;
  });

  myModal.addEventListener('hidden.bs.modal', function (event) {
    downloadFrame.src = "";
  });
});