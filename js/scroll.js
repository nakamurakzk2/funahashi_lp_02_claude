/**
 * Scroll Animation Handler
 * Intersection Observer API を使用したスクロールアニメーション
 */

(function() {
  'use strict';

  // ==================== Configuration ====================
  const config = {
    threshold: 0.2,      // 要素が20%見えたらアニメーション開始
    rootMargin: '0px',   // ルートのマージン
    introDuration: 3500, // イントロアニメーション全体の時間（ms）
  };

  // ==================== Intro Animation ====================
  function initIntroAnimation() {
    const intro = document.getElementById('intro');
    const body = document.body;

    if (!intro) return;

    // スクロールをロック
    body.classList.add('intro-active');

    // アニメーション開始
    requestAnimationFrame(() => {
      intro.classList.add('animate');
    });

    // イントロをフェードアウト
    setTimeout(() => {
      intro.classList.add('fade-out');
      body.classList.remove('intro-active');

      // イントロを完全に削除
      setTimeout(() => {
        intro.remove();
      }, 800);
    }, config.introDuration);
  }

  // ==================== Initialize Scroll Animations ====================
  function initScrollAnimations() {
    // アニメーション対象のセレクタ
    const animationSelectors = [
      '.section-title',
      '.concept-card',
      '.story-content',
      '.story-image',
      '.details-image',
      '.details-info',
      '.details-routes',
      '.benefits-content',
      '.benefits-image',
      '.flow-image',
      '.cta-limited',
      '.cta-title',
      '.section-cta-final .btn-primary'
    ];

    // 各要素にアニメーションクラスを追加
    animationSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        // FVセクション内の要素は除外（別のアニメーションが適用されているため）
        if (!el.closest('.section-fv')) {
          el.classList.add('animate-on-scroll');
        }
      });
    });

    // 特定の要素にスライドアニメーションを適用
    const slideLeftElements = document.querySelectorAll('.story-content, .benefits-content, .details-image');
    slideLeftElements.forEach(el => {
      el.classList.remove('animate-on-scroll');
      el.classList.add('animate-slide-left');
    });

    const slideRightElements = document.querySelectorAll('.story-image, .benefits-image, .details-info');
    slideRightElements.forEach(el => {
      el.classList.remove('animate-on-scroll');
      el.classList.add('animate-slide-right');
    });

    // Intersection Observer を作成
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: config.threshold,
      rootMargin: config.rootMargin
    });

    // すべてのアニメーション対象要素を監視
    const allAnimatedElements = document.querySelectorAll(
      '.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-fade, .animate-scale'
    );

    allAnimatedElements.forEach(el => {
      observer.observe(el);
    });
  }

  // ==================== Intersection Handler ====================
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // 一度アニメーションしたら監視を解除
        observer.unobserve(entry.target);
      }
    });
  }

  // ==================== Counter Animation ====================
  function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');

    if (counters.length === 0) return;

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  }

  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'), 10);
    const duration = parseInt(element.getAttribute('data-duration') || '2000', 10);
    const start = 0;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutQuart easing
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (target - start) * easeProgress);

      element.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }

  // ==================== Smooth Scroll for Anchor Links ====================
  function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        if (href === '#') return;

        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();

          const headerOffset = 0; // ヘッダーの高さがある場合は調整
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ==================== Parallax Effect (Optional) ====================
  function initParallax() {
    const fvBackground = document.querySelector('.fv-background img');

    if (!fvBackground) return;

    let ticking = false;

    function updateParallax() {
      const scrollY = window.pageYOffset;
      const windowHeight = window.innerHeight;

      // FVセクション内でのみパララックス効果を適用
      if (scrollY < windowHeight) {
        const translateY = scrollY * 0.3;
        fvBackground.style.transform = `translateY(${translateY}px)`;
      }

      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }

  // ==================== Initialize on DOM Ready ====================
  function init() {
    // イントロアニメーション（reduced-motion を考慮）
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      initIntroAnimation();
    } else {
      // reduced-motion の場合はイントロをスキップ
      const intro = document.getElementById('intro');
      if (intro) intro.remove();
    }

    // ブラウザがIntersection Observerをサポートしているか確認
    if ('IntersectionObserver' in window) {
      initScrollAnimations();
      initCounterAnimation();
    } else {
      // サポートしていない場合は全て表示
      const elements = document.querySelectorAll(
        '.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-fade, .animate-scale'
      );
      elements.forEach(el => {
        el.classList.add('is-visible');
      });
    }

    initSmoothScroll();

    // パララックスは reduced-motion を考慮
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      initParallax();
    }
  }

  // DOMContentLoaded で初期化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
