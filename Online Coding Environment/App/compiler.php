<?php
    $language = strtolower($_POST['language']);
    $code = $_POST['code'];

    $random = substr(md5(mt_rand()), 0, 7);
    $filePath = "temp/" . $random . "." . $language;
    $programFile = fopen($filePath, "w");
    fwrite($programFile, $code);
    fclose($programFile);

    if($language == "php") {
        $output = shell_exec("C:\php\php.exe $filePath 2>&1");
        echo $output;
    }
    if($language == "python") {
        $output = shell_exec("C:\Users\Lenovo\AppData\Local\Programs\Python\Python39\python.exe $filePath 2>&1");
        echo $output;
    }
    //C:\Program Files\Common Files\Oracle\Java\javapath
     if($language == "java") {
        rename($filePath, $filePath.".java");
        $output = shell_exec("java $filePath.java 2>&1");
        echo $output;
    }

    if($language == "node") {
        rename($filePath, $filePath.".js");
        $output = shell_exec("node $filePath.js 2>&1");
        echo $output;
    }
