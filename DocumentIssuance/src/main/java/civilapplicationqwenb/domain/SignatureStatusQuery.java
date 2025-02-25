package civilapplicationqwenb.domain;

import java.util.Date;
import lombok.Data;

@Data
public class SignatureStatusQuery {

    private String documentId;
    private String signatureId;
    private Date signatureDate;
    private Boolean validity;
}
