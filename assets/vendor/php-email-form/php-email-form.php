<?php

class PHP_Email_Form {

    public $to;
    public $from_name;
    public $from_email;
    public $subject;
    public $message;
    public $ajax;
    public $smtp;

    public function __construct() {
        // Constructor
    }

    public function send() {
        // Validate email fields
        if (empty($this->to) || empty($this->from_name) || empty($this->from_email) || empty($this->subject) || empty($this->message)) {
            return false; // Incomplete data, unable to send email
        }

        // Compose email headers
        $headers = "From: {$this->from_name} <{$this->from_email}>\r\n";
        $headers .= "Reply-To: {$this->from_email}\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        // Send email
        if (mail($this->to, $this->subject, $this->message, $headers)) {
            return true; // Email sent successfully
        } else {
            return false; // Failed to send email
        }
    }

    public function add_message($data, $label) {
        $this->message .= "<p><strong>$label</strong>: $data</p>\n";
    }
}
