<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'bd_new' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'root' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', 'root' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'v@ADb6F`e@n9X89Y]5T>$:~5x]g;B;c?Ll`VV#{W|Kk;z}-xi}-sE<az~rb7&i$`' );
define( 'SECURE_AUTH_KEY',  '614+/^ ~kF|pH/M&&z-{a3#46hi?42K<g.tlUrBxrF1vDV$z}Haf5a)0sYk=wkG!' );
define( 'LOGGED_IN_KEY',    '>145f`-.N{$vW0LeokiB$]*5UtV[!SO$6.YCAu/( :![S]m 28/&G-doXIJ-%tN2' );
define( 'NONCE_KEY',        '[mx<fOnMAU#B=Yxk|^oVg=Cc>xw7_cohyYo0Z8wY9I6$e{>,sQK{[>5Lf!W,O?&e' );
define( 'AUTH_SALT',        'd(1@JUCwGQbEIp@xr&Uu#T1/O>&mSYs5Gj*`Skz7E/Y*DE.ibMPFv3J&~mSOWD|7' );
define( 'SECURE_AUTH_SALT', '*CNY1df6O{5b2dlkSO*:2QqK4c#eE<5C/;(2E!P}kXZO/aQUv;TS-{w~j#]J<)oN' );
define( 'LOGGED_IN_SALT',   'zryigStWZ1qyg0tvc1aztmJ%Rsqg})-g}DS.B~!a|][s+bBz2&hHg4v{@)|v5a49' );
define( 'NONCE_SALT',       '0%[YxV_FGZ=zKm}RAM}[ uHWe;x3}VHH`YbxdCMrR2[]rba{-}rtb4oYoc~hh~xZ' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
