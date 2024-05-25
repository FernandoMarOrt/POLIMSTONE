<?php
if (isset($_POST['btnEnviar'])) {
    if (!empty($_POST['nombre']) && !empty($_POST['asunto']) && !empty($_POST['telefono']) && !empty($_POST['email'])) {

        $nombre = $_POST['nombre'];
        $asunto = $_POST['asunto'];
        $telefono = $_POST['telefono'];
        $email = $_POST['email'];
        $mensaje = "Nombre: $nombre\n";
        $mensaje .= "Teléfono: $telefono\n";
        $mensaje .= "Email: $email\n";
        $header = "From: $email" . "\r\n";
        $header .= "Reply-To: $email" . "\r\n";
        $header .= "X-Mailer: PHP/" . phpversion();

        // Depuración: Mostrar los valores de las variables
        var_dump($nombre, $asunto, $telefono, $email, $mensaje, $header);

        if (mail('cuentaspam153@gmail.com', $asunto, $mensaje, $header)) {
            echo "<h4>¡Mail enviado exitosamente!</h4>";
        } else {
            echo "<h4>Error al enviar el correo.</h4>";
        }
    } else {
        echo "<h4>Por favor, complete todos los campos.</h4>";
    }
}
?>
