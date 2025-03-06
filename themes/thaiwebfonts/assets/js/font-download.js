document.addEventListener('DOMContentLoaded', function() {
  const downloadModal = document.getElementById('downloadModal');
  const downloadFrame = document.getElementById('download-frame-container');

  if (downloadModal) {
    downloadModal.addEventListener('shown.bs.modal', function (event) {
      const iframeSrc = downloadFrame.dataset.src;
      const iframe = document.createElement('iframe');
      iframe.src = iframeSrc;
      iframe.style.width = '100%';
      iframe.style.height = '150px';
      iframe.style.border = '0';
      downloadFrame.appendChild(iframe);
    });

    downloadModal.addEventListener('hidden.bs.modal', function (event) {
      downloadFrame.innerHTML = '';
    });
  }
});