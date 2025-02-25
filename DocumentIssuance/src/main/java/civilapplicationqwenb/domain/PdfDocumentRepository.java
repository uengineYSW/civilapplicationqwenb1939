package civilapplicationqwenb.domain;

import civilapplicationqwenb.domain.*;
import java.util.Date;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//<<< PoEAA / Repository
@RepositoryRestResource(
    collectionResourceRel = "pdfDocuments",
    path = "pdfDocuments"
)
public interface PdfDocumentRepository
    extends PagingAndSortingRepository<PdfDocument, String> {
    @Query(
        value = "select pdfDocument " +
        "from PdfDocument pdfDocument " +
        "where(:documentId is null or pdfDocument.documentId like %:documentId%) and (:content is null or pdfDocument.content like %:content%) and (:generationDate is null or pdfDocument.generationDate = :generationDate) and (:status is null or pdfDocument.status = :status)"
    )
    PdfDocument pdfDocumentView(
        String documentId,
        String content,
        Date generationDate,
        DocumentStatus status
    );

    @Query(
        value = "select pdfDocument " +
        "from PdfDocument pdfDocument " +
        "where(:documentId is null or pdfDocument.documentId like %:documentId%) and (:signatureId is null or pdfDocument.signatureId like %:signatureId%) and (:signatureDate is null or pdfDocument.signatureDate = :signatureDate) and (pdfDocument.validity = :validity)"
    )
    PdfDocument signatureStatus(
        String documentId,
        String signatureId,
        Date signatureDate,
        Boolean validity
    );
}
