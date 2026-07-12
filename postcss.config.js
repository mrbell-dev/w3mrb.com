// Project-root PostCSS config — overrides the theme's (Hugo resolves the
// `config: "postcss.config.js"` HBS passes against the project root first).
//
// Why this exists: Hugo runs PostCSS under Node's permission model scoped to
// the project dir. autoprefixer's default browserslist lookup walks UP the
// directory tree (past the project root) hunting for a browsers config, which
// Node denies -> ERR_ACCESS_DENIED. Passing `overrideBrowserslist` makes
// autoprefixer skip the file search entirely. Harmless on Cloudflare too.

// Bound browserslist's config/stats search to this project so it never walks
// up to the parent dir (which Node's permission model denies under Hugo).
process.env.BROWSERSLIST_ROOT_PATH = __dirname;

const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'not dead'],
    }),
    ...(process.env.HUGO_ENVIRONMENT === 'production'
      ? [require('./purgecss.config.js').default]
      : []),
  ],
};
