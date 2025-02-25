package civilapplicationqwenb.domain;

import java.util.Date;
import lombok.Data;

@Data
public class PdfDocumentViewQuery {

    private String documentId;
    private String content;
    private Date generationDate;
    private DocumentStatus status;
}
