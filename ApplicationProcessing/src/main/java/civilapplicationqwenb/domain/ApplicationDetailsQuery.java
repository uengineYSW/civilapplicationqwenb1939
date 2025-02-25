package civilapplicationqwenb.domain;

import java.util.Date;
import lombok.Data;

@Data
public class ApplicationDetailsQuery {

    private String applicationNumber;
    private ServiceType serviceType;
    private Date applicationDate;
    private ApplicationStatus status;
    private List<Document> documents;
    private UserData userData;
}
