<?php
    $env_path = dirname(__DIR__) . '/.env';

    if (!file_exists($env_path)) {
        die('DB 환경 설정 파일을 찾을 수 없습니다.');
    }

    $env = parse_ini_file($env_path);
    $required_keys = array('DB_HOST', 'DB_NAME', 'DB_USER', 'DB_PASS');

    foreach ($required_keys as $key) {
        if (!isset($env[$key]) || $env[$key] === '') {
            die('DB 환경 설정값이 누락되었습니다.');
        }
    }

    $connect = mysql_connect($env['DB_HOST'], $env['DB_USER'], $env['DB_PASS']) or
        die('SQL server에 연결할 수 없습니다.');

    mysql_select_db($env['DB_NAME'], $connect);
?>
