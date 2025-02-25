package civilapplicationqwenb.domain;

import civilapplicationqwenb.ApplicationProcessingApplication;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Map;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Application_table")
@Data
//<<< DDD / Aggregate Root
public class Application {

    @Id
    private String applicationNumber;

    @Enumerated(EnumType.STRING)
    private ServiceType serviceType;

    private Date applicationDate;

    @Enumerated(EnumType.STRING)
    private ApplicationStatus status;

    @Embedded
    private Document documents;

    @Embedded
    private UserData userData;

    @Embedded
    private DataCollectorId dataCollectorId;

    public static ApplicationRepository repository() {
        ApplicationRepository applicationRepository = ApplicationProcessingApplication.applicationContext.getBean(
            ApplicationRepository.class
        );
        return applicationRepository;
    }

    public void CreateApplication() {
        //
    }
}
//>>> DDD / Aggregate Root
