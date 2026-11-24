const desktop = matchMedia('(min-width: 741px)');
for (const gallery of document.querySelectorAll<HTMLElement>('.photos')) {
  const figures = Array.from(gallery.querySelectorAll('figure'));
  function arrange() {
    gallery.classList.toggle('masonry', desktop.matches);
    if (!desktop.matches) {
      gallery.style.height = '';
      for (const figure of figures) figure.style.transform = '';
      return;
    }
    const gap = parseFloat(getComputedStyle(gallery).columnGap);
    gallery.style.setProperty('--gutter', gap + 'px');
    const heights = figures.map(
      (figure) => figure.getBoundingClientRect().height,
    );
    const stride = (gallery.clientWidth + gap) / 2;
    const bottoms = [0, 0];
    figures.forEach((figure, index) => {
      const column = bottoms[0] <= bottoms[1] ? 0 : 1;
      figure.style.transform =
        'translate(' + column * stride + 'px,' + bottoms[column] + 'px)';
      bottoms[column] += heights[index] + gap;
    });
    gallery.style.height = Math.max(...bottoms, gap) - gap + 'px';
  }
  arrange();
  const observer = new ResizeObserver(arrange);
  for (const figure of figures) observer.observe(figure);
  desktop.addEventListener('change', arrange);
}
export {};
