package adam.dev.ecom_enterprise.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.DeleteObjectRequest;
import software.amazon.awssdk.services.s3.model.GetUrlRequest;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.S3Exception;
import java.io.IOException;
import java.net.URI;
import java.net.URL;
import org.apache.commons.io.FilenameUtils;
import java.time.Instant;
import java.util.List;

@RequiredArgsConstructor
@Service
public class S3Service {

    private final S3Client s3Client;

    @Value("${aws.s3.bucket-name}")
    private String bucketName;

    public String uploadFile(MultipartFile file) {
        if (file == null || file.isEmpty()) {
            return "";
        }

        try {
            String key = generateKey(file);
            PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(key)
                    .contentType(file.getContentType())
                    .build();

            s3Client.putObject(putObjectRequest, RequestBody.fromBytes(file.getBytes()));

            return getFileUrl(key);
        } catch (IOException | S3Exception e) {
            throw new RuntimeException("Failed to upload file to S3", e);
        }
    }

    public List<String> uploadFiles(List<MultipartFile> files) {
        List<String> fileUrls = files != null ? files.parallelStream()
                .map(this::uploadFile)
                .toList() : List.of();

        return fileUrls;
    }

    public void deleteFile(String fileUrl) {
        try {
            String key = (new URI(fileUrl)).getPath().substring(1);
            DeleteObjectRequest deleteObjectRequest = DeleteObjectRequest.builder()
                    .bucket(bucketName)
                    .key(key)
                    .build();
            s3Client.deleteObject(deleteObjectRequest);
        } catch (Exception e) {
            throw new RuntimeException("Failed to delete file from S3", e);
        }
    }

    private String getFileUrl(String key) {
        GetUrlRequest request = GetUrlRequest.builder()
                .bucket(bucketName)
                .key(key)
                .build();
        URL url = s3Client.utilities().getUrl(request);
        return url.toString();
    }

    private String generateKey(MultipartFile file) {
        String originalName = file.getOriginalFilename();
        String baseName = FilenameUtils.getBaseName(originalName);
        String extension = FilenameUtils.getExtension(originalName);

        return String.format("%s_%s.%s", baseName, Instant.now().toString(), extension);
    }

}
