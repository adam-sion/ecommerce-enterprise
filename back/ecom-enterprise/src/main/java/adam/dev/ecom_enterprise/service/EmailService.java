package adam.dev.ecom_enterprise.service;

import adam.dev.ecom_enterprise.exception.rest.EmailSendingException;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    private static final String IMAGE_PATH = "static/images/jtvCandles.jpeg";

    public void sendEmail(String toEmail, String subject, String content) {
        try {
           MimeMessage mail = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mail, true);
            helper.setTo(toEmail);
            helper.setFrom(fromEmail);
            helper.setSubject(subject);
            helper.setText(content, true);
            ClassPathResource imageResource = new ClassPathResource(IMAGE_PATH);
            helper.addAttachment("jtvCandles.jpeg",imageResource);

            mailSender.send(mail);
        } catch (MessagingException e) {
            throw new EmailSendingException("Failed to send email: " + e.getMessage());
        }
    }
}
