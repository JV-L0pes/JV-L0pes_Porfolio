/**
 * Roda antes da primeira pintura para evitar flash do tema errado.
 * Precisa ser inline: qualquer script externo chegaria tarde demais.
 */
const script = `
(function(){
  try {
    var stored = localStorage.getItem('jv-theme');
    var dark = stored ? stored === 'dark'
                      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  } catch (e) {
    document.documentElement.dataset.theme = 'light';
  }
})();
`.trim();

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
