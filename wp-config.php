<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'shp_theme_skill_test');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '1~_oUR`<.r+v(&L&)@MuF[d,4HzE-VFj+zlZ;|lZ~Dvd~j8k-r.TuBjKvZjmM*JC');
define('SECURE_AUTH_KEY',  '@7y)6F:XzN8G ~$Tk8l.W}Vm4PKF8>hI{,O.A+zR.lZ%$8/VN]0Nw866PkuP12;l');
define('LOGGED_IN_KEY',    '`fAc_:7h]m(%+wW]Bx2e@ pxj$o&1+St8061.7@ODvxmQk:PxP7G54d[h@ll6M}x');
define('NONCE_KEY',        'DArH>=JpVD0n/q/+D^f.AH:hF}ES:~c+ZfF%=){5OZCH<w6bl^ **-vc|sQO_mCH');
define('AUTH_SALT',        '4of}1`#[gE`aUr5%ANZ_N:&&09{nyYuGFdO a4(~DuQ.86nt`0pW#9rT7d*6M!hy');
define('SECURE_AUTH_SALT', 'qtybRJ^2t=y[95>Y/H*-ILwlC+hA4/aBus4Q!scgqr_0c8W7P_zONLu/:_=GpiZj');
define('LOGGED_IN_SALT',   'Q7Iqlv*tp5n0{WWSIK>Xr(G7a#O+#?i|fzt^<#7;PU+lG[E(^=bc$w{;MaCBcUp_');
define('NONCE_SALT',       'H6!]a,(2yQHR5gh-><e72yVIB=|Z9gliqjneN.G:fT`G=r@(EfY!BbN~j,>y/sIi');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'shptest_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
