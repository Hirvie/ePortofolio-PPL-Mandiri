// Navigation
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const sections = document.querySelectorAll('.section');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function closeSidebar() {
    if (sidebar) sidebar.classList.remove('active');
    if (sidebarOverlay) sidebarOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openSidebar() {
    if (sidebar) sidebar.classList.add('active');
    if (sidebarOverlay) sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = link.getAttribute('data-section');

        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        sections.forEach(section => {
            section.classList.remove('active');
        });

        const target = document.getElementById(targetSection);
        if (target) {
            target.classList.add('active');
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        closeSidebar();
    });
});

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        if (sidebar && sidebar.classList.contains('active')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
}

// Profile links
const waLink = document.getElementById('waLink');
const alamatLink = document.getElementById('alamatLink');

if (waLink) {
    waLink.href = 'https://wa.me/6281234567890';
    waLink.target = '_blank';
    waLink.rel = 'noopener noreferrer';
}

if (alamatLink) {
    alamatLink.href = 'https://maps.google.com';
    alamatLink.target = '_blank';
    alamatLink.rel = 'noopener noreferrer';
}

// File Viewer
function openFileViewer(filePath, title) {
    const modal = document.getElementById('fileModal');
    const modalTitle = document.getElementById('fileModalTitle');
    const fileFrame = document.getElementById('fileFrame');

    if (!modal || !fileFrame) return;

    if (modalTitle) modalTitle.textContent = title;
    fileFrame.src = filePath;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFileViewer() {
    const modal = document.getElementById('fileModal');
    const fileFrame = document.getElementById('fileFrame');

    if (modal) modal.classList.remove('active');
    if (fileFrame) fileFrame.src = '';
    document.body.style.overflow = 'auto';
}

// Video Viewer
function openVideoViewer(videoPath, title) {
    const modal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('videoModalTitle');
    const videoPlayer = document.getElementById('videoPlayer');

    if (!modal || !videoPlayer) return;

    if (modalTitle) modalTitle.textContent = title;
    videoPlayer.src = videoPath;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoViewer() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');

    if (modal) modal.classList.remove('active');
    if (videoPlayer) {
        videoPlayer.pause();
        videoPlayer.src = '';
    }
    document.body.style.overflow = 'auto';
}

// Image Viewer
function openImageViewer(imagePath, title) {
    const modal = document.getElementById('imageModal');
    const modalTitle = document.getElementById('imageModalTitle');
    const imageViewer = document.getElementById('imageViewer');

    if (!modal || !imageViewer) return;

    if (modalTitle) modalTitle.textContent = title;
    imageViewer.src = imagePath;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeImageViewer() {
    const modal = document.getElementById('imageModal');
    const imageViewer = document.getElementById('imageViewer');

    if (modal) modal.classList.remove('active');
    if (imageViewer) imageViewer.src = '';
    document.body.style.overflow = 'auto';
}

// Download File
function downloadFile(filePath) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeFileViewer();
        closeVideoViewer();
        closeImageViewer();
        closeSidebar();
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .gallery-item, .profile-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Logo click to go to beranda
const sidebarLogo = document.querySelector('.sidebar-header');
if (sidebarLogo) {
    sidebarLogo.addEventListener('click', () => {
        sidebarLinks.forEach(l => {
            if (l.getAttribute('data-section') === 'beranda') {
                l.click();
            }
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    sidebarLogo.style.cursor = 'pointer';
}

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.4s ease-in';
