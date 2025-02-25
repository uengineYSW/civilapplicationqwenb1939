package civilapplicationqwenb.domain;

import civilapplicationqwenb.DocumentIssuanceApplication;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Map;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "PdfDocument_table")
@Data
//<<< DDD / Aggregate Root
public class PdfDocument {

    @Id
    private String documentId;

    private String content;

    private Date generationDate;

    @Enumerated(EnumType.STRING)
    private DocumentStatus status;

    @Embedded
    private UserData userData;

    @Embedded
    private Document documents;

    public static PdfDocumentRepository repository() {
        PdfDocumentRepository pdfDocumentRepository = DocumentIssuanceApplication.applicationContext.getBean(
            PdfDocumentRepository.class
        );
        return pdfDocumentRepository;
    }

    public void GeneratePDF() {
        //
    }
}
//>>> DDD / Aggregate Root
