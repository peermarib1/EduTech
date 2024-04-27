<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
</head>
<body>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $start = $_POST['start'];
    $program = $_POST['program'];
    $university = $_POST['university'];

    
    $message = "New contact form submission:\n\n";
    $message .= "Name: $name\n";
    $message .= "Phone Number: $phone\n";
    $message .= "Email: $email\n";
    $message .= "Start: $start\n";
    $message .= "Program: $program\n";
    $message .= "University/College: $university\n";
    $botToken = "6484652644:AAHhjwLjB8ChP0OuhM--LuFzA-AhZqcyljc";
    $chatID = "1164092003";
    $telegramURL = "https://api.telegram.org/bot{$botToken}/sendMessage?chat_id={$chatID}&text=" . urlencode($message);

    
    $curl = curl_init();

   
    curl_setopt_array($curl, array(
        CURLOPT_URL => $telegramURL,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query([]), 
        CURLOPT_SSL_VERIFYPEER => false 
    ));

    
    $response = curl_exec($curl);

    
    curl_close($curl);

   
    if ($response) {
        
        echo '<script>
                Swal.fire({
                    icon: "success",
                    title: "Form Submitted Successfully!",
                    text: "Thank you for your submission.",
                    confirmButtonText: "OK",
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "index.html"; // Redirect to index.html
                    }
                });
            </script>';
    } else {
      
        echo '<script>
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Form submission failed. Please try again later.",
                    confirmButtonText: "OK",
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "index.html"; // Redirect to index.html
                    }
                });
            </script>';
    }
} else {
    
    header("Location: ../index.html");
}
?>

</body>
</html>
