<?php
session_start();

// Sample user data (you would typically store this in a database)
$users = [
    'user1@example.com' => 'password1',
    'user2@example.com' => 'password2',
];

if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (array_key_exists($email, $users) && $users[$email] === $password) {
        // Authentication successful
        $_SESSION['user'] = $email;
        header('Location: dashboard.php');
        exit;
    } else {
        // Authentication failed
        $loginError = 'Invalid email or password';
    }
}

if (isset($_POST['signup'])) {
    $email = $_POST['signup-email'];
    $password = $_POST['signup-password'];

    // Add user to the sample data (in a real application, store in a database)
    $users[$email] = $password;

    // Redirect to login page
    header('Location: index.php');
    exit;
}

if (isset($_GET['logout'])) {
    // Log out the user
    unset($_SESSION['user']);
    session_destroy();
    header('Location: index.php');
    exit;
}
?>
