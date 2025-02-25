package civilapplicationqwenb.domain;

import java.util.Date;
import lombok.Data;

@Data
public class ApplicationSummaryQuery {

    private String applicationNumber;
    private ServiceType serviceType;
    private ApplicationStatus status;
    private Date applicationDate;
}
