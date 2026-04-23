(function() {
  const header = document.querySelector('.header');
  header.style.position = 'relative';
  header.style.height = '900px';
  header.style.overflow = 'hidden';

  const videoBg = document.createElement('div');
  Object.assign(videoBg.style, {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: '0'
  });

  const video = document.createElement('video');
  video.src = 'video/video.mp4';
  video.muted = true;
  video.autoplay = true;
  video.playsInline = true;
  Object.assign(video.style, {
    position: 'absolute',
    top: '50%',
    left: '50%',
    minWidth: '100%',
    minHeight: '100%',
    transform: 'translate(-50%, -50%)',
    objectFit: 'cover'
  });

  const darkOverlay = document.createElement('div');
  Object.assign(darkOverlay.style, {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    zIndex: '1'
  });

  video.addEventListener('ended', () => {
    video.currentTime = 0;
    video.play();
  });

  videoBg.appendChild(video);
  header.prepend(videoBg);
  header.prepend(darkOverlay);

  video.play().catch(() => {
    console.warn('Автовоспроизведение не сработало.');
  });
})();

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.has-submenu').forEach(item => {
    const submenu = item.querySelector('.submenu');

    item.addEventListener('mouseenter', () => {
      submenu.classList.add('visible');
    });
    item.addEventListener('mouseleave', () => {
      submenu.classList.remove('visible');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.has-submenu').forEach(item => {
    const submenu = item.querySelector('.submenu_up');

    item.addEventListener('mouseenter', () => {
      submenu.classList.add('visible');
    });
    item.addEventListener('mouseleave', () => {
      submenu.classList.remove('visible');
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('videoContainer');
  const video     = document.getElementById('heroVideo');
  const overlay   = document.getElementById('playOverlay');

  container.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      overlay.classList.add('hidden');
    } else {
      video.pause();
      overlay.classList.remove('hidden');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.text_span_numbers');
  const duration = 2000;

  function startAllCounters() {
    const startTime = performance.now();

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const start = 0;

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * target);
        counter.textContent = value;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counter.textContent = target; 
        }
      }

      requestAnimationFrame(update);
    });
  }

  const section = document.querySelector('.numbers_section');
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAllCounters();
        obs.disconnect();
      }
    });
  }, { threshold: 0.5 });

  io.observe(section);
});



document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.roadmap__item');
  const options = { threshold: 0.3 }; 

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const idx = Array.from(items).indexOf(el);
      el.style.setProperty('--delay', `${idx * 0.2}s`);
      el.classList.add('visible');
      obs.unobserve(el);
    });
  }, options);

  items.forEach(item => observer.observe(item));
});
