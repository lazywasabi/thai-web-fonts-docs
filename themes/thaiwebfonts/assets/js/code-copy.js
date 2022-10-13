const btnHtml = [
  '<div class="twf-code-highlight position-relative">',
  '   <div class="twf-highlight-clipboard">',
  '      <button type="button" class="btn btn-secondary btn-clipboard position-absolute top-0 end-0">',
  '        Copy',
  '      </button>',
  '   </div>',
  '</div>',
].join('');

document.querySelectorAll('.highlight').forEach((element) => {
  element.insertAdjacentHTML('beforebegin', btnHtml);
  element.previousElementSibling.append(element);
});

const clipboard = new ClipboardJS('.btn-clipboard', {
  target: (trigger) =>
    trigger.closest('.twf-code-highlight').querySelector('.highlight'),
});

clipboard.on('success', (event) => {
  event.clearSelection();
  event.trigger.classList.remove('btn-secondary');
  event.trigger.classList.add('btn-success');
  event.trigger.innerText = 'Copied';
  setTimeout(() => {
    event.trigger.classList.add('btn-secondary');
    event.trigger.classList.remove('btn-success');
    event.trigger.innerText = 'Copy';
  }, 3000);
});
