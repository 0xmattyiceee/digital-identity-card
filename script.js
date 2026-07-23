// Click the .skr chip to copy the handle, with a brief toast + haptic tap.
const chip = document.getElementById('skrChip');
const toast = document.getElementById('copiedToast');

if (chip && toast) {
    chip.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText('0xmattyic333.skr');
            toast.classList.add('show');
            if (window.navigator.vibrate) {
                window.navigator.vibrate(30);
            }
            setTimeout(() => toast.classList.remove('show'), 1800);
        } catch (err) {
            console.error('Copy failed:', err);
        }
    });
}
