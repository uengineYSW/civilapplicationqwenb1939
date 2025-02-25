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
@Table(name = "ElectronicSignature_table")
@Data
//<<< DDD / Aggregate Root
public class ElectronicSignature {

    @Id
    private String signatureId;

    private String documentId;

    private String userId;

    private Date signatureDate;

    @Enumerated(EnumType.STRING)
    private SignatureStatus status;

    @Embedded
    private UserData userData;

    @Embedded
    private Document document;

    public static ElectronicSignatureRepository repository() {
        ElectronicSignatureRepository electronicSignatureRepository = DocumentIssuanceApplication.applicationContext.getBean(
            ElectronicSignatureRepository.class
        );
        return electronicSignatureRepository;
    }

    public void VerifyElectronicSignature() {
        //
    }
}
//>>> DDD / Aggregate Root
