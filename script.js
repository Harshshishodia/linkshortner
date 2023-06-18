// Get necessary elements
const originalLinkInput = document.getElementById('originalLinkInput');
const shortenButton = document.getElementById('shortenButton');
const resultContainer = document.getElementById('resultContainer');
const shortLink = document.getElementById('shortLink');

// Shorten the link
shortenButton.addEventListener('click', () => {
  const originalLink = originalLinkInput.value;
  if (originalLink.trim() !== '') {
    // In a real implementation, you would need to generate a short link using back-end logic
    // and store it in a database.
    const shortLinkValue = 'https://example.com/abcd123'; // Dummy short link
    shortLink.textContent = shortLinkValue;
    shortLink.href = shortLinkValue;
    resultContainer.style.display = 'block';
    originalLinkInput.value = '';
  }
});
