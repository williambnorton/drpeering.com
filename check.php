    <?php
        $file=file_get_contents('currentFile', true);
        echo "$file". "?build=" .  date ("F d Y H:i:s.", filemtime('currentFile'))
    ?>

